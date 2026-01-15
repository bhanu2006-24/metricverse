
import { GitHubUser } from '../types';

export const securitySVG = (user: GitHubUser): string => {
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <path d="M200 30 L260 50 V100 L200 130 L140 100 V50 Z" fill="#3fb950" fill-opacity="0.1" stroke="#3fb950" stroke-width="2"/>
  <text x="200" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#3fb950">VERIFIED</text>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#c9d1d9">Account Shield</text>
</svg>`.trim();
};
