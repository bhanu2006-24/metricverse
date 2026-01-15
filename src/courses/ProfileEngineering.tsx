import React from 'react';

export const ProfileEngineering = {
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
};
