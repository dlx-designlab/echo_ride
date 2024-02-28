import React, { useEffect, useRef} from 'react';
import * as d3 from 'd3';
import './Bubbles.css';

// @ts-ignore
const OldBubbles = ({ data }) => {
    const svgRef = useRef();

    const baseRadius = Math.min(window.innerHeight, window.innerWidth) / 30;
    const radiusFactor = 0.75;

    let svg, sim;

    const getRadius = (radius) => {
        return baseRadius + Math.abs(radius) * baseRadius;
    }
    const updateScene = () => {
        svg =
            d3.select("body")
                .append("svg")
                .attr("width", window.innerWidth)
                .attr("height", window.innerHeight)

        svg.append("rect")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("fill", "black");

        sim = d3.forceSimulation(data)
            .force("y", d3.forceY((d)=>d.y))
            .force("collide", d3.forceCollide((d) => getRadius(d.radius) + 1))

        sim.on('tick', function () {
            svg
                .selectAll("circle")
                .attr('cx', d => d.x)
                .attr('cy', d => d.y)
            svg
                .selectAll("image")
                .attr('x', d => d.x - getRadius(d.radius) * 0.75)
                .attr('y', d => d.y - getRadius(d.radius) * 0.75)
        });
    }

    function draw_circles() {
        if(!data) return;
        if(!svg) updateScene();
        d3.select("svg").remove();

        const circles = svg
            .selectAll("circle")
            .data(data)
            .join("circle")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .style('fill', (d) => {return d.radius >= 0 ? d.color : "#343434" })
            .attr("r", (d) => getRadius(d.radius))
            .attr('stroke', (d) =>  d.color )
            .attr('stroke-width', 2)

        const images = svg.selectAll('image')
            .data(data)
            .enter()
            .append('image')
            .attr('xlink:href', (d)=>d.image) // Replace with the actual path to your image
            .attr('x', d => d.x - getRadius(d.radius) * radiusFactor) // Adjust the positioning based on your requirements
            .attr('y', d => d.y - getRadius(d.radius) * radiusFactor)
            .attr('width', d => 2 * getRadius(d.radius) * radiusFactor)
            .attr('height', d => 2 * getRadius(d.radius) * radiusFactor);
    }

    useEffect(() => {

        if (!data) return;

        draw_circles();

        sim.nodes(data).alpha(1).restart();
    },[data]);

    // @ts-ignore
    return <div style={{background: 'black'}}>
        <svg ref={svgRef} width="100%" height="100%"/>
    </div>
};

export default OldBubbles;
