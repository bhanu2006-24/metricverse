
import { MetricDefinition } from '../types';

// Expert & Analyst
import { bentoGridSVG } from './bentoGrid';
import { analystProSVG } from './analystPro';
import { blueprintProSVG } from './blueprintPro';
import { isoBoxSVG } from './isoBox';
import { projectTimelineSVG } from './projectTimeline';
import { skillGaugesSVG } from './skillGauges';
import { proAnalyticsSVG } from './proAnalytics';

// Motion & Kinetic
import { techSphereSVG } from './techSphere';
import { dnaProfileSVG } from './dnaProfile';
import { matrixRainSVG } from './matrixRain';
import { devConsoleSVG } from './devConsole';
import { glitchTextSVG } from './glitchText';

// Gamified
import { pixelDanceSVG } from './pixelDance';
import { pingPongSVG } from './pingPong';
import { tetrisMetricsSVG } from './tetrisMetrics';

// Visual & UI
import { iconGridProSVG } from './iconGridPro';
import { badgeWallSVG } from './badgeWall';
import { clockMetricSVG } from './clockMetric';

// Banners
import { readmeHeaderSVG } from './readmeHeader';
import { projectPortfolioSVG } from './projectPortfolio';

export const METRIC_REGISTRY: MetricDefinition[] = [
  // --- ANALYST & EXPERT ---
  { id: 'bento-summary', title: 'Global Bento Summary', category: 'intelligence', generate: bentoGridSVG },
  { id: 'blueprint-pro', title: 'Technical Spec Sheet', category: 'intelligence', generate: blueprintProSVG },
  { id: 'iso-perspective', title: 'Isometric Data Units', category: 'intelligence', generate: isoBoxSVG },
  { id: 'project-timeline', title: 'Horizontal Deployment Flow', category: 'intelligence', generate: projectTimelineSVG },
  { id: 'skill-gauges', title: 'Triple Tech Performance', category: 'intelligence', generate: skillGaugesSVG },
  { id: 'dev-console', title: 'Live Terminal Log', category: 'motion', generate: devConsoleSVG },
  
  // --- KINETIC & FX ---
  { id: 'tech-sphere', title: 'Kinetic Tech Sphere', category: 'motion', generate: techSphereSVG },
  { id: 'matrix-rain', title: 'Legacy Matrix Flow', category: 'motion', generate: matrixRainSVG },
  { id: 'dna-blueprint', title: 'Developer DNA Blueprint', category: 'intelligence', generate: dnaProfileSVG },
  
  // --- GAMIFIED ---
  { id: 'pixel-dance', title: '8-Bit Avatar Dance', category: 'gamified', generate: pixelDanceSVG },
  { id: 'ping-pong', title: 'Physics Ping-Pong', category: 'gamified', generate: pingPongSVG },
  { id: 'tetris-stats', title: 'Block-Tris Statistics', category: 'gamified', generate: tetrisMetricsSVG },
  
  // --- UI & THEMED ---
  { id: 'icon-matrix', title: 'Glowing Plugin Matrix', category: 'themed', generate: iconGridProSVG },
  { id: 'badge-flip', title: 'Interactive Badge Wall', category: 'themed', generate: badgeWallSVG },
  { id: 'clock-age', title: 'Chronos Account Age', category: 'intelligence', generate: clockMetricSVG },
  
  // --- BANNERS ---
  { id: 'readme-hero', title: 'README Hero Component', category: 'banner', generate: readmeHeaderSVG },
  { id: 'portfolio-grid', title: 'Top Project Showcase', category: 'banner', generate: projectPortfolioSVG },
];
