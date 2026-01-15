
import { GitHubUser } from '../types';

export const impactSVG = (user: GitHubUser): string => {
  const score = user.public_repos * 10 + user.followers * 5 + user.public_gists * 2;
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#ff7b72">Impact Score</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="48" font-weight="black" fill="#c9d1d9">${score}</text>
  <path d="M330 110 L350 40 L370 110 L330 70 L370 70 Z" fill="#ff7b72" fill-opacity="0.4"/>
</svg>`.trim();
};
