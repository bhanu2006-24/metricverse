
import { GitHubUser } from '../types';

export const clockMetricSVG = (u: GitHubUser): string => {
  const years = new Date().getFullYear() - new Date(u.created_at).getFullYear();
  const rotation = (years / 10) * 360; // Scaling 10 years to full circle
  
  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes tick { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .second-hand { transform-origin: center; animation: tick 60s linear infinite; }
    .hour-hand { transform-origin: center; transform: rotate(${rotation}deg); }
  </style>
  <rect width="400" height="300" rx="24" fill="#0d1117" stroke="#30363d"/>
  
  <g transform="translate(200, 150)">
    <circle r="80" stroke="#30363d" stroke-width="8" fill="#161b22"/>
    <circle r="5" fill="#fff"/>
    
    <!-- Hour Hand (Years) -->
    <line class="hour-hand" x1="0" y1="0" x2="0" y2="-50" stroke="#58a6ff" stroke-width="6" stroke-linecap="round"/>
    
    <!-- Second Hand (Animation) -->
    <line class="second-hand" x1="0" y1="0" x2="0" y2="-70" stroke="#f85149" stroke-width="2" stroke-linecap="round"/>

    ${[0, 90, 180, 270].map(deg => `
      <line x1="0" y1="-70" x2="0" y2="-80" stroke="#8b949e" stroke-width="2" transform="rotate(${deg})"/>
    `).join('')}
  </g>

  <text x="200" y="45" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#fff">TIME_IN_UNIVERSE</text>
  <text x="200" y="270" text-anchor="middle" font-family="monospace" font-size="14" fill="#58a6ff">${years} YEARS COMPLETED</text>
</svg>`.trim();
};
