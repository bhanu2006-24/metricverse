import React from 'react';
import { Course } from '../types';

export const ProfileEngineering: Course = {
  id: 'profile-engineering',
  title: "Profile Engineering",
  icon: "🚀",
  subtitle: "Hacking Discoverability",
  lessons: [
    {
      id: 'pe-1',
      title: "The Recruiter Filter",
      type: 'read',
      content: (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-start gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">6 Seconds</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                That's how long a recruiter scans your profile. They look for:
                <br/><br/>
                1. <strong className="text-white">Green Squares</strong> (Consistency)
                <br/>
                2. <strong className="text-white">Pinned Projects</strong> (Best work)
                <br/>
                3. <strong className="text-white">Bio</strong> (Who are you?)
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pe-2',
      title: "Actionable Checklist",
      type: 'read',
      content: (
          <div className="grid gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500">Do This Now</h4>
            {[
              "Set a professional avatar.",
              "Write a bio: [Role] @ [Company] | Building [X].",
              "Pin your 6 best repositories.",
              "Rename repos to be readable (no kebab-case if possible for titles).",
              "Add a link to your portfolio."
            ].map((text, i) => (
              <label key={i} className="flex items-center gap-4 bg-[#161b22] px-6 py-4 rounded-xl border border-github-border cursor-pointer hover:border-github-accent transition-colors group">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-600 text-github-accent focus:ring-offset-github-dark" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{text}</span>
              </label>
            ))}
          </div>
      )
    },
    {
      id: 'pe-3',
      title: "The Special Repo",
      type: 'read',
      content: (
          <div className="p-6 bg-linear-to-r from-blue-600/10 to-green-600/10 border border-github-border rounded-2xl">
             <h4 className="text-white font-bold mb-2">💡 Pro Tip</h4>
             <p className="text-sm text-github-muted">
               Create a repo named <code className="text-github-accent">username/username</code>. 
               This is your <strong>Secret Profile README</strong>.
             </p>
          </div>
      )
    },
    {
      id: 'pe-practice',
      title: "Markdown Practice",
      type: 'practice',
      practiceMode: 'markdown',
      initialCode: '# My Awesome Profile\n\nSoftware Engineer | Space Enthusiast\n\n## 🔧 Tech Stack\n- React\n- TypeScript\n- Node.js',
      content: <p className="mb-4 text-gray-300">Draft your profile README below.</p>
    }
  ]
};
