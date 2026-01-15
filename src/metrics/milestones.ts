
import { GitHubUser } from '../types';

export const repoMilestoneSVG = (user: GitHubUser): string => {
  const count = user.public_repos;
  let label = "Starter";
  let color = "#8b949e";
  if (count > 100) { label = "Legend"; color = "#f85149"; }
  else if (count > 50) { label = "Architect"; color = "#bc8cff"; }
  else if (count > 20) { label = "Builder"; color = "#58a6ff"; }
  
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <circle cx="200" cy="60" r="40" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="2"/>
  <text x="200" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="${color}">${count}</text>
  <text x="200" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#c9d1d9">${label.toUpperCase()} REPO RANK</text>
</svg>`.trim();
};
