
import { GitHubUser } from '../types';

export const bentoGridSVG = (u: GitHubUser): string => {
  return `
<svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" rx="32" fill="#010409"/>
  
  <!-- Panel 1: Identity -->
  <rect x="20" y="20" width="370" height="170" rx="24" fill="#0d1117" stroke="#30363d"/>
  <text x="45" y="60" font-family="Inter, sans-serif" font-size="12" font-weight="900" fill="#8b949e" letter-spacing="2">IDENTITY_CORE</text>
  <text x="45" y="105" font-family="Inter, sans-serif" font-size="32" font-weight="900" fill="#fff">@${u.login.toUpperCase()}</text>
  <text x="45" y="135" font-family="Inter, sans-serif" font-size="14" fill="#58a6ff">${u.location || 'Distributed Node'}</text>

  <!-- Panel 2: Stats (Small) -->
  <rect x="410" y="20" width="180" height="170" rx="24" fill="#0d1117" stroke="#30363d"/>
  <text x="435" y="60" font-family="Inter, sans-serif" font-size="12" font-weight="900" fill="#8b949e">FOLLOWERS</text>
  <text x="435" y="120" font-family="Inter, sans-serif" font-size="48" font-weight="900" fill="#3fb950">${u.followers}</text>

  <!-- Panel 3: Stats (Small) -->
  <rect x="610" y="20" width="170" height="170" rx="24" fill="#0d1117" stroke="#30363d"/>
  <text x="635" y="60" font-family="Inter, sans-serif" font-size="12" font-weight="900" fill="#8b949e">REPOS</text>
  <text x="635" y="120" font-family="Inter, sans-serif" font-size="48" font-weight="900" fill="#bc8cff">${u.public_repos}</text>

  <!-- Panel 4: Large Activity -->
  <rect x="20" y="210" width="760" height="170" rx="24" fill="#0d1117" stroke="#30363d"/>
  <text x="45" y="250" font-family="Inter, sans-serif" font-size="12" font-weight="900" fill="#8b949e">ACTIVITY_PULSE_90D</text>
  <path d="M45 330 Q150 250 250 320 T450 280 T650 340 T735 300" stroke="#58a6ff" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="735" cy="300" r="5" fill="#58a6ff">
    <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" />
  </circle>
</svg>`.trim();
};
