import * as d3 from 'd3';
import { useRef, useEffect } from 'react';
import type { InventoryItem } from '../../utils/types';

interface WasteData {
    month: string;
    waste: number;
}

export const WasteTrends = ({ inventory }: { inventory: InventoryItem[] }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        // Mock waste calculation (expired items per month)
        const wasteData: WasteData[] = [
            { month: 'Jan', waste: 5 },
            { month: 'Feb', waste: 3 },
            { month: 'Mar', waste: 8 },
        ];

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = 500 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        const x = d3.scaleBand()
            .domain(wasteData.map(d => d.month))
            .range([0, width])
            .padding(0.2);

        const y = d3.scaleLinear()
            .domain([0, d3.max(wasteData, d => d.waste) || 10])
            .range([height, 0]);

        // Draw bars
        svg.append("g")
            .selectAll("rect")
            .data(wasteData)
            .enter()
            .append("rect")
            .attr("x", d => x(d.month) || 0)
            .attr("y", d => y(d.waste))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.waste))
            .attr("fill", "#ff4d4f");

        // Axes
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));
    }, [inventory]);

    return <svg ref={svgRef} width={500} height={300} />;
};