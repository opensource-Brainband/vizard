import * as d3 from 'd3'

type Datum = Record<string, string | number>

interface BarChartData {
	title?: string
	headers: string[]
	data: Datum[]
}

export function renderBarChart(container: HTMLElement, chartData: BarChartData) {
	const { title, headers, data } = chartData
	const [x, y] = headers

	// Calculate the maximum length of x data (label)
	const maxXLen = Math.max(...data.map(d => String(d[x]).length));
	// Minimum bar width: 10px, maximum: 180px, 7px per character
	const minBarWidth = Math.max(10, Math.min(7 * maxXLen, 180));
	const margin = { top: 40, right: 20, bottom: 40, left: 50 };
	const width = Math.max(600, margin.left + margin.right + data.length * minBarWidth);
	const height = 250;

	const svg = d3.select(container)
		.append('svg')
		.attr('width', width)
		.attr('height', height);

	// Add gradient definition for bar fill
	const defs = svg.append('defs')
	const gradient = defs.append('linearGradient')
		.attr('id', 'bar-gradient')
		.attr('x1', '0%')
		.attr('y1', '100%')
		.attr('x2', '0%')
		.attr('y2', '0%')
	gradient.append('stop')
		.attr('offset', '0%')
		.attr('stop-color', '#21203C')
		.attr('stop-opacity', 1)
	gradient.append('stop')
		.attr('offset', '100%')
		.attr('stop-color', '#6B6A8A') 
		.attr('stop-opacity', 1)

	// Draw chart title
	if (title) {
		svg.append('text')
			.attr('x', width / 2)
			.attr('y', margin.top / 2)
			.attr('text-anchor', 'middle')
			.attr('font-size', '16px')
			.attr('font-weight', 'bold')
			.text(title)
	}

	const chartWidth = width - margin.left - margin.right;
	const chartHeight = height - margin.top - margin.bottom;

	const chartArea = svg.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`);

	const xDomain = data.map(d => String(d[x]));
	const yMax = d3.max(data, d => Number(d[y])) ?? 100;

	const xScale = d3.scaleBand<string>()
		.domain(xDomain)
		.range([0, chartWidth])
		.padding(0.2);

	const yScale = d3.scaleLinear()
		.domain([0, yMax])
		.range([chartHeight, 0]);

	// Draw X axis
	chartArea.append('g')
		.attr('transform', `translate(0, ${chartHeight})`)
		.call(d3.axisBottom(xScale))

	// Draw Y axis
	chartArea.append('g')
		.call(d3.axisLeft(yScale).ticks(5))

	// Draw X axis label
	chartArea.append('text')
		.attr('x', chartWidth / 2)
		.attr('y', chartHeight + 30)
		.attr('text-anchor', 'middle')
		.attr('font-size', '12px')
		.text(x)

	// Draw Y axis label
	chartArea.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -chartHeight / 2)
		.attr('y', -35)
		.attr('text-anchor', 'middle')
		.attr('font-size', '12px')
		.text(y)

	// Draw bars
	chartArea.selectAll('.bar')
		.data(data)
		.enter()
		.append('rect')
		.attr('class', 'bar')
		.attr('x', d => xScale(String(d[x]))!)
		.attr('y', d => yScale(Number(d[y])))
		.attr('width', xScale.bandwidth())
		.attr('height', d => chartHeight - yScale(Number(d[y])))
	.attr('fill', 'url(#bar-gradient)')
}
