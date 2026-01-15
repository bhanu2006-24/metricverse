
/**
 * KaTeX Rendering Service
 * Handles interaction with the global window.katex object.
 */

declare global {
  interface Window {
    katex: any;
  }
}

export const renderLatex = (expression: string, element: HTMLElement, options: { throwOnError?: boolean; displayMode?: boolean } = {}) => {
  if (window.katex && element) {
    try {
      window.katex.render(expression, element, {
        throwOnError: false,
        displayMode: true,
        ...options
      });
    } catch (error) {
      console.error('KaTeX Rendering Error:', error);
      element.innerHTML = `<span class="text-red-500 text-xs">Error rendering equation</span>`;
    }
  } else {
    console.warn('KaTeX is not loaded or element is missing.');
  }
};
