import markdownText from '../docs/test.md?raw';
import { createMarkdownRenderer } from '../../../packages/src/markdown';
import { renderBarChart } from '../../../packages/src/render/renderBarChart';
import { renderLineChart } from '../../../packages/src/render/renderLineChart';
import { renderTable } from '../../../packages/src/render/renderTable';

const md = createMarkdownRenderer()

window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('preview')
  if (app) {
    // Render the Markdown content into the preview element
    app.innerHTML = md.render(markdownText)

    // After Markdown rendering, start rendering DSL charts
    setTimeout(() => {
      // Select all elements marked as DSL charts
      document.querySelectorAll<HTMLElement>('.dsl-chart').forEach((el) => {
        const encoded = el.getAttribute('data-chart')
        const chartType = el.getAttribute('data-chart-type')
        if (!encoded) return

        // Decode and parse the chart data
        const chartData = JSON.parse(decodeURIComponent(encoded))
        
        // Render chart based on chart type
        switch (chartType) {
          case 'line':
            renderLineChart(el, chartData)
            break
          case 'bar':
            renderBarChart(el, chartData)
            break
          default:
            renderTable(el, chartData)
            break
        }
      })
    }, 0)
  }
})
