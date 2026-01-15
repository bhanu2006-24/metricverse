
import { GitHubUser } from '../types';

export const rocketLaunchSVG = (u: GitHubUser): string => {
  const activity = u.public_repos + (u.events_data?.length || 0);
  const altitude = Math.min(100, activity);
  
  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes shake { 0%, 100% { transform: translate(0,0); } 25% { transform: translate(1px, 1px); } 75% { transform: translate(-1px, -1px); } }
    @keyframes flicker { 0% { opacity: 0.8; } 100% { opacity: 1; transform: scale(1.1); } }
    .rocket { animation: shake 0.1s infinite; }
    .flame { animation: flicker 0.05s infinite alternate; }
  </style>
  <rect width="400" height="300" rx="24" fill="#050505" stroke="#111"/>
  
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#fff">MISSION: SHIP IT</text>
  <text x="30" y="65" font-family="monospace" font-size="10" fill="#555">FUEL_LEVEL: ${activity}%</text>

  <g transform="translate(200, ${250 - (altitude * 1.5)})">
    <g class="rocket">
      <path d="M-15 0 Q0 -40 15 0 L10 20 L-10 20 Z" fill="#fff"/>
      <path d="M-10 20 L-15 30 L-5 25 Z" fill="#ff7b72"/>
      <path d="M10 20 L15 30 L5 25 Z" fill="#ff7b72"/>
      <circle cx="0" cy="-5" r="4" fill="#58a6ff"/>
      
      <g class="flame" transform="translate(0, 25)">
        <path d="M-5 0 Q0 20 5 0 Z" fill="#ffa657"/>
        <path d="M-3 0 Q0 10 3 0 Z" fill="#f1e05a"/>
      </g>
    </g>
  </g>

  <rect x="360" y="80" width="10" height="150" rx="5" fill="#111"/>
  <rect x="360" y="${230 - (altitude * 1.5)}" width="10" height="${altitude * 1.5}" rx="5" fill="#3fb950"/>
</svg>`.trim();
};
