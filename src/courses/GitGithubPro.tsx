import React from 'react';
import { Course } from '../types';

export const GitGithubPro: Course = {
  id: 'git-github-pro',
  title: "Git & GitHub Pro",
  icon: "🌳",
  subtitle: "Advanced Version Control",
  lessons: [
    {
      id: 'git-1',
      title: "1. The Philosophy (DAG)",
      type: 'read',
      content: (
        <div className="space-y-4">
           <p className="text-gray-300">
             Git is a Directed Acyclic Graph (DAG) of commits. Every commit is a full snapshot of the project, pointing to its parent(s).
           </p>
           <div className="bg-[#161b22] p-4 rounded-xl border border-github-border">
              <p className="text-gray-400 text-sm">"Branching is just moving a pointer. That's why it's so fast."</p>
           </div>
        </div>
      )
    },
    {
      id: 'git-2',
      title: "2. Configuration (Identity)",
      type: 'read',
      content: (
        <div className="space-y-4">
           <p className="text-gray-300">Tell Git who you are. This metadata is baked into every commit.</p>
           <div className="bg-[#161b22] p-4 rounded-lg">
              <code className="text-blue-400 block mb-2">git config --global user.name "John Doe"</code>
              <code className="text-blue-400 block">git config --global user.email "john@example.com"</code>
           </div>
        </div>
      )
    },
    {
      id: 'git-3',
      title: "3. Initialization",
      type: 'read',
      content: (
         <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-[#161b22] p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">New Project</h4>
                  <code className="text-green-400">git init</code>
                  <p className="text-xs text-gray-500 mt-2">Creates .git folder</p>
               </div>
               <div className="bg-[#161b22] p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-2">Existing</h4>
                  <code className="text-green-400">git clone [url]</code>
                  <p className="text-xs text-gray-500 mt-2">Downloads repo</p>
               </div>
            </div>
         </div>
      )
    },
    {
       id: 'git-4',
       title: "4. The Staging Area",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Git has three states: Working Directory, Staging Area (Index), and Repository.</p>
             <div className="bg-[#161b22] p-4 rounded-lg flex items-center gap-4">
                <code className="text-purple-400">git add .</code>
                <span className="text-gray-400 text-sm">Moves changes to Staging.</span>
             </div>
          </div>
       )
    },
    {
       id: 'git-5',
       title: "5. Commits (Snapshots)",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">A commit is a permanent snapshot.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-yellow-400 block mb-2">git commit -m "feat: add login"</code>
                <p className="text-xs text-gray-500">Always use descriptive messages. Present tense, imperative.</p>
             </div>
          </div>
       )
    },
    {
       id: 'git-6',
       title: "6. Status & Diff",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="bg-[#161b22] p-4 rounded-lg mb-2">
                <code className="text-blue-400 font-bold block mb-1">git status</code>
                <p className="text-xs text-gray-400">Your GPS. Run this constantly.</p>
             </div>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-blue-400 font-bold block mb-1">git diff</code>
                <p className="text-xs text-gray-400">See exactly what changed line-by-line.</p>
             </div>
          </div>
       )
    },
    {
       id: 'git-7',
       title: "7. Branching",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Branches are cheap pointers. Create them for everything.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-green-400 block mb-2">git branch feature-x</code>
                <code className="text-green-400 block">git checkout feature-x</code>
             </div>
          </div>
       )
    },
    {
       id: 'git-8',
       title: "8. Merging",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Bringing history back together.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-purple-400 mb-2 block">git merge feature-x</code>
                <p className="text-xs text-gray-500">Merges feature-x into current branch. Creates a merge commit if necessary.</p>
             </div>
          </div>
       )
    },
    {
       id: 'git-9',
       title: "9. Remote Repositories",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Linking your local computer to GitHub.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-gray-300">git remote add origin https://github.com/user/repo.git</code>
             </div>
          </div>
       )
    },
    {
       id: 'git-10',
       title: "10. Push & Pull",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#161b22] p-4 rounded-lg">
                   <h4 className="text-white font-bold mb-2">Push</h4>
                   <code className="text-blue-400 text-xs">git push -u origin main</code>
                   <p className="text-xs text-gray-500 mt-2">Uploads structure</p>
                </div>
                <div className="bg-[#161b22] p-4 rounded-lg">
                   <h4 className="text-white font-bold mb-2">Pull</h4>
                   <code className="text-blue-400 text-xs">git pull</code>
                   <p className="text-xs text-gray-500 mt-2">Downloads & Merges</p>
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'git-11',
       title: "11. Fetch vs Pull",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300"><code className="text-white">git pull</code> is essentially <code className="text-white">git fetch</code> + <code className="text-white">git merge</code>.</p>
             <div className="bg-[#161b22] p-4 rounded-lg border border-yellow-500/30">
                <p className="text-sm text-yellow-200">Use <code className="font-bold">git fetch</code> to download standard updates without merging them into your work yet. Safer.</p>
             </div>
          </div>
       )
    },
    {
       id: 'git-12',
       title: "12. Reset",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Moving the HEAD pointer backward.</p>
             <div className="space-y-2 text-xs">
                <div className="bg-[#161b22] p-3 rounded flex justify-between">
                   <code className="text-green-400">--soft</code>
                   <span className="text-gray-400">Keeps changes in Staging.</span>
                </div>
                <div className="bg-[#161b22] p-3 rounded flex justify-between">
                   <code className="text-yellow-400">--mixed</code>
                   <span className="text-gray-400">Keeps changes in Working Dir. (Default)</span>
                </div>
                <div className="bg-[#161b22] p-3 rounded flex justify-between border border-red-900/50">
                   <code className="text-red-400">--hard</code>
                   <span className="text-gray-400">DESTROYS changes. Dangerous.</span>
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'git-13',
       title: "13. Revert",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">The safe way to undo shared history. Creates a new opposite commit.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-blue-400">git revert [commit-hash]</code>
             </div>
          </div>
       )
    },
    {
       id: 'git-14',
       title: "14. Stash",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Save uncommitted work for later. Like a clipboard for your files.</p>
             <div className="bg-[#161b22] p-4 rounded-lg space-y-2">
                <code className="block text-gray-300">git stash</code>
                <code className="block text-gray-300">git stash pop</code>
                <code className="block text-gray-300">git stash list</code>
             </div>
          </div>
       )
    },
    {
       id: 'git-15',
       title: "15. Clean",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Remove untracked files.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-red-400">git clean -fd</code>
                <p className="text-xs text-gray-500 mt-2">-f (force), -d (directories)</p>
             </div>
          </div>
       )
    },
    {
       id: 'git-16',
       title: "16. Cherry-pick",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Pick specific commits from other branches.</p>
             <div className="bg-[#161b22] p-4 rounded-lg border border-purple-500/30">
                <code className="text-purple-400">git cherry-pick [hash]</code>
                <p className="text-xs text-gray-400 mt-2">Useful for hotfixes.</p>
             </div>
          </div>
       )
    },
    {
       id: 'git-17',
       title: "17. Rebase",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Linearize history by moving commits.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-yellow-400">git rebase main</code>
                <p className="text-xs text-gray-500 mt-2">Replays current branch commits on top of main.</p>
             </div>
             <p className="text-red-400 text-xs font-bold uppercase">⚠️ Do not rebase public branches.</p>
          </div>
       )
    },
    {
       id: 'git-18',
       title: "18. Interactive Rebase",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Rewrite history: squash, edit, reword, drop.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-yellow-400">git rebase -i HEAD~3</code>
                <p className="text-xs text-gray-500 mt-2">Opens editor to modify last 3 commits.</p>
             </div>
          </div>
       )
    },
    {
       id: 'git-19',
       title: "19. Bisect",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Binary search to find which commit introduced a bug.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-xs space-y-1">
                <code className="block text-gray-300">git bisect start</code>
                <code className="block text-green-400">git bisect good [hash]</code>
                <code className="block text-red-400">git bisect bad [hash]</code>
             </div>
          </div>
       )
    },
    {
       id: 'git-20',
       title: "20. Blame",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">See who wrote which line.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-blue-400">git blame filename.ts</code>
             </div>
          </div>
       )
    },
    {
       id: 'git-21',
       title: "21. Submodules",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Repos inside repos.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-gray-300">git submodule add [url]</code>
                <p className="text-xs text-gray-500 mt-2">Complicated but powerful.</p>
             </div>
          </div>
       )
    },
    {
       id: 'git-22',
       title: "22. Git Hooks",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Scripts that run automatically.</p>
             <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-[#161b22] p-2 rounded border border-gray-700">pre-commit</div>
                <div className="bg-[#161b22] p-2 rounded border border-gray-700">pre-push</div>
                <div className="bg-[#161b22] p-2 rounded border border-gray-700">commit-msg</div>
             </div>
          </div>
       )
    },
    {
       id: 'git-23',
       title: "23. Pull Requests",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">The heart of GitHub collaboration.</p>
             <ul className="text-sm text-gray-400 list-disc list-inside">
                <li>Review code</li>
                <li>Discuss changes</li>
                <li>CI/CD checks pass</li>
                <li>Merge approval</li>
             </ul>
          </div>
       )
    },
    {
       id: 'git-24',
       title: "24. GitHub Actions",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Automate your workflow. CI/CD pipelines.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <p className="text-xs text-gray-500 mb-2">.github/workflows/main.yml</p>
                <div className="bg-black/50 p-2 rounded text-xs font-mono text-blue-300">
                   on: [push]<br/>
                   jobs:<br/>
                   &nbsp;&nbsp;build:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest
                </div>
             </div>
          </div>
       )
    },
    {
      id: 'git-practice',
      title: "CLI Practice",
      type: 'practice',
      practiceMode: 'bash',
      initialCode: 'git --version\ngit status',
      content: <p className="mb-4 text-gray-300">Practice your Git commands in the terminal below.</p>
    }
  ]
};
