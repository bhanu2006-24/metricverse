
import { GitHubUser } from '../types';

export const workflowAnalyticsSVG = (u: GitHubUser): string => {
  const events = u.events_data || [];
  const counts = { Commits: 0, PRs: 0, Issues: 0, Other: 0 };
  
  events.forEach(e => {
    if (e.type === 'PushEvent') counts.Commits++;
    else if (e.type === 'PullRequestEvent') counts.PRs++;
    else if (e.type === 'IssuesEvent') counts.Issues++;
    else counts.Other++;
  });

  const total = counts.Commits + counts.PRs + counts.Issues + counts.Other || 1;
  const bars = [
    { label: 'Pushing', count: counts.Commits, color: '#238636' },
    { label: 'PR Action', count: counts.PRs, color: '#8957e5' },
    { label: 'Triage', count: counts.Issues, color: '#d29922' },
  ];

  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" rx="24" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="20" font-weight="black" fill="#fff">Workflow DNA</text>
  
  <g transform="translate(30, 80)">
    ${bars.map((b, i) => {
      const width = (b.count / total) * 340;
      const y = i * 65;
      return `
        <text y="${y}" font-family="sans-serif" font-size="12" font-weight="bold" fill="#8b949e">${b.label.toUpperCase()}</text>
        <text x="340" y="${y}" text-anchor="end" font-family="monospace" font-size="12" fill="#fff">${b.count}</text>
        <rect y="${y + 10}" width="340" height="12" rx="6" fill="#161b22"/>
        <rect y="${y + 10}" width="${Math.max(10, width)}" height="12" rx="6" fill="${b.color}">
           <animate attributeName="width" from="0" to="${Math.max(10, width)}" dur="1s" fill="freeze" />
        </rect>
      `;
    }).join('')}
  </g>
  <text x="30" y="270" font-family="sans-serif" font-size="10" fill="#444">Based on latest 100 public events</text>
</svg>`.trim();
};
