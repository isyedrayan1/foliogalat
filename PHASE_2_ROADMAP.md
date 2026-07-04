# Galat Family - Phase 2 Roadmap: Structured Data & Internal Linking

**Status:** Ready to Start  
**Estimated Time:** 5 hours  
**Target Completion:** January 10-15, 2026  
**Owner:** Galat Family SEO Team

---

## PHASE 1 RECAP (COMPLETED ✓)

✓ Homepage copy rewritten  
✓ Navigation simplified  
✓ Metadata optimized  
✓ Sitemap created  
✓ Robots.txt created  
✓ 3 reference guides written  

**Result:** Site has intentional tone and solid technical foundation. Now ready for structured data and linking strategy.

---

## PHASE 2 OBJECTIVES

### Objective 1: Add Structured Data (JSON-LD)
**Why:** Help search engines understand your content better. Improves rich snippets and knowledge graph visibility.

**What to add:**
1. **Organization Schema** - Who Galat Family is
2. **Person Schema** - Team member profiles (Syed Rayan, Syed Naseer)
3. **Article/BlogPosting Schema** - Blog post metadata
4. **Breadcrumb Schema** - Navigation structure
5. **LocalBusiness Schema** - Optional (if applicable)

### Objective 2: Implement Internal Linking
**Why:** Helps Google crawl and understand site structure. Passes authority between pages. Keeps visitors on site longer.

**What to implement:**
1. Homepage → All main sections (about, work, blog, team)
2. Blog posts → Related posts (3-5 per post)
3. Blog posts → Related products
4. Products → Related blog posts
5. Team profiles → Projects they worked on

### Objective 3: Create Blog Post Templates
**Why:** Ensures consistency in metadata, structure, and keyword targeting across all blog posts.

**What to create:**
1. Blog post title template
2. Meta description template
3. Image optimization guide
4. Internal linking checklist
5. Keyword insertion guide

---

## DETAILED TASK BREAKDOWN

### TASK 1: Organization Schema (1.5 hours)

**What to do:**
Add JSON-LD Organization schema to `/app/layout.tsx`

**Schema includes:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Galat Family",
  "description": "Two developers building products and sharing what we learn.",
  "url": "https://galatfamily.com",
  "foundingDate": "2024",
  "foundingLocation": "India",
  "founders": [Syed Rayan, Syed Naseer],
  "contact": {
    "email": "contact.galatfamily@gmail.com"
  },
  "sameAs": [
    "https://instagram.com/thegalatfamily",
    "https://github.com/isyedrayan1"
  ]
}
```

**Expected benefit:**
- Better knowledge graph representation
- Enhanced search snippets
- Clearer brand identity

**Success metric:**
- Schema validates in Google's Rich Result Tester
- Organization info appears in search results

---

### TASK 2: Person Schema for Team (1 hour)

**What to do:**
Create `/components/schemas/PersonSchema.tsx` for each team member

**Schema for Syed Rayan:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Syed Rayan",
  "description": "Full-stack developer, architecture, systems",
  "url": "https://galatfamily.com/#team",
  "image": "https://galatfamily.com/Syed rayan.jpg",
  "sameAs": [
    "https://isyedrayan1.netlify.app",
    "https://linkedin.com/in/isyedrayan",
    "https://instagram.com/isyedrayan"
  ]
}
```

**Expected benefit:**
- Better visibility for team member names
- Potential for knowledge panel
- Richer team profile presentation

---

### TASK 3: Article Schema for Blog (1 hour)

**What to do:**
Create `/components/schemas/ArticleSchema.tsx` for blog posts

**Schema template:**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Blog Post Title]",
  "description": "[Meta Description]",
  "image": "[OG Image URL]",
  "datePublished": "[Publish Date]",
  "dateModified": "[Last Updated Date]",
  "author": {
    "@type": "Person",
    "name": "[Author Name]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Galat Family",
    "url": "https://galatfamily.com"
  }
}
```

**Expected benefit:**
- Rich snippets in search results
- Better blog post visibility
- Potential for featured snippets

---

### TASK 4: Breadcrumb Schema (30 mins)

**What to do:**
Add breadcrumb schema to `/components/schemas/BreadcrumbSchema.tsx`

**Schema example for blog post:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://galatfamily.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://galatfamily.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Post Title]",
      "item": "[Post URL]"
    }
  ]
}
```

**Expected benefit:**
- Improved navigation in search results
- Better site structure understanding

---

### TASK 5: Internal Linking Strategy (1.5 hours)

**Homepage linking:**
- 3-4 links to blog hub
- 2-3 links to product pages
- 1-2 links to team section
- Use anchor text: "build logs", "what we've shipped", "meet the team"

**Blog post linking:**
```
Per 1000-word post: 5 links

Distribution:
- 1 link to homepage
- 2 links to related blog posts
- 1 link to related product
- 1 link to team member profile
```

**Example linking in blog post:**
```
"We shipped this using Next.js. [See our other 
Next.js projects] to understand our approach. 
[Learn about Syed Rayan's] architecture decisions 
in this [build log from December]."

(links go to: products, team, blog archive)
```

**Product page linking:**
```
"This was built by [Syed Rayan and Syed Naseer]. 
Read the [build log] about how we shipped it in 
30 days. We also [wrote about this process] 
on the blog."
```

**Expected benefit:**
- Better page authority distribution
- Keeps visitors browsing longer
- Helps Google crawl related pages
- Improves SEO for linked keywords

---

### TASK 6: Blog Post Templates (1.5 hours)

**Create `/docs/BLOG_POST_TEMPLATE.md`**

**Template includes:**
1. **Before you write:** Keyword research checklist
2. **Title format:** `[Specific topic] - What we learned`
3. **Meta description:** 150-160 char formula
4. **Structure:** H1 → H2s → H3s → body
5. **Content guidelines:** 800-1500 words, real examples
6. **Linking checklist:** 5 internal links per post
7. **Publishing checklist:** Images, alt text, OG, promo

**Example blog post meta:**
```
Title: "How We Ship Monthly - What We Learned"
Meta: "We ship every month. Here's exactly how we 
scope, build, test, and launch. Build log from 
our latest release."
```

---

## PHASE 2 TASK SCHEDULE

### Week 1 (January 6-10)

**Day 1:** Organization Schema
- Create schema file
- Add to layout.tsx
- Test with Rich Result Tester
- ~1.5 hours

**Day 2:** Person Schema
- Create Syed Rayan schema
- Create Syed Naseer schema
- Add to team section
- ~1 hour

**Day 3:** Article Schema + Breadcrumb
- Create article schema component
- Create breadcrumb schema component
- Add to blog post pages
- ~1.5 hours

**Day 4:** Internal Linking Strategy
- Map out link structure
- Add links to homepage
- Create linking guidelines
- ~1.5 hours

**Day 5:** Blog Templates
- Create blog post template
- Create example post
- Document best practices
- ~1.5 hours

**Total: 7 hours** (buffer for testing and refinement)

---

## IMPLEMENTATION CHECKLIST

### JSON-LD Schemas
- [ ] Create `/components/schemas/` directory
- [ ] Write Organization schema
- [ ] Write Person schema (Syed Rayan)
- [ ] Write Person schema (Syed Naseer)
- [ ] Write Article schema
- [ ] Write Breadcrumb schema
- [ ] Add all to layout.tsx
- [ ] Test in Google Rich Result Tester
- [ ] Verify no validation errors

### Internal Linking
- [ ] Map homepage linking (to which pages)
- [ ] Create linking guidelines
- [ ] Add 5 links to each existing blog post
- [ ] Document anchor text strategy
- [ ] Add internal links to product descriptions

### Blog Templates
- [ ] Create BLOG_POST_TEMPLATE.md
- [ ] Document title format
- [ ] Document meta description formula
- [ ] Create structure template
- [ ] Document linking best practices
- [ ] Create publishing checklist

### Testing & Verification
- [ ] All schemas validate
- [ ] No broken internal links
- [ ] All anchor text relevant
- [ ] Template works for real blog post

---

## EXPECTED RESULTS AFTER PHASE 2

### SEO Improvements
- ✓ Organization recognized by Google
- ✓ Team member visibility improved
- ✓ Blog posts eligible for rich snippets
- ✓ Better internal link distribution
- ✓ Improved crawlability

### User Experience
- ✓ Visitors stay longer (more internal links)
- ✓ Better navigation between related content
- ✓ Clearer site structure
- ✓ More discoverable content

### Competitive Advantage
- ✓ Richer search result snippets than competitors
- ✓ Better author/brand visibility
- ✓ More interconnected content
- ✓ Better internal authority distribution

---

## PHASE 3 PREVIEW (Coming Next)

After Phase 2 complete:

### Phase 3 Tasks (~2-3 hours/month ongoing)
1. **Monthly blog post** - Using new templates
2. **Keyword monitoring** - Track rankings
3. **GSC setup** - Submit sitemap, monitor crawling
4. **Link building** - Share content, build backlinks
5. **Quarterly audits** - Review and optimize

### Expected Timeline
- **2-4 weeks:** Site fully indexed
- **4-12 weeks:** Ranking for primary keywords
- **3 months:** 100-200 monthly organic sessions
- **6 months:** 500+ monthly organic sessions

---

## TOOLS & RESOURCES NEEDED

### Schema Validation
- Google Rich Results Tester (free)
- Schema.org documentation
- JSON-LD formatting guide

### Link Analysis
- Existing internal links (audit)
- Related content map
- Anchor text strategy

### Blog Optimization
- Blog keyword research
- Title formula testing
- Meta description checker

---

## SUCCESS METRICS FOR PHASE 2

| Metric | Target | Method |
|--------|--------|--------|
| Schema validation | 0 errors | Rich Result Tester |
| Blog post links | 5+ per post | Manual count |
| Internal link density | 2-3% | SEO tool scan |
| Homepage link count | 10+ | Manual audit |
| Template usability | Works for 1 post | Test new post |

---

## NOTES & CONSIDERATIONS

### Important
- Don't over-optimize internal links (quality > quantity)
- Every link should have purpose (not for SEO only)
- Test schemas thoroughly before publishing
- Use descriptive anchor text (not "click here")
- Blog posts should naturally link (not forced)

### Future Opportunities
- Add FAQ schema when Q&A section added
- Add Product schema for products
- Add Review schema if getting testimonials
- Add Event schema if doing webinars/talks

### Potential Challenges
- May need to update blog structure for schemas
- Internal linking requires content review
- Templates need iteration based on first post

---

## QUICK REFERENCE: What Gets Linked

```
Homepage
├── Links to blog hub (2-3 links)
├── Links to products (2-3 links)
└── Links to team (1-2 links)

Blog Posts
├── Links to related blog posts (2)
├── Links to products (1)
├── Links to team members (1)
└── Links to homepage (if relevant)

Products
├── Links to related blog posts (1-2)
├── Links to team (1)
└── Links to homepage

Team Profiles
├── Links to products they built
├── Links to relevant blog posts
└── Links to social/portfolios
```

---

## READY TO START?

### Prerequisites
- ✓ Phase 1 complete
- ✓ All tone/metadata changes deployed
- ✓ Homepage tested in browser

### Next Steps
1. Review this roadmap
2. Set start date (January 6-10)
3. Follow task schedule
4. Update as you go
5. Test thoroughly before deploying

---

**Phase 1 Status:** ✓ Complete  
**Phase 2 Status:** Ready to start  
**Phase 3 Status:** Planned  

**Owner:** Galat Family  
**Created:** January 4, 2026  
**Target Start:** January 6, 2026  
**Estimated Completion:** January 15, 2026
