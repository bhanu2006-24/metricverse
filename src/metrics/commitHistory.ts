
import { GitHubUser } from '../types';

export const commitHistorySVG = (u: GitHubUser): string => {
  const events = u.events_data || [];
  const commitCounts = Array(14).fill(0);
  const today = new Date();

  events.forEach(e => {
    if (e.type === 'PushEvent') {
      const diff = Math.floor((today.getTime() - new Date(e.created_at).getTime()) / (1000 * 3600 * 24));
      if (diff < 14) commitCounts[13 - diff]++;
    }
  });

  const max = Math.max(...commitCounts, 1);
  const points = commitCounts.map((c, i) => {
    const x = 50 + (i * (700 / 13));
    const y = 150 - (c / max) * 80;
    return `${x},${y}`;
  }).join(' ');

  return `
<svg width="800" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="200" rx="24" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="30" y="40" font-family="Inter, sans-serif" font-size="16" font-weight="black" fill="#58a6ff">14-Day Commit Pulse</text>
  
  <path d="M${points}" fill="none" stroke="#58a6ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M50,150 L${points} L750,150 Z" fill="#58a6ff" fill-opacity="0.1"/>
  
  <line x1="50" y1="150" x2="750" y2="150" stroke="#30363d" stroke-width="1"/>
  <text x="50" y="170" font-family="sans-serif" font-size="9" fill="#444">14 Days Ago</text>
  <text x="750" y="170" text-anchor="end" font-family="sans-serif" font-size="9" fill="#444">Today</text>
</svg>`.trim();
};
