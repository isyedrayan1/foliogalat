---
title: "Building Your First LLM Application - Step by Step Tutorial"
date: "2026-07-04"
excerpt: "A complete hands-on guide to building your first LLM application from scratch. Learn API integration, prompt engineering, RAG systems, and deployment. Code examples included using Next.js and Python."
author: "Syed Naseer"
kicker: "LLM_TUTORIAL"
readTime: "40 min read"
---

# Building Your First LLM Application - Step by Step

You want to build something with AI, but don't know where to start. This guide takes you from zero to shipping your first LLM application in one weekend.

We'll build a **document Q&A chatbot** that can answer questions about uploaded PDFs. It's practical, impressive, and teaches you everything you need to know.

---

## Part 1: What You're Building

### The Final Product
A web app where users can:
1. Upload a PDF document
2. Ask questions about it
3. Get AI-powered answers with sources cited

### Why This Project?
- Teaches core LLM concepts (embeddings, RAG, prompt engineering)
- Genuinely useful (you can use it immediately)
- Showcases understanding to employers
- Builds on itself (add multiple docs, fine-tuning, etc.)

### Tech Stack (What We Recommend)
- **Frontend:** Next.js 16 + React
- **Backend:** Next.js API routes or Python FastAPI
- **LLM Provider:** OpenAI (ChatGPT) or Anthropic (Claude)
- **Vector DB:** Pinecone (free tier) or Supabase (pgvector)
- **PDF Processing:** PyPDF2 or pdfplumber (Python)
- **Embeddings:** OpenAI embeddings API

**Total cost:** $0-20 for learning (free tiers available)

---

## Part 2: Prerequisites & Setup

### What You Need
- Python 3.10+ or Node.js 18+
- API keys (free):
  - OpenAI API key (get at platform.openai.com)
  - Pinecone API key (get at pinecone.io, free tier)
- Code editor (VS Code recommended)
- Terminal/Command Prompt comfort

### Step 1: Get API Keys

**OpenAI API Key:**
1. Visit https://platform.openai.com/api/keys
2. Sign up or log in
3. Create a new API key
4. Save it securely (you'll need it later)

**Cost:** Pay-as-you-go (~$0.01-0.05 per request for our use case)

**Pinecone API Key:**
1. Visit https://www.pinecone.io
2. Create free account
3. Create a new index called `documents` (dimension: 1536)
4. Get your API key

**Cost:** Free tier allows 125K vectors (enough for 10+ PDFs)

### Step 2: Set Up Your Project

```bash
# Create Next.js project
npx create-next-app@latest doc-qa-bot --typescript
cd doc-qa-bot

# Install dependencies
npm install openai @pinecone-database/pinecone axios

# Create environment file
touch .env.local
```

Add to `.env.local`:
```
NEXT_PUBLIC_OPENAI_API_KEY=sk-...your-key...
PINECONE_API_KEY=...your-key...
PINECONE_INDEX_NAME=documents
PINECONE_NAMESPACE=pdf-docs
```

---

## Part 3: Core Concepts (The Thinking Part)

Before coding, understand the flow:

### How RAG (Retrieval-Augmented Generation) Works

**Normal LLM:**
```
Question → ChatGPT → Answer
(No context, uses training data only)
```

**RAG System:**
```
Question 
  ↓
1. Convert question to embedding (vector)
2. Search vector database for similar chunks
3. Retrieve relevant document chunks
4. Add chunks as context to prompt
5. Send to ChatGPT
6. ChatGPT answers using context
  ↓
Answer (with sources cited)
```

### The Embedding Concept
An embedding is a vector representation of text. Similar texts have similar vectors.

```
"What is machine learning?" 
  → Embedding: [0.123, 0.456, 0.789, ...1536 dimensions]

"What is AI?"
  → Embedding: [0.125, 0.460, 0.785, ...1536 dimensions]

These are similar because they're about related topics.
```

---

## Part 4: Implementation - The Coding Part

### Step 1: Create API Route for PDF Upload & Processing

Create `/app/api/upload-document/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAIEmbeddings } from '@langchain/openai';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const embeddings = new OpenAIEmbeddings({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // 1. Extract text from PDF
    const bytes = await file.arrayBuffer();
    const text = await extractTextFromPDF(bytes);

    // 2. Split text into chunks
    const chunks = splitTextIntoChunks(text, 500); // 500 char chunks

    // 3. Generate embeddings for each chunk
    const embeddingsResponse = await embeddings.embedDocuments(chunks);

    // 4. Store in Pinecone with metadata
    const index = pinecone.Index('documents');
    const vectors = chunks.map((chunk, idx) => ({
      id: `${Date.now()}-${idx}`,
      values: embeddingsResponse[idx],
      metadata: {
        text: chunk,
        fileName: file.name,
        uploadedAt: new Date().toISOString(),
      },
    }));

    await index.upsert(vectors);

    return NextResponse.json({
      success: true,
      message: `Uploaded ${chunks.length} chunks from ${file.name}`,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to process document' },
      { status: 500 }
    );
  }
}

// Helper functions
function splitTextIntoChunks(text: string, chunkSize: number): string[] {
  const chunks = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.substring(i, i + chunkSize));
  }
  return chunks;
}

async function extractTextFromPDF(bytes: ArrayBuffer): Promise<string> {
  // In production, use PyPDF2 or pdfplumber
  // For now, placeholder - would integrate Python backend
  return 'Extracted PDF text...';
}
```

### Step 2: Create API Route for Question Answering

Create `/app/api/ask-question/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAI } from 'openai';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'No question provided' },
        { status: 400 }
      );
    }

    // 1. Embed the question
    const questionEmbedding = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: question,
    });

    // 2. Search Pinecone for similar chunks
    const index = pinecone.Index('documents');
    const searchResults = await index.query({
      vector: questionEmbedding.data[0].embedding,
      topK: 5, // Get top 5 relevant chunks
      includeMetadata: true,
    });

    // 3. Build context from results
    const context = searchResults.matches
      .map((m) => m.metadata?.text)
      .join('\n\n');

    // 4. Send to ChatGPT with context
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant answering questions based on provided documents. 
          Use the following context to answer the user's question. If the answer is not in the context, say so.
          Always cite which part of the document you're referencing.`,
        },
        {
          role: 'user',
          content: `Context from document:\n${context}\n\nQuestion: ${question}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({
      answer: completion.choices[0].message.content,
      sources: searchResults.matches.map((m) => ({
        text: m.metadata?.text,
        fileName: m.metadata?.fileName,
      })),
    });
  } catch (error) {
    console.error('Question error:', error);
    return NextResponse.json(
      { error: 'Failed to answer question' },
      { status: 500 }
    );
  }
}
```

### Step 3: Create Frontend Component

Create `/app/components/DocumentQA.tsx`:

```typescript
'use client';

import { useState } from 'react';

export default function DocumentQA() {
  const [file, setFile] = useState<File | null>(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload-document', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      
      if (data.success) {
        setUploaded(true);
        setFile(null);
        alert(data.message);
      }
    } catch (error) {
      alert('Upload failed: ' + error);
    } finally {
      setLoading(false);
    }
  };

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question || !uploaded) return;

    setLoading(true);
    try {
      const response = await fetch('/api/ask-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      setAnswer('Error: ' + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Document Q&A Bot</h1>

      {!uploaded ? (
        <form onSubmit={handleUpload} className="mb-8">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mb-4 block"
          />
          <button
            type="submit"
            disabled={!file || loading}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {loading ? 'Uploading...' : 'Upload PDF'}
          </button>
        </form>
      ) : (
        <div className="mb-8 p-4 bg-green-100 rounded">
          PDF uploaded successfully! Ask questions now.
        </div>
      )}

      {uploaded && (
        <form onSubmit={handleAsk} className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about your document..."
            className="w-full p-4 border rounded"
            rows={4}
          />
          <button
            type="submit"
            disabled={!question || loading}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {loading ? 'Thinking...' : 'Ask Question'}
          </button>
        </form>
      )}

      {answer && (
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
```

---

## Part 5: Testing Locally

```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
# 1. Upload a PDF
# 2. Ask questions about it
# 3. See answers with sources
```

---

## Part 6: Optimization Tips

### Token Usage (Keep Costs Low)
- Use `gpt-3.5-turbo` instead of `gpt-4` for faster/cheaper responses
- Limit context chunks (top 3-5, not 10+)
- Monitor API usage: openai.com/account/usage

### Accuracy
- Better chunks = better answers
- Use semantic chunking (split by sentences/paragraphs, not just char count)
- Include metadata (page numbers, section headers)

### Speed
- Cache embeddings (don't re-embed same text)
- Batch vector operations
- Use streaming for long responses

---

## Part 7: What You've Built

✓ **Understanding:**
- How LLMs work with external data
- Vector embeddings and similarity
- Prompt engineering
- API integration

✓ **Skills:**
- Building API routes
- Working with third-party APIs
- Basic system architecture
- Debugging LLM applications

✓ **Portfolio Project:**
- Shareable working app
- Blog post explaining it
- Foundation for 10+ variants

---

## Next Steps

1. **Deploy:** Use Vercel (free) for Next.js, Railway for Python backend
2. **Add features:** Multiple files, chat history, export answers
3. **Monetize:** Charge per document or subscription
4. **Fine-tune:** Train custom model on your data

---

## Common Errors & Solutions

| Error | Solution |
|-------|----------|
| "Rate limit exceeded" | Wait 60 seconds, upgrade OpenAI account |
| "No results found" | Your question doesn't match document content |
| "Embedding failed" | Check API key and token limits |
| "Pinecone 401" | Verify API key in environment variables |

---

## Resources

- OpenAI API docs: https://platform.openai.com/docs
- Pinecone docs: https://docs.pinecone.io
- LangChain docs: https://python.langchain.com/docs
- This week's Galat Family blog: Check our latest shipping updates

**Ship this today. Iterate every day.**
