
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
        <div className="space-y-6">
          <p className="text-[#8b949e]">Markdown allows you to create rich text for your profile. Here's the core syntax you need for Metricverse:</p>
          <div className="bg-[#050505] p-6 rounded-2xl border border-[#30363d] font-mono text-sm space-y-4">
            <div className="text-[#58a6ff]">### Images & Badges</div>
            <code className="block text-[#fff] opacity-70">![Alt Text](URL_TO_SVG)</code>
            <div className="text-[#58a6ff]">### Centering Content</div>
            <code className="block text-[#fff] opacity-70">&lt;p align="center"&gt;<br/>  &lt;img src="SVG_URL" /&gt;<br/>&lt;/p&gt;</code>
            <div className="text-[#58a6ff]">### Clickable Metrics</div>
            <code className="block text-[#fff] opacity-70">[![Metric](SVG_URL)](https://github.com/USER)</code>
          </div>
          <div className="p-4 bg-[#238636]/10 border border-[#238636]/30 rounded-xl text-[#3fb950] text-sm font-bold">
            PRO TIP: Use HTML &lt;br/&gt; tags to force spacing between your metric rows!
          </div>
        </div>
      )
    },
    {
      title: "GitHub Optimization",
      icon: "🚀",
      subtitle: "Hacking your profile discoverability",
      content: (
        <div className="space-y-6">
          <p className="text-[#8b949e]">GitHub is your living resume. To stand out to recruiters, follow this checklist:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Update your Bio with specific tech keywords (e.g., 'Golang Expert').",
              "Pin your 6 most complex repositories with clear descriptions.",
              "Use 'Special Repositories' (Username/Username) to host your main README.",
              "Add Social Links (Twitter, LinkedIn) to the left sidebar.",
              "Maintain a 'Green Streak' - consistent daily contributions.",
              "Collaborate on trending Open Source repos to get 'Verified' vibes."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/80 bg-[#161b22] p-4 rounded-xl border border-[#30363d]">
                <span className="text-[#3fb950] font-black">✓</span> {text}
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "SVG Engineering",
      icon: "⚡",
      subtitle: "Vector graphics for the modern web",
      content: (
        <div className="space-y-6">
          <p className="text-[#8b949e]">Metricverse uses SVG (Scalable Vector Graphics). Here's why it's better than PNG:</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#bc8cff]"></div>
              <p className="text-sm text-white font-bold">Resolution Independence: <span className="text-[#8b949e] font-normal">Looks sharp on 4K screens.</span></p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#bc8cff]"></div>
              <p className="text-sm text-white font-bold">DOM-like Structure: <span className="text-[#8b949e] font-normal">Easily animated with CSS keyframes.</span></p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#bc8cff]"></div>
              <p className="text-sm text-white font-bold">Lightweight: <span className="text-[#8b949e] font-normal">Our typical metric is only 2KB of text data.</span></p>
            </div>
          </div>
          <div className="bg-[#161b22] p-6 rounded-2xl border border-[#30363d]">
            <h4 className="text-[#fff] font-black text-xs uppercase mb-4 tracking-widest">SVG Anatomy Example</h4>
            <pre className="text-[10px] text-[#58a6ff] font-mono leading-relaxed overflow-x-auto">
{`<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="#3fb950" />
  <style>
    circle { animation: pulse 1s infinite; }
    @keyframes pulse { 50% { r: 45; } }
  </style>
</svg>`}
            </pre>
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
            <textarea 
              value={mdInput}
              onChange={(e) => setMdInput(e.target.value)}
              className="w-full h-40 bg-[#050505] border border-[#30363d] rounded-xl p-4 text-xs font-mono text-[#3fb950] focus:border-[#58a6ff] outline-none transition-all"
            />
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
