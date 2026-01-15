
import { GitHubUser } from '../types';

export const isoBoxSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" rx="32" fill="#0d1117" stroke="#30363d"/>
  
  <g transform="translate(200, 150)">
    <!-- Isometric Cube 1 -->
    <g transform="translate(-80, 50)">
      <path d="M0 0 L30 -15 L60 0 L30 15 Z" fill="#58a6ff" /> <!-- Top -->
      <path d="M0 0 L0 40 L30 55 L30 15 Z" fill="#2188ff" /> <!-- Left -->
      <path d="M30 15 L30 55 L60 40 L60 0 Z" fill="#0366d6" /> <!-- Right -->
      <text x="30" y="35" text-anchor="middle" font-family="monospace" font-size="10" fill="#fff">CORE</text>
    </g>

    <!-- Isometric Cube 2 -->
    <g transform="translate(20, 20)">
      <path d="M0 0 L30 -15 L60 0 L30 15 Z" fill="#3fb950" />
      <path d="M0 0 L0 60 L30 75 L30 15 Z" fill="#2ea043" />
      <path d="M30 15 L30 75 L60 60 L60 0 Z" fill="#238636" />
      <text x="30" y="45" text-anchor="middle" font-family="monospace" font-size="10" fill="#fff">DATA</text>
    </g>

    <!-- Isometric Cube 3 -->
    <g transform="translate(-30, -40)">
      <path d="M0 0 L30 -15 L60 0 L30 15 Z" fill="#bc8cff" />
      <path d="M0 0 L0 30 L30 45 L30 15 Z" fill="#a371f7" />
      <path d="M30 15 L30 45 L60 30 L60 0 Z" fill="#8957e5" />
      <text x="30" y="30" text-anchor="middle" font-family="monospace" font-size="10" fill="#fff">SYNC</text>
    </g>
  </g>

  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#fff">ISO_PERSPECTIVE_STATS</text>
  <text x="30" y="370" font-family="monospace" font-size="12" fill="#8b949e">ALLOCATED_UNITS: ${u.public_repos + u.followers}</text>
</svg>`.trim();
};
