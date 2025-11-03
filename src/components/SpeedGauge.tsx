import React, { useEffect, useState } from "react"
import { GaugeComponent } from "react-gauge-component"

interface Metrics {
  download: number
  upload: number
  activity: string
  time: string
}

interface Props {
  metrics?: Metrics
}

const SpeedGauge: React.FC = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 480
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  const [value, setValue] = useState(0)
  const [metrics, setMetrics] = useState<Metrics>({
    download: 0,
    upload: 0,
    activity: "Brewing espresso",
    time: "30 seconds",
  })

  const speeds = [
    {
      speed: 0,
      cups: 0,
      name: "Writing a README",
      tooltip: "Decaf mode",
      color: "#4A2C2A", // Start with dark coffee
      shortName: "Decaf",
    },
    {
      speed: 1,
      cups: 1,
      name: "Generating UTs with Cline Code Assist",
      tooltip: "Morning coffee",
      color: "#6B3D2E", // Lighter coffee
      shortName: "Latte",
    },
    {
      speed: 2,
      cups: 2,
      name: "Writing Generative Art with P5.js",
      tooltip: "Mid-morning boost",
      color: "#8B4E31", // Caramel brown
      shortName: "Drip Coffee",
    },
    {
      speed: 3,
      cups: 3,
      name: "Setting up a full Oracle Cloud infrastructure setup",
      tooltip: "Afternoon grind",
      color: "#AC5F34", // Light caramel
      shortName: "Cold Brew",
    },
    {
      speed: 4,
      cups: 4,
      name: "Setting up an Oracle ADB backend",
      tooltip: "Productivity peak",
      color: "#CD7037", // Copper
      shortName: "Quad Shot",
    },
    {
      speed: 5,
      cups: 5,
      name: "Creating a Full Stack service only using Vim",
      tooltip: "Maximum caffeine",
      color: "#EE813A", // Bright copper
      shortName: "Red Eye",
    },
  ]

  useEffect(() => {
    const updateMetrics = () => {
      const newCups = Math.round(Math.random() * 5) // Random value between 0-5 cups

      // Find matching activity based on number of cups
      const currentSpeed = speeds.reduce((prev, curr) =>
        Math.abs(curr.cups - newCups) < Math.abs(prev.cups - newCups)
          ? curr
          : prev
      )

      setMetrics({
        download: newCups,
        upload: 0, // Not used in this context
        activity: currentSpeed.name,
        time: `${currentSpeed.cups} cups`,
      })
      setValue(newCups) // Direct cups value
    }

    // Initial update
    updateMetrics()

    // Update every 3-5 seconds
    const interval = setInterval(() => {
      updateMetrics()
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: isMobile ? "12px" : "20px",
        background: "rgba(2, 20, 43, 0.6)",
        borderRadius: "clamp(16px, 3vw, 24px)",
        boxShadow: "0 4px 24px rgba(10, 26, 42, 0.2)",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Speed Metrics Display */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "8px" : "0",
          justifyContent: "space-between",
          color: "#fff",
          fontFamily: "acumin-pro-condensed, sans-serif",
          background: "rgba(2, 20, 43, 0.8)",
          padding: "clamp(8px, 2vw, 12px) clamp(12px, 3vw, 20px)",
          marginBottom: "clamp(12px, 3vw, 20px)",
          borderRadius: "clamp(8px, 2vw, 12px)",
          backdropFilter: "blur(4px)",
          fontSize: "clamp(14px, 2.5vw, 16px)",
        }}
      >
        <span>Coffee Flow Rate to Dev Activity</span>
        <span
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: isMobile ? "100%" : "50%",
          }}
        >
          Activity: {metrics.activity}
        </span>
      </div>

      <div
        style={{
          width: "100%",
          minHeight: isMobile ? "200px" : "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          padding: "0 10px",
        }}
      >
        <GaugeComponent
          id="gauge-component"
          style={{
            width: isMobile ? "100%" : "600px",
            maxWidth: isMobile ? "300px" : "600px",
            height: "auto",
          }}
          type="semicircle"
          arc={{
            colorArray: speeds.map(s => s.color),
            width: isMobile ? 0.25 : 0.2,
            padding: isMobile ? 0.03 : 0.02,
            subArcs: speeds.slice(1).map((speed, i) => ({
              limit: speed.cups * 20,
              color: speed.color,
            })),
          }}
          pointer={{
            elastic: true,
            animationDelay: 0,
            length: isMobile ? 0.7 : 0.8,
            width: isMobile ? 8 : 10,
          }}
          value={value * 20} // Map 0-5 cups to 0-100 scale
          minValue={0}
          maxValue={100}
          labels={{
            valueLabel: {
              formatTextValue: value => "☕".repeat(Math.round(value / 20)),
              style: {
                fill: "#fff",
                fontSize: isMobile ? "20px" : "28px",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", // Better emoji support
              },
            },
            tickLabels: {
              type: "outer",
              ticks: speeds.map(speed => ({
                value: speed.cups * 20,
                label: speed.shortName,
              })),
              defaultTickValueConfig: {
                formatTextValue: value => {
                  const speed = speeds.find(s => s.cups * 20 === value)
                  console.log(speed)
                  return speed ? speed.shortName : ""
                },
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default SpeedGauge
