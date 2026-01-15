
import { GitHubUser } from '../types';

export const tetrisMetricsSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes fall-tetris {
      0% { transform: translateY(-100px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    .piece { animation: fall-tetris 1s ease-in forwards; }
  </style>
  <rect width="400" height="300" rx="24" fill="#000" stroke="#333"/>
  
  <g transform="translate(100, 50)">
    <!-- Well background -->
    <rect width="200" height="220" fill="#0a0a0a" stroke="#222"/>
    
    <!-- L-Piece: Repos -->
    <g class="piece" style="animation-delay: 0.2s" transform="translate(40, 180)">
      <rect width="20" height="20" fill="#ff7b72" stroke="#000"/><rect x="20" width="20" height="20" fill="#ff7b72" stroke="#000"/><rect x="40" width="20" height="20" fill="#ff7b72" stroke="#000"/><rect x="40" y="-20" width="20" height="20" fill="#ff7b72" stroke="#000"/>
      <text x="30" y="15" text-anchor="middle" font-family="monospace" font-size="8" fill="#fff">${u.public_repos}</text>
    </g>

    <!-- T-Piece: Followers -->
    <g class="piece" style="animation-delay: 0.8s" transform="translate(100, 180)">
      <rect width="20" height="20" fill="#bc8cff" stroke="#000"/><rect x="20" width="20" height="20" fill="#bc8cff" stroke="#000"/><rect x="40" width="20" height="20" fill="#bc8cff" stroke="#000"/><rect x="20" y="-20" width="20" height="20" fill="#bc8cff" stroke="#000"/>
      <text x="30" y="15" text-anchor="middle" font-family="monospace" font-size="8" fill="#fff">${u.followers}</text>
    </g>
  </g>

  <text x="320" y="80" font-family="monospace" font-size="12" fill="#fff">NEXT</text>
  <rect x="315" y="90" width="40" height="40" fill="#161b22" stroke="#30363d"/>
  <rect x="325" y="100" width="20" height="20" fill="#3fb950" stroke="#000"/>
  
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="16" font-weight="black" fill="#fff">COMMIT_TRIS</text>
</svg>`.trim();
};
