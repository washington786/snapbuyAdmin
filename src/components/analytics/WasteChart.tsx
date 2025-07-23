import * as d3 from 'd3';
import { useRef, useEffect } from 'react';
import type { InventoryItem } from '../../utils/types';

export const ExpiryChart = ({ data }: { data: InventoryItem[] }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = 500 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // X-axis: Days until expiry
        const x = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([0, width])
            .padding(0.2);

        // Y-axis: Stock count
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.stock) || 100])
            .range([height, 0]);

        // Bars
        svg.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.name) || 0)
            .attr('y', d => y(d.stock))
            .attr('width', x.bandwidth())
            .attr('height', d => height - y(d.stock))
            .attr('fill', d => d.stock < 10 ? '#ff4d4f' : '#52c41a');

        // Axes
        svg.append('g').call(d3.axisLeft(y));
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end');

    }, [data]);

    return <svg ref={svgRef} />;
};