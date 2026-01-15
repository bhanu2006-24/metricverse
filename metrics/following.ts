
import { GitHubUser } from '../types';

export const followingSVG = (user: GitHubUser): string => {
  const { login, following } = user;
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#f85149">Following</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">Network Reach</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#c9d1d9">${following}</text>
  <rect x="330" y="60" width="40" height="40" stroke="#f85149" stroke-width="2" fill="none" transform="rotate(45 350 80)"/>
</svg>`.trim();
};
