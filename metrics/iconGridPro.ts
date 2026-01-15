
import { GitHubUser } from '../types';

export const iconGridProSVG = (u: GitHubUser): string => {
  const icons = ['⚛️', '🚀', '🔥', '⚡', '🛠️', '📦', '💻', '🌐', '📱', '🎮', '🎨', '⚙️'];
  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes icon-glow {
      0%, 100% { filter: drop-shadow(0 0 5px rgba(88,166,255,0)); }
      50% { filter: drop-shadow(0 0 15px rgba(88,166,255,0.8)); }
    }
    .grid-icon { animation: icon-glow 3s infinite; }
  </style>
  <rect width="400" height="300" rx="32" fill="#0d1117" stroke="#30363d"/>
  
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="900" fill="#fff">ENVIRONMENT_MATRIX</text>
  
  <g transform="translate(50, 80)">
    ${icons.map((icon, i) => {
      const x = (i % 4) * 85;
      const y = Math.floor(i / 4) * 70;
      return `
        <g transform="translate(${x}, ${y})">
          <rect width="60" height="60" rx="15" fill="#161b22" stroke="#30363d"/>
          <text x="30" y="40" text-anchor="middle" font-size="28" class="grid-icon" style="animation-delay: ${i * 0.2}s">${icon}</text>
        </g>
      `;
    }).join('')}
  </g>
  <text x="200" y="280" text-anchor="middle" font-family="monospace" font-size="10" fill="#444">LOADED: ${icons.length} ACTIVE_PLUGINS</text>
</svg>`.trim();
};
