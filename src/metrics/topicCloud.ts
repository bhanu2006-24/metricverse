
import { GitHubUser } from '../types';

export const topicCloudSVG = (u: GitHubUser): string => {
  const repos = u.repos_data || [];
  const topicsMap: { [key: string]: number } = {};
  
  repos.forEach(repo => {
    (repo.topics || []).forEach((topic: string) => {
      topicsMap[topic] = (topicsMap[topic] || 0) + 1;
    });
  });

  const sortedTopics = Object.entries(topicsMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);

  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" rx="24" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#3fb950">Expertise Cloud</text>
  
  <g transform="translate(30, 80)">
    ${sortedTopics.map(([name, count], i) => {
      const x = (i % 3) * 120;
      const y = Math.floor(i / 3) * 45;
      const opacity = Math.max(0.3, 1 - (i * 0.05));
      return `
        <rect x="${x}" y="${y}" width="${name.length * 8 + 20}" height="30" rx="15" fill="#161b22" stroke="#30363d" />
        <text x="${x + 10}" y="${y + 20}" font-family="monospace" font-size="10" font-weight="bold" fill="#3fb950" opacity="${opacity}">${name.toUpperCase()}</text>
      `;
    }).join('')}
  </g>
  ${sortedTopics.length === 0 ? '<text x="200" y="160" text-anchor="middle" fill="#444" font-family="sans-serif">Add topics to your repos to populate this cloud</text>' : ''}
</svg>`.trim();
};
