
import { GitHubUser } from '../types';

export const confettiSVG = (u: GitHubUser): string => {
  const colors = ['#f85149', '#58a6ff', '#3fb950', '#bc8cff', '#f1e05a'];
  return `
<svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes pop {
      0% { transform: scale(0) rotate(0deg); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(var(--tx), var(--ty)) rotate(var(--tr)); opacity: 0; }
    }
    .confetti { animation: pop 2s ease-out infinite; }
  </style>
  <rect width="400" height="250" rx="24" fill="#0d1117" stroke="#30363d"/>
  
  <g transform="translate(200, 125)">
    ${Array.from({length: 50}).map((_, i) => {
      const color = colors[i % colors.length];
      const tx = (Math.random() - 0.5) * 400;
      const ty = (Math.random() - 0.5) * 400;
      const tr = Math.random() * 360;
      return `<rect class="confetti" width="6" height="6" fill="${color}" rx="1" style="--tx: ${tx}px; --ty: ${ty}px; --tr: ${tr}deg; animation-delay: ${Math.random() * 2}s"/>`;
    }).join('')}
    
    <circle r="50" fill="#161b22" stroke="#30363d" stroke-width="2"/>
    <text y="10" text-anchor="middle" font-family="Inter, sans-serif" font-size="32" font-weight="black" fill="#fff">${u.followers}</text>
    <text y="70" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#8b949e">MILESTONE ACHIEVED</text>
  </g>
</svg>`.trim();
};
