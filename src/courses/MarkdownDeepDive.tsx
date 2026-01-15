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
                Markdown is more than just text formatting; it's the semantic structure of your developer identity. A well-formatted profile communicates attention to detail and technical proficiency.
              </p>
           </div>
           
           <div className="bg-[#161b22] border border-github-border rounded-xl p-5">
              <h4 className="font-bold text-gray-200 mb-2">Structure Hierarchy</h4>
              <p className="text-gray-400 text-sm mb-4">Use headers to guide the reader's eye. Limit yourself to one H1.</p>
              <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-500">
                <span className="text-blue-400">#</span> H1 - Main Title (Project Name)<br/>
                <span className="text-blue-400">##</span> H2 - Major Section (Features, Installation)<br/>
                <span className="text-blue-400">###</span> H3 - Subsection (Details)<br/>
              </pre>
           </div>
        </div>
      )
    },
    {
      id: 'md-2',
      title: "Emphasis & Style",
      type: 'read',
      content: (
        <div className="space-y-6">
           <div className="bg-[#161b22] border border-github-border rounded-xl p-5">
              <h4 className="font-bold text-gray-200 mb-2">Emphasis</h4>
              <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-500">
                <span className="text-purple-400">**Bold**</span> for key benefits<br/>
                <span className="text-purple-400">*Italic*</span> for side notes<br/>
                <span className="text-purple-400">~~Strike~~</span> for deprecation or completed tasks
              </pre>
           </div>
           <p className="text-gray-400 text-sm">
             <strong>Pro Tip:</strong> Don't overuse bold text. If everything is bold, nothing is.
           </p>
        </div>
      )
    },
    {
      id: 'md-3',
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
      id: 'md-4',
      title: "Tables & Layouts",
      type: 'read',
      content: (
        <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-900/10 to-transparent border border-github-border p-6 rounded-xl">
                 <p className="text-gray-300 mb-4">
                    GitHub READMEs don't support flexbox or CSS grid, but you can use <b>HTML Tables</b> to create side-by-side layouts.
                 </p>
                 <pre className="text-xs bg-[#0d1117] p-4 rounded border border-github-border text-gray-400 font-mono overflow-x-auto">
&lt;table&gt;
  &lt;tr&gt;
    &lt;td width="50%"&gt;
      &lt;h3&gt;My Tech Stack&lt;/h3&gt;
      ...
    &lt;/td&gt;
    &lt;td width="50%"&gt;
      &lt;h3&gt;About Me&lt;/h3&gt;
      ...
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
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
