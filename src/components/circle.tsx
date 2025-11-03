import { useRef, useEffect, useState } from "react"
import React from "react"
import * as d3 from "d3"

type DataPoint = [number, number]

const Circles: React.FC = () => {
  const generateDataset = (): DataPoint[] =>
    Array(10)
      .fill(0)
      .map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10])

  const [dataset, setDataset] = useState<DataPoint[]>(generateDataset())
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (ref.current) {
      const svgElement = d3.select(ref.current)
      svgElement
        .selectAll("circle")
        .data(dataset)
        .join("circle")
        .attr("cx", (d: DataPoint) => d[0])
        .attr("cy", (d: DataPoint) => d[1])
        .attr("r", 3)
        .attr("fill", "white")
    }
  }, [dataset])

  return <svg viewBox="0 0 100 50" ref={ref} />
}

export default Circles
