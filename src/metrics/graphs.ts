
import { GitHubUser } from '../types';

export const activityGraphSVG = (u: GitHubUser): string => {
  const bars = [40, 70, 45, 90, 65, 80, 55];
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="35" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#8b949e">Weekly Pulse</text>
  ${bars.map((h, i) => `
    <rect x="${70 + i * 40}" y="${120 - h}" width="25" height="${h}" rx="4" fill="#3fb950" fill-opacity="${0.3 + i * 0.1}"/>
  `).join('')}
</svg>`.trim();
};

export const circularProgressSVG = (u: GitHubUser): string => {
  const percent = Math.min(100, (u.public_repos / 50) * 100);
  const circ = 2 * Math.PI * 40;
  const offset = circ - (percent / 100) * circ;
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <circle cx="75" cy="75" r="40" stroke="#30363d" stroke-width="8" fill="none"/>
  <circle cx="75" cy="75" r="40" stroke="#238636" stroke-width="8" fill="none" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" transform="rotate(-90 75 75)"/>
  <text x="75" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#fff">${Math.round(percent)}%</text>
  <text x="140" y="65" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#fff">Mastery Goal</text>
  <text x="140" y="90" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">Path to 50 Repos</text>
</svg>`.trim();
};
