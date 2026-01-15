
import { GitHubUser } from '../types';

const frame = (title: string, value: string, color: string) => `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" fill="#050505"/>
  <rect x="2" y="2" width="396" height="146" stroke="${color}" stroke-width="1" stroke-dasharray="10 5"/>
  <path d="M0 0 L40 0 L0 40 Z" fill="${color}"/>
  <path d="M400 150 L360 150 L400 110 Z" fill="${color}"/>
  <text x="30" y="50" font-family="Courier, monospace" font-size="18" font-weight="bold" fill="${color}" style="text-shadow: 0 0 5px ${color}">${title.toUpperCase()}</text>
  <text x="30" y="110" font-family="Courier, monospace" font-size="42" font-weight="bold" fill="#fff" style="text-shadow: 0 0 10px ${color}">${value}</text>
  <line x1="30" y1="65" x2="370" y2="65" stroke="${color}" stroke-width="0.5" opacity="0.5"/>
</svg>`.trim();

export const cyberReposSVG = (u: GitHubUser) => frame("System Repos", u.public_repos.toString(), "#00f3ff");
export const cyberFollowersSVG = (u: GitHubUser) => frame("Neural Net", u.followers.toString(), "#ff00ff");
export const cyberActivitySVG = (u: GitHubUser) => frame("Core Sync", (u.public_repos + u.public_gists).toString(), "#bcff00");
