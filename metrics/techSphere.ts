
import { GitHubUser } from '../types';

export const techSphereSVG = (u: GitHubUser): string => {
  const techs = ['React', 'NodeJS', 'TypeScript', 'Rust', 'Docker', 'AWS', 'NextJS', 'Python', 'Tailwind', 'Git'];
  return `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes orbit-sphere {
      from { transform: rotate3d(1, 1, 0, 0deg); }
      to { transform: rotate3d(1, 1, 0, 360deg); }
    }
    .sphere-container { transform-style: preserve-3d; animation: orbit-sphere 20s linear infinite; transform-origin: center; }
    .tech-tag { font-family: 'Inter', sans-serif; font-weight: 900; font-size: 12px; fill: #58a6ff; text-shadow: 0 0 5px rgba(88,166,255,0.5); }
  </style>
  <rect width="400" height="400" rx="40" fill="#050505" stroke="#111"/>
  <defs>
    <radialGradient id="sphereGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#161b22" stop-opacity="0"/>
      <stop offset="100%" stop-color="#58a6ff" stop-opacity="0.1"/>
    </radialGradient>
  </defs>
  <circle cx="200" cy="200" r="140" fill="url(#sphereGrad)" stroke="#161b22" stroke-dasharray="5 5"/>
  
  <g class="sphere-container">
    ${techs.map((t, i) => {
      const phi = Math.acos(-1 + (2 * i) / techs.length);
      const theta = Math.sqrt(techs.length * Math.PI) * phi;
      const x = 200 + 120 * Math.sin(phi) * Math.cos(theta);
      const y = 200 + 120 * Math.sin(phi) * Math.sin(theta);
      const z = 120 * Math.cos(phi);
      const scale = (z + 240) / 360;
      return `<text x="${x}" y="${y}" class="tech-tag" opacity="${scale}" style="transform: scale(${scale})">${t.toUpperCase()}</text>`;
    }).join('')}
  </g>
  <text x="30" y="45" font-family="monospace" font-size="14" font-weight="bold" fill="#3fb950">TECH_SPHERE_v1.0</text>
</svg>`.trim();
};
