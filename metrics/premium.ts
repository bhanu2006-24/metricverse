
import { GitHubUser } from '../types';

const premium = (tier: 'Gold' | 'Silver' | 'Bronze', value: string, color: string) => `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="p-${tier}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color}" />
      <stop offset="50%" stop-color="#fff" />
      <stop offset="100%" stop-color="${color}" />
    </linearGradient>
  </defs>
  <rect width="400" height="150" rx="15" fill="#1c1c1c" stroke="url(#p-${tier})" stroke-width="2"/>
  <text x="25" y="45" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="url(#p-${tier})">${tier} Edition</text>
  <text x="200" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="black" fill="#fff">${value}</text>
  <text x="200" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#888">AUTHENTIC GITHUB METRIC</text>
</svg>`.trim();

export const goldCardSVG = (u: GitHubUser) => premium("Gold", u.public_repos.toString(), "#D4AF37");
export const silverCardSVG = (u: GitHubUser) => premium("Silver", u.followers.toString(), "#C0C0C0");
export const bronzeCardSVG = (u: GitHubUser) => premium("Bronze", u.public_gists.toString(), "#CD7F32");
