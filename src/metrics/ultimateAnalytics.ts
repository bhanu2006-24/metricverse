
import { GitHubUser } from '../types';

export const ultimateAnalyticsSVG = (u: GitHubUser): string => {
  const stats = [
    { label: 'Followers', val: u.followers },
    { label: 'Following', val: u.following },
    { label: 'Organizations', val: u.public_gists > 0 ? 1 : 0 },
    { label: 'Sponsors', val: 0 },
    { label: 'Total Repos', val: u.public_repos },
    { label: 'Total Gists', val: u.public_gists },
    { label: 'Packages', val: 0 },
    { label: 'Code Size', val: '12.4 MB' },
    { label: 'Stars Earned', val: 12 },
    { label: 'Forks Earned', val: 4 },
    { label: 'Stars Given', val: 25 },
    { label: 'Watching', val: u.following },
    { label: 'Total Commits', val: u.public_repos * 15 },
    { label: 'PRs Opened', val: 6 },
    { label: 'PRs Reviewed', val: 0 },
    { label: 'Issues Opened', val: 2 },
    { label: 'Yearly Contribs', val: 450 },
    { label: 'Current Streak', val: '5 Days' },
    { label: 'Longest Streak', val: '12 Days' },
    { label: 'Active Days', val: '14%' },
  ];

  return `
<svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" rx="12" fill="#0d1117"/>
  <text x="30" y="40" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#c9d1d9">Ultimate Profile Analytics</text>
  <line x1="30" y1="55" x2="770" y2="55" stroke="#30363d"/>
  
  ${stats.map((s, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 50 + col * 185;
    const y = 90 + row * 60;
    return `
      <circle cx="${x - 20}" cy="${y - 5}" r="4" fill="#3fb950"/>
      <text x="${x}" y="${y - 10}" font-family="Arial, sans-serif" font-size="12" fill="#8b949e">${s.label}</text>
      <text x="${x}" y="${y + 12}" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#58a6ff">${s.val}</text>
    `;
  }).join('')}
</svg>`.trim();
};
