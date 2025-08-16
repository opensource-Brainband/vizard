import * as d3 from 'd3'

type Datum = Record<string, string | number>

interface LineChartData {
  title?: string
  headers: string[]
  data: Record<string, (string | number)>[]
}

export function renderLineChart(container: HTMLElement, chartData: LineChartData) {
  const { title, headers, data } = chartData
  const [x, y] = headers

  // Calculate the maximum length of x data (label)
  const maxXLen = Math.max(...data.map(d => String(d[x]).length));
  // Minimum point gap: 10px, maximum: 180px, 7px per character
  const minPointGap = Math.max(10, Math.min(7 * maxXLen, 180));
  const margin = { top: 40, right: 20, bottom: 40, left: 50 };
  const width = Math.max(600, margin.left + margin.right + data.length * minPointGap);
  const height = 250;

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

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

  const xScale = d3.scalePoint<string>()
    .domain(xDomain)
    .range([0, chartWidth])
    .padding(0.5);

  const yScale = d3.scaleLinear()
    .domain([0, yMax])
    .range([chartHeight, 0]);

  // Draw X axis
  const xAxis = d3.axisBottom(xScale)

  chartArea.append('g')
    .attr('transform', `translate(0, ${chartHeight})`)
    .call(xAxis)

  // Draw Y axis
  const yAxis = d3.axisLeft(yScale).ticks(5)

  chartArea.append('g')
    .call(yAxis)

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

  const line = d3.line<Datum>()
    .x(d => xScale(String(d[x]))!)
    .y(d => yScale(Number(d[y])))

  chartArea.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#21203C')
    .attr('stroke-width', 2)
    .attr('d', line)

  chartArea.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(String(d[x]))!)
    .attr('cy', d => yScale(Number(d[y])))
    .attr('r', 3)
    .attr('fill', '#00C2A0')
}