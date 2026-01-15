
import { GitHubUser } from '../types';

export const readmeHeaderSVG = (u: GitHubUser): string => {
  const name = u.name || u.login;
  return `
<svg width="800" height="320" viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="320" rx="16" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  
  <text x="40" y="70" font-family="Inter, system-ui, sans-serif" font-size="32" font-weight="800" fill="#fff">Hey there! I'm ${name} 👋</text>
  <text x="40" y="105" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="500" fill="#8b949e">${u.bio || 'Building things with code and passion.'}</text>
  
  <line x1="40" y1="135" x2="760" y2="135" stroke="#30363d" stroke-width="1"/>
  
  <g transform="translate(40, 170)">
    <rect width="120" height="32" rx="16" fill="#238636" fill-opacity="0.1" stroke="#238636" stroke-width="1"/>
    <text x="60" y="21" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#3fb950">AVAILABLE</text>
    
    <g transform="translate(140, 0)">
       <rect width="140" height="32" rx="16" fill="#58a6ff" fill-opacity="0.1" stroke="#58a6ff" stroke-width="1"/>
       <text x="70" y="21" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#58a6ff">OPEN SOURCE</text>
    </g>

    <g transform="translate(300, 0)">
       <rect width="160" height="32" rx="16" fill="#bc8cff" fill-opacity="0.1" stroke="#bc8cff" stroke-width="1"/>
       <text x="80" y="21" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#bc8cff">FULLSTACK DEV</text>
    </g>
  </g>

  <text x="40" y="240" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="bold" fill="#c9d1d9">MY MISSION:</text>
  <text x="40" y="265" font-family="Inter, system-ui, sans-serif" font-size="14" fill="#8b949e">"Turning complex problems into elegant, user-centric digital experiences."</text>

  <rect x="700" y="230" width="60" height="60" rx="30" fill="#30363d" fill-opacity="0.2" stroke="#30363d"/>
  <circle cx="730" cy="260" r="15" fill="#58a6ff" fill-opacity="0.3"/>
</svg>`.trim();
};
