
import { GitHubUser } from '../types';

export const reposSVG = (user: GitHubUser): string => {
  const { login, public_repos } = user;
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#58a6ff">Public Repositories</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">User: @${login}</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#c9d1d9">${public_repos}</text>
  <path d="M340 100 L360 80 L380 100" stroke="#238636" stroke-width="3" fill="none"/>
</svg>`.trim();
};
