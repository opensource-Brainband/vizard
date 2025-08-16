export interface ParsedCSV {
  title: string
  type: string
  headers: string[]
  data: Record<string, (string | number)>[]
}

export default function parseCSV(
  content: string,
  info: string
): ParsedCSV {
  // Extract title and type from info
  const titleMatch = info.match(/title="([^"]+)"/)
  const typeMatch = info.match(/type="([^"]+)"/)

  const title = titleMatch ? titleMatch[1] : ''
  const type = typeMatch ? typeMatch[1] : ''

  const lines = content
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)

  if (lines.length < 2) {
    throw new Error('CSV data is empty.')
  }

  const headers = lines[0].split(',').map(h => h.trim())
  if (headers.length < 2) {
    throw new Error('CSV header requires at least 2 columns.')
  }

  const data = lines.slice(1).map(line => {
  const values = line.split(',').map(v => v.trim())
  
  return headers.reduce((obj, header, idx) => {
    const raw = values[idx]
  // If value can be converted to number, use number. otherwise, use string
  obj[header] = isNaN(Number(raw)) || raw === '' ? raw : Number(raw)
    return obj
  }, {} as Record<string, string | number>)
  })

  return { title, type, headers, data }
}