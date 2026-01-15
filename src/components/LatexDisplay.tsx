import React, { useEffect, useRef } from 'react';
import { renderLatex } from '../services/latexService';

interface LatexDisplayProps {
  expression: string;
  className?: string;
  displayMode?: boolean;
}

const LatexDisplay: React.FC<LatexDisplayProps> = ({ expression, className = '', displayMode = false }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      renderLatex(expression, containerRef.current, { displayMode });
    }
  }, [expression, displayMode]);

  return <span ref={containerRef} className={className} />;
};

export default LatexDisplay;
