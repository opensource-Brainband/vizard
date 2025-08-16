import MarkdownIt from 'markdown-it';
import markdownText from '../docs/test.md?raw';

const md = new MarkdownIt();
const preview = document.getElementById('preview');
if (preview) {
  preview.innerHTML = md.render(markdownText);
}
