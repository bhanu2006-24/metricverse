
import { GitHubUser } from '../types';

export const matrixRainSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes fall { from { transform: translateY(-100%); } to { transform: translateY(100%); } }
    .m-char { animation: fall 4s linear infinite; font-family: monospace; font-size: 9px; fill: #0f0; }
  </style>
  <rect width="400" height="250" rx="20" fill="#000"/>
  
  <g opacity="0.4">
    ${Array.from({length: 20}).map((_, i) => `
      <text x="${i * 20}" y="0" class="m-char" style="animation-delay: ${Math.random() * 4}s">
        ${Array.from({length: 25}).map(() => "0123456789ABCDEF"[Math.floor(Math.random()*16)]).join('<tspan x="'+(i*20)+'" dy="10">')}${'</tspan>'.repeat(25)}
      </text>
    `).join('')}
  </g>

  <rect x="50" y="100" width="300" height="60" rx="10" fill="#000" stroke="#0f0" stroke-width="2" fill-opacity="0.8"/>
  <text x="200" y="130" text-anchor="middle" font-family="monospace" font-size="24" font-weight="900" fill="#fff" style="text-shadow: 0 0 10px #0f0">@${u.login.toUpperCase()}</text>
  <text x="200" y="150" text-anchor="middle" font-family="monospace" font-size="10" fill="#0f0">DECRYPT_AUTH: GRANTED</text>
</svg>`.trim();
};
