
import { GitHubUser } from '../types';

export const spinningCubeSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes spin-cube {
      0% { transform: rotateY(0deg) rotateX(0deg); }
      100% { transform: rotateY(360deg) rotateX(360deg); }
    }
    .cube-container { perspective: 800px; transform-style: preserve-3d; }
    .cube { 
      transform-origin: 200px 150px; 
      animation: spin-cube 10s linear infinite; 
      transform-style: preserve-3d;
    }
    .face { position: absolute; width: 100px; height: 100px; background: rgba(88, 166, 255, 0.2); border: 2px solid #58a6ff; display: flex; align-items: center; justify-content: center; color: white; font-family: sans-serif; }
  </style>
  <rect width="400" height="300" rx="24" fill="#0d1117" stroke="#30363d"/>
  
  <!-- Since SVG doesn't support 3D transforms directly like CSS on DIVs, we simulate the perspective -->
  <g class="cube-container">
    <g transform="translate(200, 150)">
      <path d="M-50,-50 L50,-50 L50,50 L-50,50 Z" fill="#58a6ff" fill-opacity="0.1" stroke="#58a6ff" stroke-width="2">
        <animateTransform attributeName="transform" type="rotate" values="0;360" dur="10s" repeatCount="indefinite" />
      </path>
      <path d="M-30,-30 L30,-30 L30,30 L-30,30 Z" fill="#bc8cff" fill-opacity="0.2" stroke="#bc8cff" stroke-width="1">
        <animateTransform attributeName="transform" type="rotate" values="360;0" dur="5s" repeatCount="indefinite" />
      </path>
    </g>
  </g>

  <text x="200" y="240" text-anchor="middle" font-family="monospace" font-size="12" fill="#fff" font-weight="bold">DIMENSIONAL_STATS</text>
  <text x="200" y="260" text-anchor="middle" font-family="monospace" font-size="10" fill="#8b949e">R:${u.public_repos} | F:${u.followers} | G:${u.public_gists}</text>
  
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#bc8cff">The Cube</text>
</svg>`.trim();
};
