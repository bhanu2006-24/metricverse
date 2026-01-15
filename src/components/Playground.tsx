import React, { useState, useEffect, useRef } from 'react';
import { executeCode } from '../services/pistonService';
import { renderLatex } from '../services/latexService';
import { renderMarkdownToJsx } from '../services/markdownService';

interface PlaygroundProps {
  mode: 'markdown' | 'math' | 'bash';
  initialCode?: string;
  className?: string;
}

const Playground: React.FC<PlaygroundProps> = ({ mode, initialCode = '', className = '' }) => {
  const [input, setInput] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode === 'math' && outputRef.current) {
      renderLatex(input, outputRef.current);
    }
  }, [input, mode]);

  const handleRun = async () => {
    if (mode === 'bash') {
      setIsRunning(true);
      setOutput('Running...');
      const result = await executeCode('bash', input);
      setOutput(result);
      setIsRunning(false);
    }
  };

  const renderPreview = () => {
    if (mode === 'markdown') {
      const tokens = renderMarkdownToJsx(input);
      return (
        <div className="prose prose-invert prose-sm max-w-none p-4">
           {tokens.map((token) => {
             switch (token.type) {
               case 'h1': return <h1 key={token.key} className="text-xl font-bold mb-2 pb-1 border-b">{token.content}</h1>;
               case 'h2': return <h2 key={token.key} className="text-lg font-bold mb-2">{token.content}</h2>;
               case 'li': return <li key={token.key} className="ml-4 list-disc">{token.content}</li>;
               case 'strong': return <p key={token.key}><strong>{token.content}</strong></p>;
               case 'code': return <div key={token.key} className="bg-gray-800 p-2 rounded text-xs font-mono my-2 border border-gray-700">{token.content}</div>;
               case 'br': return <br key={token.key}/>;
               default: return <p key={token.key} className="min-h-[1em]">{token.content}</p>;
             }
           })}
        </div>
      );
    }
    if (mode === 'math') {
      return <div className="p-8 flex items-center justify-center text-xl text-white" ref={outputRef}></div>;
    }
    if (mode === 'bash') {
      return (
        <pre className="p-4 font-mono text-xs text-green-400 whitespace-pre-wrap h-full overflow-auto">
          {output || (isRunning ? 'Running...' : '> Output will appear here')}
        </pre>
      );
    }
    return null;
  };

  return (
    <div className={`flex flex-col h-[500px] border border-github-border rounded-xl overflow-hidden bg-github-dark ${className}`}>
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-github-border bg-github-border/30">
           <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
             {mode} Playground
           </span>
           {mode === 'bash' && (
             <button 
               onClick={handleRun}
               disabled={isRunning}
               className="bg-green-600 hover:bg-green-500 text-white text-xs px-3 py-1 rounded transition-colors disabled:opacity-50 flex items-center gap-1"
             >
               {isRunning ? 'Running...' : '▶ Run'}
             </button>
           )}
        </div>

        {/* Editor & Preview Split */}
        <div className="flex-1 flex flex-col md:flex-row">
           <div className="flex-1 border-b md:border-b-0 md:border-r border-github-border relative group">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-full bg-[#0d1117] p-4 font-mono text-sm text-gray-300 outline-none resize-none focus:bg-[#161b22] transition-colors"
                spellCheck={false}
              />
              <div className="absolute top-2 right-2 text-[10px] text-gray-600 pointer-events-none group-hover:text-gray-500 transition-colors">Editable</div>
           </div>
           <div className="flex-1 bg-black/20 overflow-auto">
             {renderPreview()}
           </div>
        </div>
    </div>
  );
};


export default Playground;
