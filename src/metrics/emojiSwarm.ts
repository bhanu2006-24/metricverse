
import { GitHubUser } from '../types';

export const emojiSwarmSVG = (u: GitHubUser): string => {
  const count = Math.min(40, u.followers);
  const emojis = ['🚀', '💻', '✨', '🔥', '⭐', '❤️'];
  
  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes float-emoji {
      0% { transform: translate(0, 0); }
      50% { transform: translate(var(--x), var(--y)); }
      100% { transform: translate(0, 0); }
    }
    .emoji { animation: float-emoji 3s ease-in-out infinite; font-size: 20px; }
  </style>
  <rect width="400" height="300" rx="24" fill="#0d1117" stroke="#30363d"/>
  
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#f1e05a">FOLLOWER SWARM</text>
  
  <g transform="translate(200, 150)">
    ${Array.from({length: count}).map((_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const r = 50 + Math.random() * 80;
      const tx = Math.cos(angle) * r;
      const ty = Math.sin(angle) * r;
      const emoji = emojis[i % emojis.length];
      return `
        <text class="emoji" x="${tx}" y="${ty}" style="--x: ${Math.random() * 20 - 10}px; --y: ${Math.random() * 20 - 10}px; animation-delay: ${Math.random() * 2}s">${emoji}</text>
      `;
    }).join('')}
    
    <circle cx="0" cy="0" r="40" fill="#161b22" stroke="#30363d"/>
    <text y="8" text-anchor="middle" font-family="Inter, sans-serif" font-size="24" font-weight="black" fill="#fff">${u.followers}</text>
  </g>
</svg>`.trim();
};
