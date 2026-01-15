
import React, { useState } from 'react';

const Guides: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<number | null>(0);
  const [mdInput, setMdInput] = useState('# Hello World!\n\nThis is a **Markdown Previewer**.\n\n- Bullet 1\n- Bullet 2');

  const courses = [
    {
      title: "Markdown Mastery",
      icon: "✍️",
      subtitle: "The language of the GitHub README",
      content: (
        <div className="space-y-8">
          <p className="text-[#8b949e] leading-relaxed">
            Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. 
            For GitHub profiles, it is the primary way to structure your identity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#050505] p-6 rounded-2xl border border-[#30363d] space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="text-[#58a6ff]">01.</span> Structure & Layout
              </h4>
              <p className="text-xs text-[#8b949e]">Use HTML tables to create grid layouts for your badges and metrics.</p>
              <pre className="text-[10px] text-gray-400 font-mono bg-[#161b22] p-3 rounded-lg overflow-x-auto">
{`<table>
  <tr>
    <td width="50%">
      <img src="..." />
    </td>
    <td width="50%">
      <h3>About Me</h3>
      <p>...</p>
    </td>
  </tr>
</table>`}
              </pre>
            </div>

            <div className="bg-[#050505] p-6 rounded-2xl border border-[#30363d] space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                 <span className="text-[#bc8cff]">02.</span> Dynamic Content
              </h4>
              <p className="text-xs text-[#8b949e]">Embed dynamic SVG metrics that update automatically.</p>
              <code className="block text-xs text-[#58a6ff] bg-[#161b22] p-3 rounded-lg">
                [![My Stats](https://metricverse.pages.dev/api/card)](https://github.com/user)
              </code>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#1f6feb]/10 to-[#238636]/10 border border-[#30363d] rounded-2xl">
            <h4 className="text-[#fff] font-bold mb-2">💡 Pro Tip: Hidden Details</h4>
            <p className="text-sm text-[#8b949e]">
              Use the <code className="text-[#58a6ff]">&lt;details&gt;</code> and <code className="text-[#58a6ff]">&lt;summary&gt;</code> tags to hide long content like stack traces, extensive project lists, or certificates, keeping your profile clean.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Profile Optimization",
      icon: "🚀",
      subtitle: "Hacking your discoverability",
      content: (
        <div className="space-y-8">
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
        </div>
      )
    },
    {
      title: "Brand Engineering",
      icon: "⚡",
      subtitle: "SVG architecture & aesthetics",
      content: (
        <div className="space-y-8">
          <p className="text-[#8b949e]">
            Your GitHub profile is your personal brand. Consistency in color and style establishes professionalism.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#161b22] p-6 rounded-2xl border border-[#30363d] text-center group hover:border-[#bc8cff] transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#bc8cff] to-[#58a6ff] mb-4 group-hover:scale-110 transition-transform"></div>
              <h4 className="text-white font-bold mb-2">Modern Gradient</h4>
              <p className="text-[10px] text-[#8b949e]">High-contrast gradients that pop against dark mode.</p>
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
              <p className="text-[10px] text-[#8b949e]">Bold strokes, hard shadows, and vibrant un-mixed colors.</p>
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
            <p className="mt-6 text-xs text-gray-500">
              Metricverse allows you to select metrics that fit these specific themes. Don't mix "8-bit" with "Corporate" unless you know what you're doing.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-12 animate-in fade-in duration-1000">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase italic">
          Metricverse <span className="text-[#bc8cff]">Academy</span>
        </h2>
        <p className="text-[#8b949e] text-lg">Master the architecture of professional identity.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Navigation Sidebar */}
        <div className="lg:w-1/3 space-y-4">
          {courses.map((course, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCourse(idx)}
              className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-500 group ${
                activeCourse === idx 
                  ? 'bg-white border-white shadow-[0_0_50px_rgba(255,255,255,0.1)]' 
                  : 'bg-[#0d1117] border-[#30363d] hover:border-[#58a6ff]/50'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{course.icon}</span>
                <div>
                  <h3 className={`font-black uppercase tracking-tight ${activeCourse === idx ? 'text-black' : 'text-white'}`}>
                    {course.title}
                  </h3>
                  <p className={`text-[10px] uppercase tracking-widest font-bold ${activeCourse === idx ? 'text-black/50' : 'text-[#8b949e]'}`}>
                    {course.subtitle}
                  </p>
                </div>
              </div>
            </button>
          ))}

          <div className="p-8 bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d] rounded-[2.5rem] mt-8">
            <h4 className="text-white font-black text-xs uppercase mb-4 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#3fb950] rounded-full animate-ping"></span>
              Live Sandbox
            </h4>
            <p className="text-[#8b949e] text-[11px] leading-relaxed mb-6">Test your README layouts in real-time before deploying to GitHub.</p>
            <div className="flex flex-col h-[500px]">
              <div className="flex-1 bg-[#050505] border border-[#30363d] rounded-t-xl p-4">
                 <div className="text-[10px] text-[#8b949e] uppercase tracking-widest mb-2 font-bold">Markdown Input</div>
                 <textarea 
                   value={mdInput}
                   onChange={(e) => setMdInput(e.target.value)}
                   className="w-full h-[calc(100%-24px)] bg-transparent outline-none text-xs font-mono text-[#3fb950] resize-none"
                 />
              </div>
              <div className="flex-1 bg-white border border-[#30363d] rounded-b-xl p-4 overflow-y-auto">
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold border-b pb-2">Live Preview (Rendered)</div>
                 <div className="prose prose-sm prose-slate max-w-none text-black">
                    {/* Basic Markdown Rendering - In production use 'react-markdown' or 'remark' */}
                    {mdInput.split('\n').map((line, i) => {
                      if (line.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold mb-2">{line.slice(2)}</h1>;
                      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold mb-2">{line.slice(3)}</h2>;
                      if (line.startsWith('- ')) return <li key={i} className="ml-4">{line.slice(2)}</li>;
                      if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold">{line.slice(2, -2)}</p>;
                      if (line.trim() === '') return <br key={i}/>;
                      return <p key={i}>{line}</p>;
                    })}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3">
          {activeCourse !== null && (
            <div className="bg-[#0d1117] border border-[#30363d] p-10 rounded-[3rem] min-h-[500px] animate-in slide-in-from-right-10 duration-700">
               <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl">{courses[activeCourse].icon}</span>
                  <div>
                    <h2 className="text-4xl font-black text-white tracking-tighter">{courses[activeCourse].title}</h2>
                    <p className="text-[#8b949e] font-mono text-xs uppercase tracking-widest">MODULE_ID: MC_00{activeCourse + 1}</p>
                  </div>
               </div>
               
               {courses[activeCourse].content}

               <div className="mt-12 pt-12 border-t border-[#30363d] flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#3fb950]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#3fb950]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#30363d]"></div>
                  </div>
                  <button 
                    className="px-8 py-3 bg-[#161b22] border border-[#30363d] rounded-xl text-[10px] font-black uppercase tracking-widest text-[#58a6ff] hover:text-white transition-all"
                    onClick={() => setActiveCourse((activeCourse + 1) % courses.length)}
                  >
                    Next Module
                  </button>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guides;
