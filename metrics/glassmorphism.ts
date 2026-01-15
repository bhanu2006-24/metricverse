
import { GitHubUser } from '../types';

const glass = (title: string, value: string, accent: string) => `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect width="400" height="150" fill="#0d1117"/>
  <circle cx="350" cy="30" r="60" fill="${accent}" fill-opacity="0.2"/>
  <circle cx="50" cy="120" r="40" fill="${accent}" fill-opacity="0.1"/>
  <rect x="20" y="20" width="360" height="110" rx="20" fill="url(#g)" stroke="#ffffff" stroke-opacity="0.2"/>
  <text x="50" y="60" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#fff" fill-opacity="0.7">${title}</text>
  <text x="50" y="105" font-family="Arial, sans-serif" font-size="36" font-weight="black" fill="#fff">${value}</text>
</svg>`.trim();

export const glassReposSVG = (u: GitHubUser) => glass("Repositories", u.public_repos.toString(), "#58a6ff");
export const glassFollowersSVG = (u: GitHubUser) => glass("Followers", u.followers.toString(), "#bc8cff");
export const glassGistsSVG = (u: GitHubUser) => glass("Public Gists", u.public_gists.toString(), "#3fb950");
