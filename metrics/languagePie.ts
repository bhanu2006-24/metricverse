
import { GitHubUser } from '../types';

export const languagePieSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" rx="20" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="40" font-family="Inter, sans-serif" font-size="20" font-weight="bold" fill="#bc8cff">Language Mastery</text>
  
  <g transform="translate(150, 160)">
    <circle r="70" fill="#161b22"/>
    <path d="M0,0 L0,-70 A70,70 0 0,1 60,-35 Z" fill="#3178c6"/>
    <path d="M0,0 L60,-35 A70,70 0 0,1 40,55 Z" fill="#f1e05a"/>
    <path d="M0,0 L40,55 A70,70 0 0,1 -60,35 Z" fill="#3572a5"/>
    <path d="M0,0 L-60,35 A70,70 0 0,1 -40,-55 Z" fill="#e34c26"/>
    <path d="M0,0 L-40,-55 A70,70 0 0,1 0,-70 Z" fill="#dea584"/>
  </g>

  <g transform="translate(280, 100)">
    <rect y="0" width="10" height="10" rx="2" fill="#3178c6"/>
    <text x="18" y="10" font-family="sans-serif" font-size="10" fill="#8b949e">TypeScript</text>
    
    <rect y="25" width="10" height="10" rx="2" fill="#f1e05a"/>
    <text x="18" y="35" font-family="sans-serif" font-size="10" fill="#8b949e">JavaScript</text>
    
    <rect y="50" width="10" height="10" rx="2" fill="#3572a5"/>
    <text x="18" y="60" font-family="sans-serif" font-size="10" fill="#8b949e">Python</text>
    
    <rect y="75" width="10" height="10" rx="2" fill="#e34c26"/>
    <text x="18" y="85" font-family="sans-serif" font-size="10" fill="#8b949e">HTML</text>
  </g>
</svg>`.trim();
};
