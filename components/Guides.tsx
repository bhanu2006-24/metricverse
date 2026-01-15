
import React, { useState } from 'react';

const Guides: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<number>(0);
  const [mdInput, setMdInput] = useState('# Hello World!\n\nThis is a **Markdown Previewer**.\n\n- Bullet 1\n- Bullet 2');

  const courses = [
    {
      title: "Markdown 101",
      icon: "📝",
      subtitle: "The Syntax of the Web",
      content: (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="prose prose-invert max-w-none">
             <p className="text-xl text-gray-300 leading-relaxed font-light">
               Markdown is the lingua franca of developers. It's how we document, communicate, and structure our existence on platforms like GitHub. Mastering it is the first step to a premium profile.
             </p>
          </div>

          {/* Cheat Sheet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 hover:border-gray-500 transition-colors">
                <h4 className="flex items-center gap-2 font-bold text-white mb-4">
                  <span className="text-[#58a6ff]">#</span> Headers
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between p-2 bg-black/30 rounded"><span className="text-blue-400"># Title</span> <span className="text-gray-500">H1 (Main)</span></div>
                  <div className="flex justify-between p-2 bg-black/30 rounded"><span className="text-blue-400">## Section</span> <span className="text-gray-500">H2 (Section)</span></div>
                  <div className="flex justify-between p-2 bg-black/30 rounded"><span className="text-blue-400">### Subsection</span> <span className="text-gray-500">H3 (Subsection)</span></div>
                </div>
             </div>

             <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 hover:border-gray-500 transition-colors">
                <h4 className="flex items-center gap-2 font-bold text-white mb-4">
                  <span className="text-[#bc8cff]">*</span> Emphasis
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between p-2 bg-black/30 rounded"><span className="text-purple-400">**Bold**</span> <span className="font-bold text-gray-400">Bold</span></div>
                  <div className="flex justify-between p-2 bg-black/30 rounded"><span className="text-purple-400">*Italic*</span> <span className="italic text-gray-400">Italic</span></div>
                  <div className="flex justify-between p-2 bg-black/30 rounded"><span className="text-purple-400">~~Strike~~</span> <span className="line-through text-gray-400">Strike</span></div>
                </div>
             </div>

             <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 hover:border-gray-500 transition-colors">
                <h4 className="flex items-center gap-2 font-bold text-white mb-4">
                  <span className="text-[#3fb950]">-</span> Lists & Code
                </h4>
                <div className="space-y-2 font-mono text-xs">
                   <div className="p-2 bg-black/30 rounded text-gray-400">- Item 1<br/>- Item 2</div>
                   <div className="p-2 bg-black/30 rounded text-green-400">`inline_code`</div>
                   <div className="p-2 bg-black/30 rounded text-green-400">```js<br/>console.log("Block")<br/>```</div>
                </div>
             </div>

             <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 hover:border-gray-500 transition-colors">
                <h4 className="flex items-center gap-2 font-bold text-white mb-4">
                  <span className="text-[#ff7b72]">!</span> Media
                </h4>
                <div className="space-y-2 font-mono text-xs">
                   <div className="p-3 bg-black/30 rounded text-gray-400 break-all">
                     <span className="text-red-400">[Link Text](url)</span>
                   </div>
                   <div className="p-3 bg-black/30 rounded text-gray-400 break-all">
                     <span className="text-red-400">![Alt Text](image_url)</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      title: "GitHub & Git",
      icon: "🌳",
      subtitle: "Version Control Mastery",
      content: (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500 p-6 rounded-r-xl">
             <h3 className="text-xl font-bold text-blue-100 mb-2">Fundamental Concepts</h3>
             <p className="text-blue-200/70 text-sm">
                Git is the time machine for your code. GitHub is the social network where that code lives.
             </p>
          </div>

          <div className="space-y-4">
             <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-gray-800 pb-2">The Golden Commands</h4>
             {[
               { cmd: 'git init', desc: 'Initialize a new git repository in the current folder.' },
               { cmd: 'git add .', desc: 'Stage all changes for the next commit.' },
               { cmd: 'git commit -m "msg"', desc: 'Save the staged changes with a descriptive message.' },
               { cmd: 'git push origin main', desc: 'Upload your commits to the remote server (GitHub).' },
               { cmd: 'git pull', desc: 'Download changes from GitHub to your local machine.' },
             ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-[#161b22] px-6 py-4 rounded-xl border border-[#30363d] group hover:border-[#58a6ff] transition-all">
                   <code className="text-[#58a6ff] font-mono text-sm">{item.cmd}</code>
                   <span className="text-gray-500 text-xs mt-2 md:mt-0">{item.desc}</span>
                </div>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
             <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-purple-500"></span> The Pull Request Flow
                </h4>
                <ol className="relative border-l border-gray-700 ml-3 space-y-6">
                   <li className="ml-6">
                      <span className="absolute -left-1.5 w-3 h-3 bg-gray-700 rounded-full mt-1.5"></span>
                      <h5 className="text-gray-300 font-bold text-sm">Fork & Clone</h5>
                      <p className="text-xs text-gray-500">Copy the repo to your account and download it.</p>
                   </li>
                   <li className="ml-6">
                      <span className="absolute -left-1.5 w-3 h-3 bg-purple-500 rounded-full mt-1.5 shadow-[0_0_10px_#a855f7]"></span>
                      <h5 className="text-white font-bold text-sm">Create Branch</h5>
                      <code className="text-[10px] bg-black px-1 rounded text-purple-400">git checkout -b feature/cool-thing</code>
                   </li>
                   <li className="ml-6">
                      <span className="absolute -left-1.5 w-3 h-3 bg-gray-700 rounded-full mt-1.5"></span>
                      <h5 className="text-gray-300 font-bold text-sm">Commit & Push</h5>
                      <p className="text-xs text-gray-500">Save your changes and upload to your fork.</p>
                   </li>
                   <li className="ml-6">
                      <span className="absolute -left-1.5 w-3 h-3 bg-green-500 rounded-full mt-1.5 shadow-[0_0_10px_#22c55e]"></span>
                      <h5 className="text-white font-bold text-sm">Open Pull Request</h5>
                      <p className="text-xs text-gray-500">Propose your changes to the original maintainer.</p>
                   </li>
                </ol>
             </div>

             <div className="bg-[#050505] p-6 rounded-2xl border border-[#30363d]">
                <h4 className="text-white font-bold mb-4">💡 Open Source Etiquette</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                   <li className="flex gap-2"><span>✅</span> <span>Read the <code className="text-orange-400">CONTRIBUTING.md</code> file first.</span></li>
                   <li className="flex gap-2"><span>✅</span> <span>Discuss major changes in an Issue before coding.</span></li>
                   <li className="flex gap-2"><span>✅</span> <span>Keep PRs small and focused on one thing.</span></li>
                   <li className="flex gap-2"><span>❌</span> <span>Don't commit files like `.env` or `node_modules`.</span></li>
                </ul>
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Profile Engineering",
      icon: "🚀",
      subtitle: "Hacking Discoverability",
      content: (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-[#3fb950]/20 flex items-center justify-center flex-shrink-0 text-[#3fb950]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">The "Recruiter Filter"</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                Recruiters spend an average of 6 seconds scanning a profile. They look for:
                <br/><br/>
                1. <strong className="text-white">Active contributions</strong> (Green squares)
                <br/>
                2. <strong className="text-white">Top languages</strong> (Matching the job description)
                <br/>
                3. <strong className="text-white">Pinned Projects</strong> (With live demos)
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500">Actionable Checklist</h4>
            {[
              "Set a professional avatar (no anime/memes unless you are a senior dev).",
              "Write a bio that states: [Current Role] @ [Company] | Building [Project].",
              "Pin your 6 best repositories. Rename them if they are default `kebab-case`.",
              "Add a link to your personal portfolio or LinkedIn.",
              "Enable the 'Achievements' section in your profile settings."
            ].map((text, i) => (
              <label key={i} className="flex items-center gap-4 bg-[#161b22] px-6 py-4 rounded-xl border border-[#30363d] cursor-pointer hover:border-[#58a6ff] transition-colors group">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-600 text-[#58a6ff] focus:ring-offset-[#0d1117]" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{text}</span>
              </label>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-[#1f6feb]/10 to-[#238636]/10 border border-[#30363d] rounded-2xl">
             <h4 className="text-[#fff] font-bold mb-2">💡 Pro Tip: The Special Repository</h4>
             <p className="text-sm text-[#8b949e]">
               Create a repository with the exact same name as your username (e.g., <code className="text-[#58a6ff]">bhanu2006-24/bhanu2006-24</code>). 
               GitHub treats this as a special repository and its README.md will appear on your profile's front page. This is where you put your Metricverse stats!
             </p>
          </div>
        </div>
      )
    },
    {
      title: "Visual Architecture",
      icon: "⚡",
      subtitle: "SVG Aesthetics",
      content: (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-[#8b949e]">
            Your GitHub profile is your personal brand. Consistency in color and style establishes professionalism. Metricverse allows you to adhere to strict design systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#161b22] p-6 rounded-2xl border border-[#30363d] text-center group hover:border-[#bc8cff] transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#bc8cff] to-[#58a6ff] mb-4 group-hover:scale-110 transition-transform"></div>
              <h4 className="text-white font-bold mb-2">Modern Gradient</h4>
              <p className="text-[10px] text-[#8b949e]">High-contrast gradients that pop against dark mode (Default).</p>
            </div>
            <div className="bg-[#161b22] p-6 rounded-2xl border border-[#30363d] text-center group hover:border-[#3fb950] transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0d1117] border-2 border-[#3fb950] mb-4 font-mono flex items-center justify-center text-[#3fb950] text-xs">
                 &gt;_
              </div>
              <h4 className="text-white font-bold mb-2">Terminal / Hacker</h4>
              <p className="text-[10px] text-[#8b949e]">Monospaced fonts and neon green accents.</p>
            </div>
            <div className="bg-[#161b22] p-6 rounded-2xl border border-[#30363d] text-center group hover:border-[#ff7b72] transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-white border-4 border-black mb-4 flex items-center justify-center">
                 <div className="w-8 h-8 bg-black"></div>
              </div>
              <h4 className="text-white font-bold mb-2">Neo-Brutalism</h4>
              <p className="text-[10px] text-[#8b949e]">Bold strokes, hard shadows, and vibrant colors.</p>
            </div>
          </div>

          <div className="bg-[#161b22] p-8 rounded-2xl border border-[#30363d]">
            <h4 className="text-[#fff] font-black text-xs uppercase mb-6 tracking-widest">Theme Harmony Rule</h4>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-lg bg-blue-500"></div>
                 <div className="w-8 h-8 rounded-lg bg-purple-500"></div>
                 <span className="text-gray-400 text-sm">= <span className="text-white font-bold">Good</span> (Analogous)</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-lg bg-red-500"></div>
                 <div className="w-8 h-8 rounded-lg bg-green-500"></div>
                 <span className="text-gray-400 text-sm">= <span className="text-white font-bold">Risky</span> (Clashing if not handled well)</span>
               </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-12 animate-in fade-in duration-1000">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-6xl font-black text-white mb-6 tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Metricverse <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bc8cff] to-[#58a6ff]">Academy</span>
        </h2>
        <p className="text-[#8b949e] text-lg font-light tracking-wide">Master the art of Developer Brand Engineering.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:w-1/3 space-y-4 sticky top-24">
          <div className="bg-[#0d1117] border border-[#30363d] rounded-[2rem] p-4 space-y-2">
            {courses.map((course, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCourse(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group flex items-center gap-4 ${
                  activeCourse === idx 
                    ? 'bg-white border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-[1.02]' 
                    : 'bg-transparent border-transparent hover:bg-[#161b22] hover:border-[#30363d]'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${activeCourse === idx ? 'bg-black text-white' : 'bg-[#161b22] text-gray-400 group-hover:text-white'}`}>
                   {course.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-sm uppercase tracking-tight ${activeCourse === idx ? 'text-black' : 'text-gray-300 group-hover:text-white'}`}>
                    {course.title}
                  </h3>
                  <p className={`text-[10px] uppercase font-bold ${activeCourse === idx ? 'text-black/60' : 'text-gray-600'}`}>
                    {course.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d] rounded-[2rem]">
            <h4 className="text-white font-black text-[10px] uppercase mb-4 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#3fb950] rounded-full animate-pulse"></span>
              Markdown Playground
            </h4>
            <div className="flex flex-col h-[400px]">
              <textarea 
                   value={mdInput}
                   onChange={(e) => setMdInput(e.target.value)}
                   className="flex-1 w-full bg-[#010409] border border-[#30363d] rounded-t-xl p-3 outline-none text-xs font-mono text-[#7ee787] resize-none focus:border-[#58a6ff] transition-colors"
                   placeholder="# Start typing markdown..."
              />
              <div className="h-1 bg-[#30363d]"></div>
              <div className="flex-1 bg-white border border-[#30363d] border-t-0 rounded-b-xl p-3 overflow-y-auto">
                 <div className="prose prose-sm prose-slate max-w-none text-black">
                    {mdInput.split('\n').map((line, i) => {
                      if (line.startsWith('# ')) return <h1 key={i} className="text-xl font-bold mb-2 pb-1 border-b">{line.slice(2)}</h1>;
                      if (line.startsWith('## ')) return <h2 key={i} className="text-lg font-bold mb-2">{line.slice(3)}</h2>;
                      if (line.startsWith('- ')) return <li key={i} className="ml-4 list-disc">{line.slice(2)}</li>;
                      if (line.trim().startsWith('```')) return <div key={i} className="bg-gray-100 p-2 rounded text-xs font-mono my-2 border">Code Block</div>;
                      if (line.trim() === '') return <br key={i}/>;
                      return <p key={i} className="min-h-[1em]">{line}</p>;
                    })}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3 w-full">
           <div className="bg-[#0d1117] border border-[#30363d] p-8 md:p-12 rounded-[3rem] min-h-[600px] relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
               
               <div className="relative z-10">
                   <div className="mb-10 pb-10 border-b border-[#30363d]">
                      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">{courses[activeCourse].title}</h2>
                      <p className="text-[#8b949e] font-mono text-xs uppercase tracking-[0.2em]">Everything you need to know</p>
                   </div>
                   
                   {courses[activeCourse].content}
               </div>
           </div>
           
           <div className="flex justify-between mt-8 px-4">
              <button 
                onClick={() => setActiveCourse(Math.max(0, activeCourse - 1))}
                disabled={activeCourse === 0}
                className="text-gray-500 hover:text-white disabled:opacity-30 disabled:hover:text-gray-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-colors"
              >
                ← Previous
              </button>
              <button 
                onClick={() => setActiveCourse(Math.min(courses.length - 1, activeCourse + 1))}
                disabled={activeCourse === courses.length - 1}
                className="text-gray-500 hover:text-white disabled:opacity-30 disabled:hover:text-gray-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-colors"
              >
                Next Module →
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
