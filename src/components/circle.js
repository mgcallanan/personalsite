import { useRef, useEffect, useInterval, useState } from 'react'
import React from 'react'
import * as d3 from 'd3'



export default function Circles () {
    const generateDataset = () => (
        Array(10).fill(0).map(() => ([
          Math.random() * 80 + 10,
          Math.random() * 35 + 10,
        ]))
    )

    const [dataset, setDataset] = useState(
        generateDataset()
    )
    const ref = useRef()
    
    useEffect(() => {
        const svgElement = d3.select(ref.current)
        svgElement.selectAll("circle")
        .data(dataset)
        .join("circle")
            .attr("cx", d => d[0])
            .attr("cy", d => d[1])
            .attr("r",  3)
            .attr("fill", "white")
    }, [dataset])
    
    /*useInterval(() => {
        const newDataset = generateDataset()
        setDataset(newDataset)
    }, 2000)*/
    
    return (
        <svg
        viewBox="0 0 100 50"
        ref={ref}
        />
    )
}

