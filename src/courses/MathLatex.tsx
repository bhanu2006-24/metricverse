import React from 'react';
import { Course } from '../types';
import LatexDisplay from '../components/LatexDisplay';

export const MathLatex: Course = {
  id: 'math-latex',
  title: "Math & LaTeX",
  icon: "∑",
  subtitle: "Scientific Documentation",
  lessons: [
    {
      id: 'math-1',
      title: "The Math Mode",
      type: 'read',
      content: (
        <div className="space-y-6">
           <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                For data scientists and researchers, mathematical precision is non-negotiable. GitHub supports MathJax/KaTeX rendering directly in Markdown files using `$` symbols.
              </p>
           </div>
        </div>
      )
    },
    {
      id: 'math-2',
      title: "Inline vs Block",
      type: 'read',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inline Math */}
              <div className="bg-[#161b22] border border-github-border rounded-2xl p-6">
                 <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="text-teal-400">Inline Math</span> <code>$ ... $</code>
                 </h4>
                 <p className="text-sm text-gray-400 mb-4">
                    Use single dollar signs to embed math within a sentence.
                 </p>
                 <div className="bg-black/30 p-3 rounded mb-4 font-mono text-xs text-gray-300">
                    The energy comes from $E = mc^2$.
                 </div>
                 <div className="p-3 bg-white/5 rounded text-gray-200">
                    The energy comes from <LatexDisplay expression="E = mc^2" />.
                 </div>
              </div>

              {/* Block Math */}
              <div className="bg-[#161b22] border border-github-border rounded-2xl p-6">
                 <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="text-teal-400">Block Math</span> <code>$$ ... $$</code>
                 </h4>
                 <p className="text-sm text-gray-400 mb-4">
                    Use double dollar signs for centered, standalone equations.
                 </p>
                 <div className="bg-black/30 p-3 rounded mb-4 font-mono text-xs text-gray-300">
                    {`$$ \\sum_{i=1}^n i = \\frac{n(n+1)}{2} $$`}
                 </div>
                 <div className="p-3 bg-white/5 rounded text-gray-200 flex justify-center">
                    <LatexDisplay expression="\\sum_{i=1}^n i = \\frac{n(n+1)}{2}" displayMode={true} />
                 </div>
              </div>
        </div>
      )
    },
    {
      id: 'math-3',
      title: "Symbol Cheat Sheet",
      type: 'read',
      content: (
           <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Common Symbols</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                 {[
                    { s: '\\alpha', d: 'Alpha' },
                    { s: '\\beta', d: 'Beta' },
                    { s: '\\infty', d: 'Infinity' },
                    { s: '\\rightarrow', d: 'Arrow' },
                    { s: '\\sqrt{x}', d: 'Root' },
                    { s: '\\frac{a}{b}', d: 'Fraction' },
                    { s: '\\cdot', d: 'Dot' },
                    { s: '\\approx', d: 'Approx' }
                 ].map((sym, i) => (
                    <div key={i} className="bg-[#0d1117] border border-github-border p-4 rounded-lg text-center hover:border-teal-500/50 transition-colors cursor-help group" title={sym.d}>
                       <code className="text-teal-400 text-xs">{sym.s}</code>
                       <div className="text-white font-serif mt-2 text-lg group-hover:scale-110 transition-transform">
                         <LatexDisplay expression={sym.s} />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
      )
    },
    {
      id: 'math-4',
      title: "Matrices & Arrays",
      type: 'read',
      content: (
         <div className="space-y-6">
            <p className="text-gray-300">Matrices are essential for linear algebra representation.</p>
            <div className="bg-[#161b22] border border-github-border rounded-xl p-6">
               <h4 className="text-white font-bold mb-4">Matrix Syntax</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                     <p className="text-xs text-gray-500 mb-2">Code:</p>
                     <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-300">
{`$$
\\begin{bmatrix}
1 & 2 & 3 \\\\
4 & 5 & 6 \\\\
7 & 8 & 9
\\end{bmatrix}
$$`}
                     </pre>
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 mb-2">Result:</p>
                     <div className="bg-black/30 p-4 rounded text-white flex justify-center h-full items-center">
                        <LatexDisplay 
                           expression={`\\begin{bmatrix}
1 & 2 & 3 \\\\
4 & 5 & 6 \\\\
7 & 8 & 9
\\end{bmatrix}`} 
                           displayMode={true} 
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
    },
    {
      id: 'math-practice',
      title: "Equation Lab",
      type: 'practice',
      practiceMode: 'math',
      initialCode: 'c = \\sqrt{a^2 + b^2}',
      content: <p className="mb-4 text-gray-300">Write LaTeX equations below. They will render instantly.</p>
    }
  ]
};
