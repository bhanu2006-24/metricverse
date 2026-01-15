
import { GitHubUser } from '../types';

export const streakStatsSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" rx="16" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  
  <text x="30" y="45" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="bold" fill="#f85149">ACTIVITY STREAK</text>
  
  <g transform="translate(30, 80)">
    <text y="0" font-family="Inter, sans-serif" font-size="12" fill="#8b949e">CURRENT STREAK</text>
    <text y="35" font-family="Inter, sans-serif" font-size="32" font-weight="black" fill="#fff">5 Days</text>
    <path d="M120 10 L130 0 L140 10 L130 20 Z" fill="#f85149"/>
  </g>

  <g transform="translate(220, 80)">
    <text y="0" font-family="Inter, sans-serif" font-size="12" fill="#8b949e">LONGEST STREAK</text>
    <text y="35" font-family="Inter, sans-serif" font-size="32" font-weight="black" fill="#58a6ff">14 Days</text>
  </g>

  <rect x="30" y="150" width="340" height="6" rx="3" fill="#161b22"/>
  <rect x="30" y="150" width="120" height="6" rx="3" fill="#f85149"/>
  <text x="30" y="180" font-family="Inter, sans-serif" font-size="10" fill="#444">Last commit: Yesterday at 4:20 PM</text>
</svg>`.trim();
};
