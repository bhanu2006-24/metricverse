
import { GitHubUser } from '../types';

export const followersSVG = (user: GitHubUser): string => {
  const { login, followers } = user;
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#d29922">Followers</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">Connection Strength</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#c9d1d9">${followers}</text>
  <circle cx="350" cy="75" r="30" stroke="#d29922" stroke-width="2" fill="none"/>
  <circle cx="350" cy="75" r="15" fill="#d29922"/>
</svg>`.trim();
};
