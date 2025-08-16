import MarkdownIt from 'markdown-it';
import markdownText from '../docs/test.md?raw';
import parseCSV from '../../../packages/src/parseDSL';

// Initialize MarkdownIt
const md = new MarkdownIt();
// Get the preview element and render the markdown content
const preview = document.getElementById('preview');
if (preview) {
  preview.innerHTML = md.render(markdownText);
}

// --- CSV parsing test ---
// Extract CSV code block from markdownText
const csvBlockMatch = markdownText.match(/```csv([\s\S]*?)```/);
if (csvBlockMatch) {
  const csvContent = csvBlockMatch[1].trim();
  // You can set info string as needed, here is an example
  const infoString = 'title="Test CSV" type="sales"';
  try {
    const parsed = parseCSV(csvContent, infoString);
    console.log('Parsed CSV:', parsed);
  } catch (e) {
    console.error('CSV parsing error:', e);
  }
} else {
  console.warn('No CSV code block found in markdownText.');
}
