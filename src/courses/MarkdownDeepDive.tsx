import React from 'react';
import { Course } from '../types';

export const MarkdownDeepDive: Course = {
  id: 'markdown-deep-dive',
  title: "Markdown Deep Dive",
  icon: "📝",
  subtitle: "Mastering Profile Typography",
  lessons: [
    {
      id: 'md-1',
      title: "The Why & The H1",
      type: 'read',
      content: (
        <div className="space-y-6">
           <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Markdown is the lingua franca of developers. It's not just about making text bold; it's about structuring your technical documentation, issues, and PR comments effectively. This course takes you from basic syntax to advanced layout techniques.
              </p>
           </div>
           
           <div className="bg-[#161b22] border border-github-border rounded-xl p-5">
              <h4 className="font-bold text-gray-200 mb-2">Semantic Structure</h4>
              <p className="text-gray-400 text-sm mb-4">Structure your documents like an outlining tool. Screen readers and search engines rely on this hierarchy.</p>
              <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-500">
                <span className="text-blue-400">#</span> Title (H1) - Only one per page<br/>
                <span className="text-blue-400">##</span> Major Section (H2)<br/>
                <span className="text-blue-400">###</span> Subsection (H3)<br/>
                <span className="text-blue-400">####</span> Detail Level (H4)
              </pre>
           </div>
        </div>
      )
    },
    {
      id: 'md-2',
      title: "Lists & Quotes",
      type: 'read',
      content: (
        <div className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-[#161b22] border border-github-border rounded-xl p-5">
                <h4 className="font-bold text-gray-200 mb-2">Lists</h4>
                <div className="text-xs text-gray-400 space-y-2">
                  <p>Unordered: Use <code>-</code> or <code>*</code></p>
                  <pre className="bg-black/50 p-2 rounded">- Item 1<br/>  - Nested Item</pre>
                  <p>Ordered: Use <code>1.</code></p>
                  <pre className="bg-black/50 p-2 rounded">1. First<br/>2. Second</pre>
                </div>
             </div>
             <div className="bg-[#161b22] border border-github-border rounded-xl p-5">
                <h4 className="font-bold text-gray-200 mb-2">Blockquotes</h4>
                <p className="text-xs text-gray-400 mb-2">Perfect for highlighting warnings or key takeaways.</p>
                <div className="flex gap-4">
                   <div className="w-1/2">
                      <pre className="bg-black/50 p-2 rounded text-xs text-gray-500">&gt; Note: This is crucial.</pre>
                   </div>
                   <div className="w-1/2 border-l-4 border-gray-500 pl-4 py-1">
                      <p className="text-gray-400 text-xs italic">Note: This is crucial.</p>
                   </div>
                </div>
             </div>
           </div>
        </div>
      )
    },
    {
      id: 'md-3',
      title: "Links & Images",
      type: 'read',
      content: (
        <div className="space-y-6">
           <p className="text-gray-300">The web is built on links. Markdown makes them easy.</p>
           <div className="bg-[#161b22] border border-github-border rounded-xl p-5">
             <table className="w-full text-sm text-left">
               <thead>
                 <tr className="border-b border-gray-700">
                   <th className="py-2 text-gray-200">Type</th>
                   <th className="py-2 text-gray-200">Syntax</th>
                 </tr>
               </thead>
               <tbody className="text-gray-400">
                 <tr className="border-b border-gray-800">
                   <td className="py-2">Link</td>
                   <td className="font-mono text-xs text-blue-300">[Title](url)</td>
                 </tr>
                 <tr className="border-b border-gray-800">
                   <td className="py-2">Image</td>
                   <td className="font-mono text-xs text-purple-300">![Alt Text](image-url)</td>
                 </tr>
                 <tr>
                   <td className="py-2">Image Link</td>
                   <td className="font-mono text-xs text-green-300">[![Alt](img)](link)</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      )
    },
    {
      id: 'md-4',
      title: "Task Lists & Diagrams",
      type: 'read',
      content: (
        <div className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div>
                <h4 className="font-bold text-gray-200 mb-4">Task Lists</h4>
                <div className="bg-[#161b22] p-4 rounded-xl border border-github-border">
                   <pre className="text-xs font-mono text-gray-400 mb-4">
- [x] Completed task<br/>
- [ ] Pending task
                   </pre>
                   {/* Checkboxes visualization code */}
                   <div className="space-y-2">
                      <div className="flex items-center gap-2">
                         <input type="checkbox" checked readOnly className="checked:bg-blue-500" /> 
                         <span className="text-gray-400 text-sm line-through">Completed task</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <input type="checkbox" readOnly /> 
                         <span className="text-gray-400 text-sm">Pending task</span>
                      </div>
                   </div>
                </div>
             </div>
             <div>
               <h4 className="font-bold text-gray-200 mb-4">Mermaid Diagrams</h4>
               <p className="text-xs text-gray-400 mb-2">GitHub supports Mermaid.js for diagrams!</p>
               <pre className="text-xs bg-black/50 p-4 rounded font-mono text-gray-300 border border-gray-800">
{`\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
\`\`\``}
               </pre>
             </div>
           </div>
        </div>
      )
    },
    {
      id: 'md-5',
      title: "Prettifying Code",
      type: 'read',
      content: (
        <div className="space-y-6">
              <p className="text-gray-400 text-sm">Presenting code snippets beautifully is crucial for showing off your work.</p>
              
              <div className="bg-[#161b22] border border-github-border rounded-xl p-6">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-white">Syntax Highlighting</span>
                    <span className="text-xs text-gray-500 font-mono">language-specific</span>
                 </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                       <p className="text-xs text-gray-400 mb-2">Input:</p>
                       <pre className="text-xs bg-black/50 p-4 rounded font-mono text-gray-300 overflow-x-auto">
{`\`\`\`javascript
function hello() {
  console.log("World");
}
\`\`\``}
                       </pre>
                    </div>
                    <div>
                       <p className="text-xs text-gray-400 mb-2">Rendered Output:</p>
                       <div className="bg-[#0d1117] p-4 rounded border border-github-border font-mono text-xs">
                          <span className="text-[#ff7b72]">function</span> <span className="text-[#d2a8ff]">hello</span>() {'{'}<br/>
                          &nbsp;&nbsp;<span className="text-gray-300">console</span>.<span className="text-[#79c0ff]">log</span>(<span className="text-[#a5d6ff]">"World"</span>);<br/>
                          {'}'}
                       </div>
                    </div>
                 </div>
              </div>
        </div>
      )
    },
    {
      id: 'md-6',
      title: "Tables & Layouts",
      type: 'read',
      content: (
        <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-900/10 to-transparent border border-github-border p-6 rounded-xl">
                 <p className="text-gray-300 mb-4">
                    GitHub READMEs don't support flexbox or CSS grid, but you can use <b>HTML Tables</b> to create side-by-side layouts.
                 </p>
                 <pre className="text-xs bg-[#0d1117] p-4 rounded border border-github-border text-gray-400 font-mono overflow-x-auto">
{`<table>
  <tr>
    <td width="50%">
      <h3>My Tech Stack</h3>
      ...
    </td>
    <td width="50%">
      <h3>About Me</h3>
      ...
    </td>
  </tr>
</table>`}
                 </pre>
              </div>
        </div>
      )
    },
    {
      id: 'md-practice',
      title: "Live Playground",
      type: 'practice',
      practiceMode: 'markdown',
      initialCode: '# Hello World!\n\nThis is a **Markdown Playground**.\n\n- Try editing this list\n- Add some code blocks\n\n```js\nconsole.log("Like this!");\n```',
      content: <p className="mb-4 text-gray-300">Experiment with your new skills. This editor renders in real-time.</p>
    }
  ]
};
