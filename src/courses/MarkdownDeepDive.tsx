import React from 'react';
import { Course } from '../types';

export const MarkdownDeepDive: Course = {
  id: 'markdown-deep-dive',
  title: "Markdown Mastery",
  icon: "📝",
  subtitle: "The Complete A-Z Guide",
  lessons: [
    {
      id: 'md-1',
      title: "1. The Philosophy",
      type: 'read',
      content: (
        <div className="space-y-4">
           <p className="text-gray-300 text-lg">
             Markdown is designed to be readable as-is. It's the standard for documentation, READMEs, and developer communication.
           </p>
           <div className="bg-[#161b22] border border-github-border p-4 rounded-xl">
              <p className="text-sm text-gray-400">"The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible." — John Gruber</p>
           </div>
        </div>
      )
    },
    {
      id: 'md-2',
      title: "2. Headers & Hierarchy",
      type: 'read',
      content: (
        <div className="space-y-4">
           <p className="text-gray-400">Use headers to create a logical outlined structure. Only use one H1 per document.</p>
           <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-500">
# H1: Project Title
## H2: Major Section
### H3: Subsection
#### H4: Details
##### H5: Minute Details
###### H6: Smallest
           </pre>
        </div>
      )
    },
    {
      id: 'md-3',
      title: "3. Paragraphs & Breaks",
      type: 'read',
      content: (
         <div className="space-y-4">
            <p className="text-gray-300">Paragraphs are just lines of text separated by a blank line.</p>
            <div className="bg-[#161b22] p-4 rounded-lg">
               <h4 className="text-white font-bold text-sm mb-2">Hard Breaks</h4>
               <p className="text-xs text-gray-400 mb-2">To force a new line without a new paragraph, end a line with two spaces or a <code className="text-red-400">&lt;br&gt;</code> tag.</p>
            </div>
         </div>
      )
    },
    {
      id: 'md-4',
      title: "4. Emphasis Styles",
      type: 'read',
      content: (
        <div className="space-y-4">
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#161b22] p-4 rounded-lg">
                 <code className="text-purple-400 block mb-1">**Bold**</code>
                 <span className="font-bold text-white">Bold Text</span>
              </div>
              <div className="bg-[#161b22] p-4 rounded-lg">
                 <code className="text-purple-400 block mb-1">*Italic*</code>
                 <span className="italic text-white">Italic Text</span>
              </div>
              <div className="bg-[#161b22] p-4 rounded-lg">
                 <code className="text-purple-400 block mb-1">~~Strikethrough~~</code>
                 <span className="line-through text-white">Deleted</span>
              </div>
              <div className="bg-[#161b22] p-4 rounded-lg">
                 <code className="text-purple-400 block mb-1">***Both***</code>
                 <span className="font-bold italic text-white">Bold & Italic</span>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'md-5',
      title: "5. Unordered Lists",
      type: 'read',
      content: (
         <div className="space-y-4">
            <p className="text-gray-300">Use <code className="text-blue-400">-</code>, <code className="text-blue-400">+</code>, or <code className="text-blue-400">*</code> for bullet points.</p>
            <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-300">
- React
- Vue
  - Nuxt
  - Vite (Indented 2 spaces)
- Svelte
            </pre>
         </div>
      )
    },
    {
      id: 'md-6',
      title: "6. Ordered Lists",
      type: 'read',
      content: (
         <div className="space-y-4">
            <p className="text-gray-300">Numbers followed by logical order. The actual numbers don't strictly matter in output, but consistency helps.</p>
             <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-300">
1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step
            </pre>
         </div>
      )
    },
    {
       id: 'md-7',
       title: "7. Task Lists",
       type: 'read',
       content: (
         <div className="space-y-4">
            <p className="text-gray-300">Essential for tracking progress in Issues and PRs.</p>
            <div className="bg-[#161b22] p-4 rounded-lg border border-github-border">
               <pre className="text-xs text-gray-300 mb-2">- [x] Completed item</pre>
               <pre className="text-xs text-gray-300">- [ ] Incomplete item</pre>
            </div>
         </div>
       )
    },
    {
       id: 'md-8',
       title: "8. Links",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="bg-[#161b22] p-4 rounded-lg">
               <p className="text-sm text-gray-400 mb-2">Standard Link</p>
               <code className="text-blue-400">[Google](https://google.com)</code>
             </div>
             <div className="bg-[#161b22] p-4 rounded-lg">
               <p className="text-sm text-gray-400 mb-2">Link with Title (Tooltip)</p>
               <code className="text-blue-400">[Google](https://google.com "Search Engine")</code>
             </div>
          </div>
       )
    },
    {
       id: 'md-9',
       title: "9. Images",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Similar to links, but with a preceding exclamation mark.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-purple-400">![Alt Text](/path/to/image.png)</code>
             </div>
             <p className="text-xs text-gray-500">Pro Tip: For resizing, you must use standard HTML <code>&lt;img width="100" /&gt;</code> tags.</p>
          </div>
       )
    },
    {
       id: 'md-10',
       title: "10. Blockquotes",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Use <code className="text-blue-400">&gt;</code> to create quotes or highlight blocks.</p>
             <div className="flex gap-4">
                <pre className="bg-black/50 p-2 rounded text-xs text-gray-500 w-1/2">&gt; Using components is the future of web dev.</pre>
                <div className="border-l-4 border-gray-600 pl-4 py-1 w-1/2 italic text-gray-400 text-xs">
                   Using components is the future of web dev.
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'md-11',
       title: "11. Inline Code",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Wrap snippets in single backticks.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                Use <code className="text-yellow-400">`npm install`</code> to run the setup.
             </div>
          </div>
       )
    },
    {
       id: 'md-12',
       title: "12. Code Blocks",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Use triple backticks for multi-line blocks.</p>
             <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-300">
```rust
fn main() {'{'}
    println!("Hello World");
{'}'}
```
             </pre>
          </div>
       )
    },
    {
       id: 'md-13',
       title: "13. Syntax Highlighting",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Always specify the language name after the opening backticks for colorization.</p>
             <div className="grid grid-cols-2 gap-2 text-xs font-mono text-gray-500">
                <span>js, javascript</span>
                <span>ts, typescript</span>
                <span>py, python</span>
                <span>sh, bash</span>
                <span>json, yaml</span>
                <span>html, css</span>
             </div>
          </div>
       )
    },
    {
       id: 'md-14',
       title: "14. Tables",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Colons define alignment.</p>
             <pre className="text-xs bg-black/50 p-3 rounded font-mono text-gray-300 overflow-x-auto">
| Left | Center | Right |
| :--- | :----: | :---- |
| Item | Data   | $10   |
             </pre>
          </div>
       )
    },
    {
       id: 'md-15',
       title: "15. Horizontal Rules",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Use three or more dashes, asterisks, or underscores to create a separator.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                <code className="text-blue-400 block">---</code>
                <code className="text-blue-400 block">***</code>
                <code className="text-blue-400 block">___</code>
             </div>
          </div>
       )
    },
    {
       id: 'md-16',
       title: "16. HTML Tags",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">You can use raw HTML for things Markdown misses.</p>
             <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#161b22] p-3 rounded">
                   <p className="text-xs text-gray-400 mb-1">Keyboard Shortcuts:</p>
                   <code className="text-green-400">&lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;C&lt;/kbd&gt;</code>
                </div>
                <div className="bg-[#161b22] p-3 rounded">
                   <p className="text-xs text-gray-400 mb-1">Centering:</p>
                   <code className="text-green-400">&lt;p align="center"&gt;Text&lt;/p&gt;</code>
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'md-17',
       title: "17. Details & Summary",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Create collapsible sections (Accordions).</p>
             <pre className="text-xs bg-black/50 p-4 rounded font-mono text-gray-300">
&lt;details&gt;
  &lt;summary&gt;Click to expand&lt;/summary&gt;
  Hidden content here!
&lt;/details&gt;
             </pre>
          </div>
       )
    },
    {
       id: 'md-18',
       title: "18. GFM Alerts",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">GitHub specific syntax for colored callouts.</p>
             <div className="space-y-2">
                <div className="border-l-4 border-blue-500 bg-blue-500/10 p-3 rounded-r text-sm">
                   <code className="block mb-1 text-blue-300">&gt; [!NOTE]</code>
                   <span className="text-blue-100">Useful information.</span>
                </div>
                <div className="border-l-4 border-yellow-500 bg-yellow-500/10 p-3 rounded-r text-sm">
                   <code className="block mb-1 text-yellow-300">&gt; [!WARNING]</code>
                   <span className="text-yellow-100">Critical warning.</span>
                </div>
             </div>
          </div>
       )
    },
    {
       id: 'md-19',
       title: "19. Footnotes",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Add references at the bottom of the page.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <p className="text-xs text-gray-400 mb-2">Usage:</p>
                <code className="text-purple-400 block mb-2">Text with a footnote[^1].</code>
                <code className="text-purple-400 block">[^1]: The reference content.</code>
             </div>
          </div>
       )
    },
    {
       id: 'md-20',
       title: "20. Escaping Characters",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Use a backslash <code className="text-blue-400">\</code> to treat special characters as normal text.</p>
             <div className="bg-[#161b22] p-4 rounded-lg">
                <code className="text-white">\*Not Italic\*</code> → *Not Italic*
                <br/>
                <code className="text-white">\# Not a header</code> → # Not a header
             </div>
          </div>
       )
    },
    {
       id: 'md-21',
       title: "21. Mermaid Diagrams",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Render charts directly in GitHub.</p>
             <pre className="text-xs bg-black/50 p-4 rounded font-mono text-gray-300">
{`\`\`\`mermaid
pie
    "Code": 80
    "Coffee": 20
\`\`\``}
             </pre>
          </div>
       )
    },
    {
       id: 'md-22',
       title: "22. Math Integration",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Use <code className="text-green-400">$</code> for inline math and <code className="text-green-400">$$</code> for blocks.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center">
                 <code className="text-white text-sm">$\sqrt{'{'}x{'}'}$</code>
             </div>
          </div>
       )
    },
    {
       id: 'md-23',
       title: "23. Comments",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Hide text that only displays in the raw file.</p>
             <div className="bg-[#161b22] p-4 rounded-lg text-center text-gray-400">
                 <code>&lt;!-- This will not be rendered --&gt;</code>
             </div>
          </div>
       )
    },
    {
       id: 'md-24',
       title: "24. Profile README",
       type: 'read',
       content: (
          <div className="space-y-4">
             <p className="text-gray-300">Special repository named same as your username.</p>
             <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                <li>Displayed on profile top</li>
                <li>Support for GitHub Actions (Dynamic content)</li>
                <li>Great for stats cards</li>
             </ul>
          </div>
       )
    },
    {
       id: 'md-25',
       title: "25. Best Practices",
       type: 'read',
       content: (
          <div className="space-y-4">
             <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
                <h4 className="text-blue-300 font-bold mb-2">Do's</h4>
                <ul className="text-xs text-blue-200 space-y-1">
                   <li>Use a single H1</li>
                   <li>Break up long text with headers</li>
                   <li>Use alt text for images</li>
                </ul>
             </div>
             <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                <h4 className="text-red-300 font-bold mb-2">Dont's</h4>
                <ul className="text-xs text-red-200 space-y-1">
                   <li>Don't abuse bold text</li>
                   <li>Don't use huge images without resizing</li>
                </ul>
             </div>
          </div>
       )
    },
    {
      id: 'md-practice',
      title: "Live Playground",
      type: 'practice',
      practiceMode: 'markdown',
      initialCode: '# Final Challenge\n\nCreate a profile README that uses:\n1. **Bold** and *Italic*\n2. A list of skills\n3. A code block\n4. A table\n\n```js\nconst ready = true;\n```',
      content: <p className="mb-4 text-gray-300">Put it all together! Build your masterpiece.</p>
    }
  ]
};

