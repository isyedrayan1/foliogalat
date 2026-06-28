import { Navigation } from '@/components/sections/navigation';
import NeuralBackground from '@/components/ui/flow-field-background';
import Dither from '@/components/Dither';
import { 
  Terminal, 
  Cpu, 
  Code2, 
  Layers, 
  Workflow
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "System Specs & Guides | Galat Family",
  description: "Detailed blueprints, architectural decisions, and integration references. Sharing what we build and document.",
};

export default function DocsPage() {
  return (
    <div className="bento-page font-sans antialiased text-neutral-300 selection:bg-neutral-200 selection:text-neutral-900 overflow-x-hidden">
      <Navigation />
      <main className="bento-shell">
        <div className="bento-frame">
          {/* Majestic Docs Hero Card */}
          <section className="bento-card bento-hero bento-full relative overflow-hidden min-h-[460px] flex flex-col justify-center p-8 md:p-16 border border-neutral-800 bg-neutral-950/40">
            {/* Ambient Background Dither & Gradients */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
              <Dither
                waveColor={[0.1, 0.4, 0.3]}
                colorNum={4}
                pixelSize={2}
                waveSpeed={0.015}
              />
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-signature/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="font-mono text-xs text-signature mb-6 tracking-[0.25em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-signature animate-pulse"></span>
                GALAT_KNOWLEDGE_BASE
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-6">
                System <span className="text-signature">Specs</span> & Guides<span className="text-signature">.</span>
              </h1>
              
              <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                Detailed blueprints, architectural decisions, and integration references for internal tools and client ecosystems.
              </p>

              <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
                <a
                  href="#getting-started"
                  className="px-6 py-3 bg-neutral-200 hover:bg-white text-neutral-900 font-bold rounded transition-all cursor-pointer"
                >
                  GET_STARTED ↓
                </a>
                <a
                  href="#apis"
                  className="px-6 py-3 border border-neutral-850 bg-neutral-950/40 rounded hover:border-neutral-700/60 hover:text-white transition-all cursor-pointer"
                >
                  API_REFERENCE →
                </a>
              </div>
            </div>

            {/* Floating Terminal Stats Widget inside Hero */}
            <div className="absolute right-12 bottom-12 hidden lg:block w-80 border border-neutral-800/80 rounded-xl bg-black/80 p-5 font-mono text-[11px] text-neutral-400 shadow-2xl">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2 mb-3">
                <span className="text-white flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-signature" /> SYSTEM_DEPS
                </span>
                <span className="text-neutral-600">v1.0.4</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Unitsend Client</span>
                  <span className="text-emerald-400 font-bold">READY</span>
                </div>
                <div className="flex justify-between">
                  <span>Dither Renderer</span>
                  <span className="text-emerald-400 font-bold">STABLE</span>
                </div>
                <div className="flex justify-between">
                  <span>Flowfield WebGL</span>
                  <span className="text-signature">RUNNING</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Logs Pipeline</span>
                  <span className="text-neutral-500">STANDBY</span>
                </div>
              </div>
            </div>
          </section>

          {/* Docs Core Layout (Grid columns) */}
          <div id="getting-started" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            
            {/* Column 1: Getting Started Bento Card */}
            <div className="border border-neutral-850 rounded-2xl bg-neutral-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative group">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Workflow className="w-5 h-5 text-signature" />
                  <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">{"// ARCHITECTURE"}</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">Core Principles</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  We build highly modular, server-centric systems. We prefer stateless APIs coupled with rich client interfaces.
                </p>
                <ul className="text-xs text-neutral-400 font-mono space-y-2 list-none mt-4 border-t border-neutral-900 pt-4">
                  <li>{`>`} Zero unnecessary layers</li>
                  <li>{`>`} Standardized logging</li>
                  <li>{`>`} Statically compiled assets</li>
                </ul>
              </div>
            </div>

            {/* Column 2: Stack & UI Components Bento Card */}
            <div className="border border-neutral-850 rounded-2xl bg-neutral-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative group">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Layers className="w-5 h-5 text-signature" />
                  <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">{"// SYSTEM_STACK"}</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">Components & Modules</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  Our front-end utilizes Tailwind CSS config variables alongside custom GPU shader canvases like `Dither` and `NeuralBackground`.
                </p>
                <ul className="text-xs text-neutral-400 font-mono space-y-2 list-none mt-4 border-t border-neutral-900 pt-4">
                  <li>{`>`} Next.js App Router</li>
                  <li>{`>`} Three.js / R3F canvases</li>
                  <li>{`>`} Custom web-workers for file slicing</li>
                </ul>
              </div>
            </div>

            {/* Column 3: API & Integrations Bento Card */}
            <div id="apis" className="border border-neutral-850 rounded-2xl bg-neutral-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative group">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Cpu className="w-5 h-5 text-signature" />
                  <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">{"// INTEGRATIONS"}</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">API References</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  Integrating with our custom endpoints. Simple Bearer Token authentication schema used globally.
                </p>
                <div className="bg-neutral-900 border border-neutral-800 rounded p-3 font-mono text-[10px] text-neutral-300 mt-4 overflow-x-auto">
                  <code>GET /api/v1/builds/status</code>
                </div>
              </div>
            </div>

          </div>

          {/* Detailed Guide Section Card */}
          <section className="border border-neutral-850 rounded-2xl bg-neutral-950/40 p-6 md:p-10 mt-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-signature/5 blur-[90px] rounded-full pointer-events-none" />
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-signature" />
                <span className="font-mono text-xs text-neutral-400 tracking-widest">{"// INTERNAL_GUIDE"}</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Unitsend: Large File Uplink Protocol</h2>
              
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
                To facilitate fast uploads without clogging server memory, Unitsend cuts client files into distinct 5MB binary chunks, computes sequential SHA-256 hashes, and uploads concurrently. 
              </p>

              <div className="my-6 border-l-2 border-signature pl-4 italic text-neutral-400 text-sm">
                &quot;By decoupling chunk upload from main thread loops, we maintain 60 FPS on client UIs during active 2GB uploads.&quot;
              </div>

              <h4 className="text-sm font-mono text-white mb-3 tracking-wide">UPLOADER_CODE_PATTERN:</h4>
              <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 font-mono text-xs overflow-x-auto text-neutral-300 mb-6">
{`const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB

async function uploadFileInChunks(file: File) {
  const chunks = Math.ceil(file.size / CHUNK_SIZE);
  for (let index = 0; index < chunks; index++) {
    const chunk = file.slice(index * CHUNK_SIZE, (index + 1) * CHUNK_SIZE);
    await uploadChunk(chunk, index, file.name);
  }
}`}
              </pre>
            </div>
          </section>

          {/* Footer Card */}
          <section id="contact" className="bento-card bento-footer-card bento-full mt-6">
            <div className="bento-footer-bg" aria-hidden="true">
              <NeuralBackground color="#7c83ff" trailOpacity={0.18} particleCount={420} speed={0.75} />
            </div>
            <div className="bento-footer-inner">
              <div className="bento-kicker">START_A_PROJECT</div>
              <h2 className="bento-footer-title">Start a conversation.</h2>
              <a className="bento-email" href="mailto:contact.galatfamily@gmail.com">
                contact.galatfamily@gmail.com
              </a>
              <p className="bento-footer-meta">© 2024 Galat Family. Building one thing at a time.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
