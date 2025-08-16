interface TableData {
	title?: string
	headers: string[]
	data: Record<string, (string | number)>[]
}

export function renderTable(container: HTMLElement, tableData: TableData) {

	const { title, headers, data } = tableData

	if (title) {
		const h3 = document.createElement('h3')
		h3.textContent = title
		container.appendChild(h3)
	}

	const table = document.createElement('table')
	table.style.borderCollapse = 'collapse'
	table.style.width = '100%'

	// Header
	const thead = document.createElement('thead')
	const headerRow = document.createElement('tr')
	headers.forEach(col => {
		const th = document.createElement('th')
		th.textContent = col
		th.style.border = '1px solid #ccc'
		th.style.padding = '4px'
		th.style.backgroundColor = '#f5f5f5'
		headerRow.appendChild(th)

		console.log(col)
	})
	thead.appendChild(headerRow)
	table.appendChild(thead)

	// Body
	const tbody = document.createElement('tbody')
	data.forEach(row => {
		const tr = document.createElement('tr')
		headers.forEach(column => {
			const td = document.createElement('td')
			td.textContent = String(row[column])
			td.style.border = '1px solid #ccc'
			td.style.padding = '4px'
			tr.appendChild(td)
		})
		tbody.appendChild(tr)
	})
	table.appendChild(tbody)

	container.appendChild(table)
}