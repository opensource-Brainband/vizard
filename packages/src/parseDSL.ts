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
  
}