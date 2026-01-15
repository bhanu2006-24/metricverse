import React from 'react';

export const MarkdownDeepDive = {
  title: "Markdown Deep Dive",
  icon: "📝",
  subtitle: "Mastering Profile Typography",
  content: (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
       <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Markdown is more than just text formatting; it's the semantic structure of your developer identity. A well-formatted profile communicates attention to detail and technical proficiency.
          </p>
       </div>
       
       {/* Section 1: Typography & Hierarchy */}
       <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
             <span className="p-2 bg-blue-500/20 rounded-lg text-blue-400">01</span> Typography & Hierarchy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
                <h4 className="font-bold text-gray-200 mb-2">Headers</h4>
                <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-500">
                  <span className="text-blue-400">#</span> H1 - Main Title<br/>
                  <span className="text-blue-400">##</span> H2 - Major Section<br/>
                  <span className="text-blue-400">###</span> H3 - Subsection
                </pre>
             </div>
             <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
                <h4 className="font-bold text-gray-200 mb-2">Emphasis</h4>
                <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-500">
                  <span className="text-purple-400">**Bold**</span> for impact<br/>
                  <span className="text-purple-400">*Italic*</span> for nuance<br/>
                  <span className="text-purple-400">~~Strike~~</span> for deprecation
                </pre>
             </div>
          </div>
       </div>

       {/* Section 2: Code Presentation */}
       <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
             <span className="p-2 bg-green-500/20 rounded-lg text-green-400">02</span> Code Presentation
          </h3>
          <p className="text-gray-400 text-sm">Presenting code snippets beautifully is crucial for showing off your work.</p>
          
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
             <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-white">Syntax Highlighting</span>
                <span className="text-xs text-gray-500 font-mono">language-specific</span>
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                   <p className="text-xs text-gray-400 mb-2">Input:</p>
                   <pre className="text-xs bg-black/50 p-4 rounded font-mono text-gray-300 overflow-x-auto">
{`\`\`\`javascript
// A simple function
function hello() {
  console.log("World");
}
\`\`\``}
                   </pre>
                </div>
                <div>
                   <p className="text-xs text-gray-400 mb-2">Rendered Output:</p>
                   <div className="bg-[#0d1117] p-4 rounded border border-[#30363d] font-mono text-xs">
                      <span className="text-[#ff7b72]">function</span> <span className="text-[#d2a8ff]">hello</span>() {'{'}<br/>
                      &nbsp;&nbsp;<span className="text-gray-300">console</span>.<span className="text-[#79c0ff]">log</span>(<span className="text-[#a5d6ff]">"World"</span>);<br/>
                      {'}'}
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Section 3: Tables & Layouts */}
       <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
             <span className="p-2 bg-purple-500/20 rounded-lg text-purple-400">03</span> Advanced Layouts
          </h3>
          <div className="bg-gradient-to-r from-purple-900/10 to-transparent border border-[#30363d] p-6 rounded-xl">
             <p className="text-gray-300 mb-4">
                GitHub READMEs don't support flexbox or CSS grid, but you can use <b>HTML Tables</b> to create side-by-side layouts.
             </p>
             <pre className="text-xs bg-[#0d1117] p-4 rounded border border-[#30363d] text-gray-400 font-mono overflow-x-auto">
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
    </div>
  )
};
