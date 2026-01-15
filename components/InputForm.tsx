
import React, { useState } from 'react';

interface InputFormProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSearch, isLoading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mb-12">
      <div className="relative group">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub Username (e.g. octocat)"
          className="w-full bg-[#0d1117] border-2 border-[#30363d] focus:border-[#58a6ff] text-[#c9d1d9] rounded-xl px-6 py-4 outline-none transition-all text-lg shadow-xl"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !username.trim()}
          className="absolute right-2 top-2 bottom-2 bg-[#238636] hover:bg-[#2ea043] disabled:bg-[#238636]/50 disabled:cursor-not-allowed text-white font-semibold px-6 rounded-lg transition-colors flex items-center gap-2"
        >
          {isLoading ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            'Generate'
          )}
        </button>
      </div>
      <p className="mt-3 text-center text-[#8b949e] text-sm">
        Instantly create SVG badges for your profile readme
      </p>
    </form>
  );
};

export default InputForm;
