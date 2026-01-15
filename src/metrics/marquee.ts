
import { GitHubUser } from '../types';

export const marqueeSVG = (u: GitHubUser): string => {
  const text = `${u.bio || 'Building awesome things'} • ${u.public_repos} Repositories • ${u.followers} Followers • ${u.location || 'Remote'} • `;
  
  return `
<svg width="800" height="100" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .marquee { animation: scroll 20s linear infinite; }
  </style>
  <rect width="800" height="100" rx="20" fill="#0d1117" stroke="#30363d"/>
  
  <mask id="marquee-mask">
    <rect x="10" y="10" width="780" height="80" fill="white"/>
  </mask>
  
  <g mask="url(#marquee-mask)">
    <g class="marquee">
      <text y="60" font-family="Inter, sans-serif" font-size="32" font-weight="black" fill="#fff" white-space="pre">
        ${text.repeat(4)}
      </text>
    </g>
  </g>
  
  <rect x="0" y="0" width="40" height="100" fill="url(#grad-l)"/>
  <rect x="760" y="0" width="40" height="100" fill="url(#grad-r)"/>
  
  <defs>
    <linearGradient id="grad-l" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#0d1117" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="grad-r" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d1117" stop-opacity="0"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
  </defs>
</svg>`.trim();
};
