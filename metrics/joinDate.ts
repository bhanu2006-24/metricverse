
import { GitHubUser } from '../types';

export const joinDateSVG = (user: GitHubUser): string => {
  const { created_at } = user;
  const date = new Date(created_at).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#3fb950">Journey Started</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">GitHub Member Since</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#c9d1d9">${date}</text>
  <path d="M330 60 L370 60 L370 100 L330 100 Z" stroke="#3fb950" stroke-width="2" fill="none"/>
  <line x1="330" y1="70" x2="370" y2="70" stroke="#3fb950" stroke-width="2"/>
</svg>`.trim();
};
