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
      title: "1. The Math Mode",
      type: 'read',
      content: (
        <div className="space-y-4">
           <p className="text-gray-300">
             LaTeX (pronounced "Lay-tech") is the standard for scientific documentation. GitHub supports rendering math expressions using MathJax/KaTeX.
           </p>
           <div className="bg-[#161b22] border border-github-border p-4 rounded-xl">
              <p className="text-sm text-gray-400">"Mathematics is the language with which God has written the universe." — Galileo</p>
           </div>
        </div>
      )
    },
    {
      id: 'math-2',
      title: "2. Inline vs Block",
      type: 'read',
      content: (
        <div className="space-y-4">
           <div className="bg-[#161b22] p-4 rounded-lg">
              <h4 className="text-teal-400 font-bold mb-2">Inline ($...$)</h4>
              <p className="text-gray-400 text-sm mb-2">Embeds math within text.</p>
              <div className="bg-black/30 p-2 rounded text-center">
                 <LatexDisplay expression="E = mc^2" />
              </div>
           </div>
           <div className="bg-[#161b22] p-4 rounded-lg">
              <h4 className="text-teal-400 font-bold mb-2">Block ($$...$$)</h4>
              <p className="text-gray-400 text-sm mb-2">Centered standalone equations.</p>
              <div className="bg-black/30 p-2 rounded text-center">
                 <LatexDisplay expression="E = mc^2" displayMode={true} />
              </div>
           </div>
        </div>
      )
    },
    {
       id: 'math-3',
       title: "3. Basic Arithmetic",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#161b22] p-3 rounded text-center">
                   <code className="block text-gray-500 mb-1">a + b</code>
                   <LatexDisplay expression="a + b" />
                </div>
                <div className="bg-[#161b22] p-3 rounded text-center">
                   <code className="block text-gray-500 mb-1">a - b</code>
                   <LatexDisplay expression="a - b" />
                </div>
                <div className="bg-[#161b22] p-3 rounded text-center">
                   <code className="block text-gray-500 mb-1">{'a \\cdot b'}</code>
                   <LatexDisplay expression="a \cdot b" />
                </div>
                <div className="bg-[#161b22] p-3 rounded text-center">
                   <code className="block text-gray-500 mb-1">{'a \\div b'}</code>
                   <LatexDisplay expression="a \div b" />
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'math-4',
       title: "4. Powers & Indices",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Use <code className="text-teal-400">^</code> for superscript and <code className="text-teal-400">_</code> for subscript.</p>
             <div className="bg-[#161b22] p-4 rounded-lg flex justify-around">
                <div className="text-center">
                   <code className="block text-gray-500 mb-2">x^2</code>
                   <LatexDisplay expression="x^2" />
                </div>
                <div className="text-center">
                   <code className="block text-gray-500 mb-2">{`x_{i}`}</code>
                   <LatexDisplay expression="x_{i}" />
                </div>
                <div className="text-center">
                   <code className="block text-gray-500 mb-2">{`x^{2y}`}</code>
                   <LatexDisplay expression="x^{2y}" />
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'math-5',
       title: "5. Fractions",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="bg-[#161b22] p-4 rounded-lg flex items-center justify-between">
                <code className="text-teal-400">{`\\frac{a}{b}`}</code>
                <div className="bg-black/30 px-6 py-2 rounded">
                   <LatexDisplay expression="\frac{a}{b}" />
                </div>
             </div>
             <div className="bg-[#161b22] p-4 rounded-lg flex items-center justify-between">
                <code className="text-teal-400">{`\\frac{\\partial y}{\\partial x}`}</code>
                <div className="bg-black/30 px-6 py-2 rounded">
                   <LatexDisplay expression="\frac{\partial y}{\partial x}" />
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'math-6',
       title: "6. Roots",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#161b22] p-4 rounded-lg text-center">
                   <code className="block text-gray-500 mb-2">{`\\sqrt{x}`}</code>
                   <LatexDisplay expression="\sqrt{x}" />
                </div>
                <div className="bg-[#161b22] p-4 rounded-lg text-center">
                   <code className="block text-gray-500 mb-2">{`\\sqrt[3]{x}`}</code>
                   <LatexDisplay expression="\sqrt[3]{x}" />
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'math-7',
       title: "7. Sums & Integrals",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Big operators adapt to display mode.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <code className="block text-gray-500 mb-2">{`\\sum_{i=1}^{n} i^2`}</code>
                <LatexDisplay expression="\sum_{i=1}^{n} i^2" displayMode={true} />
             </div>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <code className="block text-gray-500 mb-2">{`\\int_{0}^{\\infty} e^{-x} dx`}</code>
                <LatexDisplay expression="\int_{0}^{\infty} e^{-x} dx" displayMode={true} />
             </div>
          </div>
       )
    },
    {
       id: 'math-8',
       title: "8. Brackets (Delimiters)",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Use <code className="text-teal-400">{`\\left`}</code> and <code className="text-teal-400">{`\\right`}</code> to auto-size brackets.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <code className="block text-gray-500 mb-2">{`\\left( \\frac{a}{b} \\right)`}</code>
                <LatexDisplay expression="\left( \frac{a}{b} \right)" displayMode={true} />
             </div>
          </div>
       )
    },
    {
       id: 'math-9',
       title: "9. Matrices",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="bg-[#161b22] p-4 rounded-lg overflow-x-auto">
                <pre className="text-xs text-teal-400 mb-2">
{`\\begin{bmatrix}
1 & 0 \\\\
0 & 1 
\\end{bmatrix}`}
                </pre>
                <div className="text-center">
                   <LatexDisplay expression="\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}" />
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'math-10',
       title: "10. Greek Letters",
       type: 'read',
       content: (
          <div className="grid grid-cols-4 gap-2">
             {['\\alpha', '\\beta', '\\gamma', '\\delta', '\\theta', '\\pi', '\\sigma', '\\omega'].map(s => (
                <div key={s} className="bg-[#161b22] p-2 rounded text-center">
                   <LatexDisplay expression={s} />
                </div>
             ))}
             {['\\Gamma', '\\Delta', '\\Theta', '\\Pi', '\\Sigma', '\\Omega'].map(s => (
                <div key={s} className="bg-[#161b22] p-2 rounded text-center">
                   <LatexDisplay expression={s} />
                </div>
             ))}
          </div>
       )
    },
    {
       id: 'math-11',
       title: "11. Logic Symbols",
       type: 'read',
       content: (
          <div className="grid grid-cols-3 gap-2">
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\forall" /><span className="text-xs block text-gray-500">{`\\forall`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\exists" /><span className="text-xs block text-gray-500">{`\\exists`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\implies" /><span className="text-xs block text-gray-500">{`\\implies`}</span></div>
          </div>
       )
    },
    {
       id: 'math-12',
       title: "12. Set Theory",
       type: 'read',
       content: (
          <div className="grid grid-cols-3 gap-2">
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\in" /><span className="text-xs block text-gray-500">{`\\in`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\cup" /><span className="text-xs block text-gray-500">{`\\cup`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\cap" /><span className="text-xs block text-gray-500">{`\\cap`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\subset" /><span className="text-xs block text-gray-500">{`\\subset`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\emptyset" /><span className="text-xs block text-gray-500">{`\\emptyset`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\mathbb{R}" /><span className="text-xs block text-gray-500">{`\\mathbb{R}`}</span></div>
          </div>
       )
    },
    {
       id: 'math-13',
       title: "13. Fonts & Styles",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="bg-[#161b22] p-3 rounded flex justify-between">
                <code className="text-gray-500">{`\\mathbf`}</code>
                <LatexDisplay expression="\mathbf{Bold}" />
             </div>
             <div className="bg-[#161b22] p-3 rounded flex justify-between">
                <code className="text-gray-500">{`\\mathrm`}</code>
                <LatexDisplay expression="\mathrm{Roman}" />
             </div>
             <div className="bg-[#161b22] p-3 rounded flex justify-between">
                <code className="text-gray-500">{`\\mathcal`}</code>
                <LatexDisplay expression="\mathcal{CALLIGRAPHY}" />
             </div>
             <div className="bg-[#161b22] p-3 rounded flex justify-between">
                <code className="text-gray-500">{`\\mathbb`}</code>
                <LatexDisplay expression="\mathbb{BLACKBOARD}" />
             </div>
          </div>
       )
    },
    {
       id: 'math-14',
       title: "14. Cases Environment",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Piecewise functions.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                 <LatexDisplay expression="f(n) = \begin{cases} n/2 & \text{if } n \text{ even} \\ 3n+1 & \text{if } n \text{ odd} \end{cases}" displayMode={true} />
             </div>
          </div>
       )
    },
    {
       id: 'math-15',
       title: "15. Alignment",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Aligning multi-line equations.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                 <LatexDisplay expression="\begin{aligned} a &= b + c \\ &= d + e \end{aligned}" displayMode={true} />
             </div>
          </div>
       )
    },
    {
       id: 'math-16',
       title: "16. Accents",
       type: 'read',
       content: (
          <div className="grid grid-cols-4 gap-2">
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\hat{a}" /><span className="text-xs block text-gray-500">{`\\hat`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\bar{a}" /><span className="text-xs block text-gray-500">{`\\bar`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\dot{a}" /><span className="text-xs block text-gray-500">{`\\dot`}</span></div>
             <div className="bg-[#161b22] p-2 rounded text-center"><LatexDisplay expression="\vec{a}" /><span className="text-xs block text-gray-500">{`\\vec`}</span></div>
          </div>
       )
    },
    {
       id: 'math-17',
       title: "17. Limits",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <LatexDisplay expression="\lim_{x \to \infty} \frac{1}{x} = 0" displayMode={true} />
             </div>
          </div>
       )
    },
    {
       id: 'math-18',
       title: "18. Big Operators",
       type: 'read',
       content: (
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-[#161b22] p-4 rounded-lg text-center"><LatexDisplay expression="\prod_{i=1}^{n} x_i" displayMode={true} /></div>
             <div className="bg-[#161b22] p-4 rounded-lg text-center"><LatexDisplay expression="\bigcup_{i=1}^{\infty} A_i" displayMode={true} /></div>
          </div>
       )
    },
    {
       id: 'math-19',
       title: "19. Colors",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">You can use <code className="text-teal-400">{`\\color`}</code>.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <LatexDisplay expression="\color{red}E \color{white}= \color{cyan}mc^2" displayMode={true} />
             </div>
          </div>
       )
    },
    {
       id: 'math-20',
       title: "20. Arrows",
       type: 'read',
       content: (
          <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-[#161b22] p-2 rounded"><LatexDisplay expression="\rightarrow" /></div>
              <div className="text-center bg-[#161b22] p-2 rounded"><LatexDisplay expression="\leftarrow" /></div>
              <div className="text-center bg-[#161b22] p-2 rounded"><LatexDisplay expression="\leftrightarrow" /></div>
              <div className="text-center bg-[#161b22] p-2 rounded"><LatexDisplay expression="\Rightarrow" /></div>
          </div>
       )
    },
    {
       id: 'math-21',
       title: "21. Spacing",
       type: 'read',
       content: (
          <div className="space-y-4">
             <ul className="text-sm text-gray-400 space-y-2">
                <li><code className="text-teal-400">{`\\,`}</code> Thin space</li>
                <li><code className="text-teal-400">{`\\:`}</code> Medium space</li>
                <li><code className="text-teal-400">{`\\;`}</code> Thick space</li>
                <li><code className="text-teal-400">{`\\quad`}</code> Quad space</li>
             </ul>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <LatexDisplay expression="a \quad b \qquad c" />
             </div>
          </div>
       )
    },
    {
       id: 'math-22',
       title: "22. Text in Math",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Use <code className="text-teal-400">{`\\text`}</code> to write normal text inside math mode.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <LatexDisplay expression="x = 5 \text{ units}" />
             </div>
          </div>
       )
    },
    {
       id: 'math-23',
       title: "23. Over/Under Brace",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <LatexDisplay expression="\underbrace{a_1 + a_2 + \cdots + a_n}_{n \text{ terms}}" displayMode={true} />
             </div>
          </div>
       )
    },
    {
       id: 'math-24',
       title: "24. Cancel",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Showing cancellation of terms.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <LatexDisplay expression="\frac{2x}{2} = x" />
             </div>
          </div>
       )
    },
    {
      id: 'math-practice',
      title: "Equation Lab",
      type: 'practice',
      practiceMode: 'math',
      initialCode: 'f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi)\\,e^{2 \\pi i \\xi x} \\,d\\xi',
      content: <p className="mb-4 text-gray-300">Write LaTeX equations below. They will render instantly.</p>
    }
  ]
};
