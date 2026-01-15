
import { GitHubUser } from '../types';

export const contributionGridSVG = (u: GitHubUser): string => {
  const events = u.events_data || [];
  const activityMap: { [key: string]: number } = {};
  
  // Aggregate events by day
  events.forEach(event => {
    const date = event.created_at.split('T')[0];
    activityMap[date] = (activityMap[date] || 0) + 1;
  });

  const cells = [];
  const today = new Date();
  for (let i = 0; i < 52 * 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - (52 * 7 - i));
    const dateStr = d.toISOString().split('T')[0];
    const count = activityMap[dateStr] || 0;
    
    // Level scaling: 0, 1-2, 3-5, 6-9, 10+
    let level = 0;
    if (count > 0) level = 1;
    if (count > 3) level = 2;
    if (count > 6) level = 3;
    if (count > 10) level = 4;
    cells.push(level);
  }
  
  const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
  
  return `
<svg width="800" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="200" rx="24" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="30" y="40" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="#58a6ff">Real-Time Activity Heatmap (Last 90 Days)</text>
  <text x="770" y="40" text-anchor="end" font-family="monospace" font-size="10" fill="#8b949e">DATA SYNC: ACTIVE</text>
  
  <g transform="translate(40, 65)">
    ${cells.map((level, i) => {
      const x = Math.floor(i / 7) * 14;
      const y = (i % 7) * 14;
      return `<rect x="${x}" y="${y}" width="10" height="10" rx="2.5" fill="${colors[level]}" stroke="${level > 0 ? 'rgba(255,255,255,0.05)' : 'none'}"/>`;
    }).join('')}
  </g>
  
  <g transform="translate(650, 175)">
    <text x="-40" y="10" font-family="sans-serif" font-size="9" fill="#8b949e">Less</text>
    ${colors.map((c, i) => `<rect x="${i * 15}" y="0" width="10" height="10" rx="2" fill="${c}"/>`).join('')}
    <text x="80" y="10" font-family="sans-serif" font-size="9" fill="#8b949e">More</text>
  </g>
</svg>`.trim();
};
