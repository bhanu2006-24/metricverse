
import { GitHubUser } from '../types';

export const badgeWallSVG = (u: GitHubUser): string => {
  const skills = ['React', 'Node', 'Rust', 'Docker', 'AWS', 'NextJS'];
  const colors = ['#61dafb', '#339933', '#dea584', '#2496ed', '#ff9900', '#fff'];
  
  return `
<svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes flip { 0%, 100% { transform: rotateY(0deg); } 50% { transform: rotateY(180deg); } }
    .badge-card { transform-origin: center; animation: flip 4s ease-in-out infinite; }
  </style>
  <rect width="400" height="250" rx="20" fill="#0d1117" stroke="#30363d"/>
  
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#fff">SKILL_BADGE_WALL</text>

  <g transform="translate(45, 80)">
    ${skills.map((s, i) => {
      const x = (i % 3) * 110;
      const y = Math.floor(i / 3) * 70;
      return `
        <g transform="translate(${x + 45}, ${y + 25})">
          <rect class="badge-card" x="-45" y="-25" width="90" height="50" rx="8" fill="#161b22" stroke="${colors[i]}" stroke-width="2" style="animation-delay: ${i * 0.3}s"/>
          <text text-anchor="middle" y="5" font-family="monospace" font-size="10" font-weight="bold" fill="${colors[i]}">${s.toUpperCase()}</text>
        </g>
      `;
    }).join('')}
  </g>
</svg>`.trim();
};
