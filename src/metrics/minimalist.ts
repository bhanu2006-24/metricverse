
import { GitHubUser } from '../types';

export const minimalistSVG = (user: GitHubUser): string => {
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" fill="#fff"/>
  <text x="200" y="70" text-anchor="middle" font-family="Times New Roman, serif" font-size="24" font-weight="normal" fill="#000">${user.name || user.login}</text>
  <line x1="150" y1="85" x2="250" y2="85" stroke="#000" stroke-width="1"/>
  <text x="200" y="110" text-anchor="middle" font-family="Times New Roman, serif" font-size="14" font-weight="normal" fill="#000">${user.public_repos} REPOS / ${user.followers} FOLLOWERS</text>
</svg>`.trim();
};
