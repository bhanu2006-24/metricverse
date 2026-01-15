
import { GitHubUser } from '../types';

export const devConsoleSVG = (u: GitHubUser): string => {
  const lines = [
    `Initializing Protocol... DONE`,
    `Fetching @${u.login.toUpperCase()} context...`,
    `Analyzing ${u.public_repos} repositories...`,
    `Syncing ${u.followers} active connections...`,
    `Compiling developer DNA... SUCCESS`,
    `Generating unique artifacts...`,
    `Ready for deployment.`
  ];

  return `
<svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes scroll-text {
      0% { transform: translateY(0); }
      100% { transform: translateY(-160px); }
    }
    .console-line { font-family: 'Courier New', monospace; font-size: 11px; fill: #3fb950; }
  </style>
  <rect width="400" height="250" rx="20" fill="#010101" stroke="#333"/>
  <rect width="400" height="30" rx="0" fill="#161b22"/>
  <circle cx="20" cy="15" r="4" fill="#f85149"/>
  <circle cx="35" cy="15" r="4" fill="#f1e05a"/>
  <circle cx="50" cy="15" r="4" fill="#3fb950"/>
  <text x="200" y="20" text-anchor="middle" font-family="monospace" font-size="10" fill="#8b949e">bash — 80x24</text>
  
  <g transform="translate(20, 60)">
    <g style="animation: scroll-text 10s linear infinite">
      ${lines.concat(lines).map((line, i) => `
        <text class="console-line" x="0" y="${i * 20}">[OK] ${line}</text>
      `).join('')}
    </g>
  </g>
</svg>`.trim();
};
