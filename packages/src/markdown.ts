import MarkdownIt from 'markdown-it'
import parseCSV from './parseCSV';

function generateChartHtml(parsed: any) {
  const id = `chart-${Math.random().toString(36).slice(2)}` // Generate unique chart ID
  const encoded = encodeURIComponent(JSON.stringify(parsed)) // Encode parsed data to safely embed in HTML

  // Create a placeholder <div> with dataset for chart rendering
  // - data-chart: holds encoded chart data
  // - data-chart-type: specifies chart type (e.g. line, bar, table)
  return `<div 
            class="dsl-chart" 
            id="${id}" 
            data-chart="${encoded}" 
            data-chart-type="${parsed.type}">
          </div>`
}