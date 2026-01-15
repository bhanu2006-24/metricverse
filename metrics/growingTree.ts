
import { GitHubUser } from '../types';

export const growingTreeSVG = (u: GitHubUser): string => {
  const branches = Math.min(24, u.public_repos);
  return `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes grow { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
    .branch { stroke-dasharray: 100; stroke-dashoffset: 100; animation: grow 2s ease-out forwards; }
  </style>
  <rect width="400" height="400" rx="24" fill="#0d1117" stroke="#30363d"/>
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#3fb950">REPO GARDEN</text>
  
  <g transform="translate(200, 350)">
    <!-- Trunk -->
    <line x1="0" y1="0" x2="0" y2="-80" stroke="#795548" stroke-width="8" stroke-linecap="round"/>
    
    <!-- Branches -->
    ${Array.from({length: branches}).map((_, i) => {
      const angle = (i * (180 / branches)) - 90;
      const length = 40 + Math.random() * 60;
      const x2 = length * Math.cos(angle * Math.PI / 180);
      const y2 = -80 + length * Math.sin(angle * Math.PI / 180);
      return `
        <line class="branch" x1="0" y1="-80" x2="${x2}" y2="${y2}" stroke="#3fb950" stroke-width="2" stroke-linecap="round" style="animation-delay: ${i * 0.1}s"/>
        <circle cx="${x2}" cy="${y2}" r="3" fill="#238636" opacity="0.6">
           <animate attributeName="r" values="0;3" dur="0.5s" begin="${i * 0.1 + 1}s" fill="freeze" />
        </circle>
      `;
    }).join('')}
  </g>
  <text x="200" y="380" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#444">${u.public_repos} Repositories Seeded</text>
</svg>`.trim();
};
