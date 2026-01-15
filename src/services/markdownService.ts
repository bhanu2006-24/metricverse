
/**
 * Simple Markdown parser service.
 * In a real app, this would wrap a library like 'marked' or 'remark'.
 * For now, we extract the manual parsing logic to keep components clean.
 */

export const renderMarkdownToJsx = (markdown: string): { type: string; content: string; key: number }[] => {
  return markdown.split('\n').map((line, i) => {
    if (line.startsWith('# ')) return { type: 'h1', content: line.slice(2), key: i };
    if (line.startsWith('## ')) return { type: 'h2', content: line.slice(3), key: i };
    if (line.startsWith('- ')) return { type: 'li', content: line.slice(2), key: i };
    if (line.startsWith('**') && line.endsWith('**')) return { type: 'strong', content: line.slice(2, -2), key: i };
    if (line.trim().startsWith('```')) return { type: 'code', content: 'Code Block', key: i }; // simplified for now
    if (line.trim() === '') return { type: 'br', content: '', key: i };
    return { type: 'p', content: line, key: i };
  });
};
