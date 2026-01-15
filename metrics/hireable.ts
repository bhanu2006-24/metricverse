
import { GitHubUser } from '../types';

export const hireableSVG = (user: GitHubUser): string => {
  const status = user.hireable ? 'OPEN TO WORK' : 'NOT LOOKING';
  const color = user.hireable ? '#3fb950' : '#8b949e';
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="${color}">Career Status</text>
  <rect x="25" y="90" width="200" height="40" rx="20" fill="${color}" fill-opacity="0.1"/>
  <text x="125" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="${color}">${status}</text>
  <circle cx="350" cy="80" r="10" fill="${color}"/>
  <circle cx="350" cy="80" r="20" stroke="${color}" stroke-width="2" fill="none"/>
</svg>`.trim();
};
