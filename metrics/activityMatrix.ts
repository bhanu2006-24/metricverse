
import { GitHubUser } from '../types';

export const activityMatrixSVG = (u: GitHubUser): string => {
  const activity = u.public_repos + u.followers + (u.events_data?.length || 0);
  
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" rx="24" fill="#000" stroke="#111"/>
  <style>
    @keyframes fall { from { transform: translateY(-100%); } to { transform: translateY(100%); } }
    .matrix-col { animation: fall 3s linear infinite; }
  </style>
  
  <mask id="matrix-mask">
    <rect width="400" height="200" fill="white"/>
  </mask>

  <g mask="url(#matrix-mask)" opacity="0.15">
    ${Array.from({length: 20}).map((_, i) => `
      <text x="${i * 20}" y="0" font-family="monospace" font-size="8" fill="#0f0" class="matrix-col" style="animation-delay: ${Math.random() * 3}s">
        ${Array.from({length: 20}).map(() => Math.round(Math.random())).join('<tspan x="'+(i*20)+'" dy="10">')}${'</tspan>'.repeat(20)}
      </text>
    `).join('')}
  </g>

  <rect x="50" y="60" width="300" height="80" rx="16" fill="#000" stroke="#0f0" stroke-width="1" fill-opacity="0.8"/>
  <text x="200" y="90" text-anchor="middle" font-family="monospace" font-size="12" fill="#0f0" opacity="0.8">SYSTEM_ACTIVITY_CORE</text>
  <text x="200" y="125" text-anchor="middle" font-family="monospace" font-size="32" font-weight="bold" fill="#fff">${activity}</text>
</svg>`.trim();
};
