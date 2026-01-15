
import { GitHubUser } from '../types';

export const blueprintProSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes draw-line { from { stroke-dashoffset: 400; } to { stroke-dashoffset: 0; } }
    .bp-line { stroke: #58a6ff; stroke-width: 1; stroke-dasharray: 400; animation: draw-line 3s ease-out forwards; }
    .bp-grid { stroke: rgba(88,166,255,0.1); stroke-width: 0.5; }
    .bp-text { font-family: 'Courier New', monospace; font-size: 10px; fill: #58a6ff; }
  </style>
  <rect width="400" height="400" rx="0" fill="#002b36"/>
  
  <!-- Grid -->
  <g class="bp-grid">
    ${Array.from({length: 20}).map((_, i) => `
      <line x1="${i * 20}" y1="0" x2="${i * 20}" y2="400"/>
      <line x1="0" y1="${i * 20}" x2="400" y2="${i * 20}"/>
    `).join('')}
  </g>

  <!-- Technical Drawing -->
  <g transform="translate(100, 100)">
    <rect class="bp-line" x="0" y="0" width="200" height="200" fill="none"/>
    <circle class="bp-line" cx="100" cy="100" r="80" fill="none"/>
    <line class="bp-line" x1="0" y1="0" x2="200" y2="200"/>
    <line class="bp-line" x1="200" y1="0" x2="0" y2="200"/>
    
    <text x="105" y="95" class="bp-text" font-weight="bold">ID: ${u.login.toUpperCase()}</text>
    <text x="105" y="115" class="bp-text">REPOS: ${u.public_repos}</text>
    <text x="105" y="130" class="bp-text">FANS: ${u.followers}</text>
  </g>

  <text x="20" y="30" class="bp-text" font-size="14" font-weight="bold">SPEC_SHEET: v4.2.0</text>
  <text x="20" y="380" class="bp-text" opacity="0.5">METRICVERSE_ENGINEERING_DEPT</text>
  <path d="M350 350 L380 350 L380 380 L350 380 Z" stroke="#58a6ff" fill="none"/>
  <line x1="350" y1="350" x2="380" y2="380" stroke="#58a6ff"/>
</svg>`.trim();
};
