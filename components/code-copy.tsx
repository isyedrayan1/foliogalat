"use client";

import { useEffect } from 'react';

export function CodeCopy() {
  useEffect(() => {
    // Find all <pre> elements (except those inside diagrams)
    const preBlocks = document.querySelectorAll('pre');
    
    preBlocks.forEach((pre) => {
      // Guard to prevent double buttons or wrapping twice
      if (pre.parentElement?.classList.contains('code-block-wrapper') || pre.closest('.mermaid-chart-wrapper')) return;

      const codeBlock = pre.querySelector('code');
      if (!codeBlock) return;

      // Create a wrapper div
      const wrapper = document.createElement('div');
      wrapper.className = "code-block-wrapper relative group my-6";

      // Insert wrapper in the DOM before the pre block
      pre.parentNode?.insertBefore(wrapper, pre);
      
      // Move pre block inside the wrapper
      wrapper.appendChild(pre);

      // Remove the margins from pre since wrapper handles it
      pre.classList.remove('my-6');
      pre.classList.add('my-0');

      // Create standard copy button
      const button = document.createElement('button');
      button.className = "copy-button absolute top-3 right-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 bg-neutral-950 border border-neutral-800 hover:border-signature/50 hover:text-signature rounded p-2 md:px-2.5 md:py-1 text-[10px] font-mono text-neutral-400 transition-all cursor-pointer flex items-center gap-1.5 z-10 shadow-md";
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        <span class="copy-text hidden md:inline">COPY</span>
      `;

      button.addEventListener('click', async () => {
        const codeText = codeBlock.innerText;
        try {
          // Check if Clipboard API is supported, otherwise run fallback
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(codeText);
          } else {
            // Fallback for non-secure (HTTP) mobile contexts
            const textArea = document.createElement('textarea');
            textArea.value = codeText;
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            const success = document.execCommand('copy');
            document.body.removeChild(textArea);
            if (!success) {
              throw new Error('Copy command failed');
            }
          }
          
          // Apply active copied state styling (success green highlights)
          button.classList.add('border-emerald-500/50', 'text-emerald-400');
          const textEl = button.querySelector('.copy-text');
          if (textEl) textEl.textContent = 'COPIED';
          
          const iconEl = button.querySelector('.copy-icon');
          if (iconEl) {
            iconEl.outerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="copy-icon text-emerald-400"><path d="M20 6 9 17l-5-5"/></svg>
            `;
          }

          // Reset back to original state after 2 seconds
          setTimeout(() => {
            button.classList.remove('border-emerald-500/50', 'text-emerald-400');
            const resetText = button.querySelector('.copy-text');
            if (resetText) resetText.textContent = 'COPY';
            
            const resetIcon = button.querySelector('.copy-icon');
            if (resetIcon) {
              resetIcon.outerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              `;
            }
          }, 2000);
        } catch (err) {
          console.error('Clipboard copy failed: ', err);
        }
      });

      // Append button to wrapper instead of pre
      wrapper.appendChild(button);
    });
  }, []);

  return null;
}
