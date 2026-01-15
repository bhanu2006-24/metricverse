
import { GitHubUser } from '../types';

export const ratioSVG = (user: GitHubUser): string => {
  const ratio = (user.followers / (user.following || 1)).toFixed(2);
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#ff7b72">Influence Ratio</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">Followers / Following</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#c9d1d9">${ratio}x</text>
  <line x1="330" y1="110" x2="370" y2="50" stroke="#ff7b72" stroke-width="4" stroke-linecap="round"/>
</svg>`.trim();
};
