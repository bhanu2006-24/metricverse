
import { GitHubUser } from '../types';

export const companySVG = (user: GitHubUser): string => {
  const comp = user.company || 'Open Source Enthusiast';
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#79c0ff">Organization</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">Professional Affiliation</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#c9d1d9">${comp}</text>
  <rect x="330" y="70" width="40" height="30" rx="4" stroke="#79c0ff" stroke-width="2" fill="none"/>
  <path d="M340 70 V65 A5 5 0 0 1 360 65 V70" stroke="#79c0ff" stroke-width="2" fill="none"/>
</svg>`.trim();
};
