import MarkdownIt from 'markdown-it';
import markdownText from '../docs/test.md?raw';
import parseCSV from '../../../packages/src/parseDSL';
import { renderBarChart } from '../../../packages/src/render/renderBarChart';
import { renderLineChart } from '../../../packages/src/render/renderLineChart';
import { renderTable } from '../../../packages/src/render/renderTable';

// Initialize MarkdownIt
const md = new MarkdownIt();
// Get the preview element and render the markdown content
const preview = document.getElementById('preview');
if (preview) {
  preview.innerHTML = md.render(markdownText);
}


// --- CSV parsing & rendering ---
// Extract CSV code block from markdownText
const csvBlockMatch = markdownText.match(/```csv([\s\S]*?)```/);
if (csvBlockMatch) {
  const csvContent = csvBlockMatch[1].trim();
  // You can change the type in infoString to test bar, line, or table
  const infoString = 'title="Test CSV" type="bar"';
  try {
    const parsed = parseCSV(csvContent, infoString);
    console.log('Parsed CSV:', parsed);

    // Render chart or table
    // Make sure there is a <div id="csv-render"></div> in your HTML
    const csvRenderContainer = document.getElementById('csv-render');
    if (csvRenderContainer) {
      // Clear previous content
      csvRenderContainer.innerHTML = '';
      switch (parsed.type) {
        case 'bar':
          renderBarChart(csvRenderContainer, parsed);
          break;
        case 'line':
          renderLineChart(csvRenderContainer, parsed);
          break;
        case 'table':
          renderTable(csvRenderContainer, parsed);
          break;
        default:
          csvRenderContainer.innerText = `Unknown chart type: ${parsed.type}`;
      }
    } else {
      console.warn('No chart container found (id="csv-render").');
    }
  } catch (e) {
    console.error('CSV parsing error:', e);
  }
} else {
  console.warn('No CSV code block found in markdownText.');
}