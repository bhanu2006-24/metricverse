
import { GitHubUser } from '../types';

export const fireworksSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes burst {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(3); opacity: 0; }
    }
    .particle { transform-origin: center; animation: burst 1.5s ease-out infinite; }
  </style>
  <rect width="400" height="300" rx="24" fill="#050510"/>
  
  <g transform="translate(200, 120)">
    ${Array.from({length: 12}).map((_, i) => `
      <g transform="rotate(${i * 30})">
        <line class="particle" y1="-10" y2="-40" stroke="#f1e05a" stroke-width="2" style="animation-delay: ${i * 0.1}s"/>
      </g>
    `).join('')}
    <text y="10" text-anchor="middle" font-family="Inter, sans-serif" font-size="42" font-weight="black" fill="#fff" style="text-shadow: 0 0 20px #f1e05a">${u.public_repos + u.followers}</text>
    <text y="40" text-anchor="middle" font-family="monospace" font-size="10" fill="#f1e05a">TOTAL_LEGACY_SCORE</text>
  </g>

  <g transform="translate(100, 220)">
    ${Array.from({length: 8}).map((_, i) => `
      <g transform="rotate(${i * 45})">
        <line class="particle" y1="-5" y2="-20" stroke="#bc8cff" stroke-width="1" style="animation-delay: ${0.5 + i * 0.1}s"/>
      </g>
    `).join('')}
  </g>
</svg>`.trim();
};
