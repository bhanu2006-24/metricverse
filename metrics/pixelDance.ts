
import { GitHubUser } from '../types';

export const pixelDanceSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes dance { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-10px) scale(1.1); } }
    .dancer { animation: dance 0.5s ease-in-out infinite; }
  </style>
  <rect width="400" height="200" rx="20" fill="#000" stroke="#333"/>
  
  <g class="dancer" transform="translate(200, 100)">
     <!-- Simple Pixel Character -->
     <rect x="-15" y="-30" width="30" height="30" fill="#f1e05a"/> <!-- Head -->
     <rect x="-20" y="0" width="40" height="40" fill="#58a6ff"/> <!-- Body -->
     <rect x="-25" y="5" width="10" height="20" fill="#58a6ff"/> <!-- Left Arm -->
     <rect x="15" y="5" width="10" height="20" fill="#58a6ff"/> <!-- Right Arm -->
     <rect x="-15" y="40" width="10" height="15" fill="#333"/> <!-- Leg -->
     <rect x="5" y="40" width="10" height="15" fill="#333"/> <!-- Leg -->
  </g>

  <text x="200" y="45" text-anchor="middle" font-family="'Courier New', monospace" font-size="14" font-weight="bold" fill="#3fb950">CELEBRATING: ${u.public_repos} REPOS</text>
  <rect x="50" y="170" width="300" height="10" fill="#111" rx="5"/>
  <rect x="50" y="170" width="220" height="10" fill="#3fb950" rx="5"/>
</svg>`.trim();
};
