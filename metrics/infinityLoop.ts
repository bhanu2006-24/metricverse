
import { GitHubUser } from '../types';

export const infinityLoopSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes dash { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
    .loop-path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: dash 10s linear infinite; }
  </style>
  <rect width="400" height="200" rx="24" fill="#0d1117" stroke="#30363d"/>
  
  <path class="loop-path" d="M100,100 C100,50 150,50 200,100 C250,150 300,150 300,100 C300,50 250,50 200,100 C150,150 100,150 100,100 Z" stroke="#bc8cff" stroke-width="4" fill="none"/>
  
  <text x="200" y="45" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="black" fill="#bc8cff">INFINITE CONTRIBUTIONS</text>
  <text x="200" y="180" text-anchor="middle" font-family="monospace" font-size="12" fill="#8b949e">CYCLE: ACTIVE • TOTAL: ${u.public_repos + u.public_gists}</text>
</svg>`.trim();
};
