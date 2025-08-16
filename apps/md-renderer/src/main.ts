import MarkdownIt from 'markdown-it';
import markdownText from '../docs/test.md?raw';

// Initialize MarkdownIt
const md = new MarkdownIt();
// Get the preview element and render the markdown content
const preview = document.getElementById('preview');
if (preview) {
  preview.innerHTML = md.render(markdownText);
}
