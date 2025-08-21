import MarkdownIt from 'markdown-it'
import parseCSV from './parseCSV';

const chartType: string[] = ["table", "bar", "line"]

export function createMarkdownRenderer(): MarkdownIt {
  const md = new MarkdownIt()
  const defaultFence = md.renderer.rules.fence!

  // Override the default `fence` rule to handle custom CSV blocks
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const info = token.info.trim()
    const [langName] = info.split(/\s+/)

    // Handle custom CSV code blocks
    if (langName === 'csv') {
      try {
        const parsed = parseCSV(token.content, info)
        console.log('Parsed CSV:', parsed);
        
        // Return both the original code block and a chart/table placeholder
        if (chartType.includes(parsed.type)) {
          return `${generateChartHtml(parsed)}`
        }
        
        // Render the original code block (for reference/debugging)
        return `<pre><code class="language-csv">${md.utils.escapeHtml(token.content)}</code></pre>`
      } catch (e) {
        console.error('CSV parsing error:', e);
      }
    }

    // Fallback to default Markdown-It behavior
    return defaultFence(tokens, idx, options, env, self)
  }

  return md
}

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