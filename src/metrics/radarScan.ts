
import { GitHubUser } from '../types';

export const radarScanSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes blink { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
    .scanner { transform-origin: center; animation: scan 4s linear infinite; }
    .target { animation: blink 1s infinite; }
  </style>
  <rect width="400" height="400" rx="24" fill="#050a05" stroke="#003300"/>
  
  <circle cx="200" cy="200" r="150" stroke="#004400" stroke-width="1" fill="none"/>
  <circle cx="200" cy="200" r="100" stroke="#004400" stroke-width="1" fill="none"/>
  <circle cx="200" cy="200" r="50" stroke="#004400" stroke-width="1" fill="none"/>
  
  <line x1="200" y1="50" x2="200" y2="350" stroke="#004400"/>
  <line x1="50" y1="200" x2="350" y2="200" stroke="#004400"/>

  <g class="scanner">
    <path d="M200 200 L200 50 A150 150 0 0 1 350 200 Z" fill="url(#sweep)"/>
  </g>
  
  <circle class="target" cx="280" cy="150" r="4" fill="#00ff00"/>
  <text x="290" y="145" font-family="monospace" font-size="8" fill="#00ff00">REPO_DETECTED</text>

  <text x="30" y="45" font-family="monospace" font-size="14" font-weight="bold" fill="#00ff00">RADAR_INIT</text>
  
  <defs>
    <linearGradient id="sweep" x1="200" y1="200" x2="350" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#00ff00" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#00ff00" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>`.trim();
};
