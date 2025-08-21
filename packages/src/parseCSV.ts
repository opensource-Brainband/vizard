// Interface for parsed CSV result
export interface ParsedCSV {
    title: string
    type: string
    headers: string[]
    data: Record<string, (string | number)>[]
}

// Parse CSV content and info string to structured data
export default function parseCSV(
    content: string,
    info: string
): ParsedCSV {
    // Extract title and type from info string using regex
    const titleMatch = info.match(/title\s*=\s*(?:"([^"]*)"|'([^']*)')/)
    const typeMatch = info.match(/type\s*=\s*(?:"([^"]*)"|'([^']*)')/)

    const title = titleMatch ? titleMatch[1] : ''
    const type = typeMatch ? typeMatch[1] : ''

    // Split content into lines, trim, and remove empty lines
    const lines = content
        .split('\n')
        .map(l => l.trim())
        .filter(Boolean)

    // At least header and one row required
    if (lines.length < 2) {
        throw new Error('CSV data is empty.')
    }

    // Parse header row
    const headers = lines[0].split(',').map(h => h.trim())
    if (headers.length < 2) {
        console.log(headers)
        throw new Error('CSV header requires at least 2 columns.')
    }

    // Parse data rows
    const data = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim())
        // Map each value to its header
        return headers.reduce((obj, header, idx) => {
            const raw = values[idx]
            // If value can be converted to number, use number. Otherwise, use string
            obj[header] = isNaN(Number(raw)) || raw === '' ? raw : Number(raw)
            return obj
        }, {} as Record<string, string | number>)
    })

    // Return parsed result
    return { title, type, headers, data }
}