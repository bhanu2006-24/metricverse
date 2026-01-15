
import { GitHubUser } from '../types';

export const commitsSVG = (user: GitHubUser): string => {
  const { public_repos, public_gists } = user;
  const activity = public_repos + public_gists;
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#ff7b72">Public Activity</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">Repos + Gists</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#c9d1d9">${activity}</text>
  <path d="M330 110 L340 80 L350 100 L360 60 L370 90" stroke="#ff7b72" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`.trim();
};
