import React, { useRef, useEffect, useState } from "react"

// Configuration
const CONFIG = {
  width: 900,
  height: 500,
  margins: {
    top: 80,
    right: 120,
    bottom: 80,
    left: 120,
  },
  nodeRadius: {
    category: 45,
    me: 40,
    sub: 6,
  },
  maxActivePackets: 3,
  fps: 30,
  packetSpeed: 0.01,
}

interface Node {
  id: string
  label: string
  type: "category" | "sub" | "me"
  category?: string
  x: number
  y: number
  next?: string
}

interface Packet {
  id: number
  x: number
  y: number
  sourceNode: Node
  targetNode: Node
  progress: number
  dropped?: boolean
  droppedAt?: { x: number; y: number }
}

// Data structure
const categories = [
  {
    id: "interests",
    label: "Interests",
    subs: ["Hiking", "Biking", "Women's Sports", "Cooking"],
  },
  {
    id: "languages",
    label: "Languages",
    subs: ["Python", "Go", "C", "Java", "SQL", "TypeScript"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    subs: ["React", "Flask", "D3.js", "Terraform"],
  },
  {
    id: "cloud",
    label: "Cloud & Tools",
    subs: ["OCI", "Docker", "Git", "Figma"],
  },
  {
    id: "professional",
    label: "Professional",
    subs: ["Agile", "Atlassian", "Technical Writing"],
  },
]

const COLORS = {
  categories: {
    languages: "#0098ff", // Professional blue for programming languages
    frameworks: "#00bcd4", // Cyan for frameworks
    cloud: "#29b6f6", // Light blue for cloud & tools
    professional: "#039be5", // Darker blue for professional skills
    interests: "#0288d1", // Deep blue for personal interests
  },
  me: "#01579b", // Deepest blue for central node
  edge: "rgba(41, 182, 246, 0.2)", // Transparent light blue for edges
  packet: "#29b6f6", // Light blue for packets
  background: "#02142b", // Dark navy background
  text: "#ffffff",
  categoryText: "#ffffff",
  subText: "rgba(255, 255, 255, 0.9)",
  tooltip: {
    background: "rgba(2, 20, 43, 0.95)",
    border: "#29b6f6",
    text: "#ffffff",
  },
} as const

// Helper function to get category color
const getCategoryColor = (node: Node): string => {
  if (node.type === "category") {
    return (
      COLORS.categories[node.id as keyof typeof COLORS.categories] ||
      COLORS.categories.interests
    )
  }
  if (node.category) {
    return (
      COLORS.categories[node.category as keyof typeof COLORS.categories] ||
      COLORS.categories.interests
    )
  }
  return COLORS.me
}

const NetworkingGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [metrics, setMetrics] = useState({
    rtt: 42,
    loss: 5,
    packetsDropped: 0,
    totalPackets: 0,
  })
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null)
  const [nodes, setNodes] = useState<Node[]>([])
  const [packets, setPackets] = useState<Packet[]>([])
  const requestRef = useRef<number>(0)
  const lastFrameTimeRef = useRef<number>(0)
  const FPS = 30 // Limit to 30 FPS for better performance
  const frameInterval = 1000 / FPS
  const [showGameTip, setShowGameTip] = useState(true)
  const WIDTH = 900
  const HEIGHT = 500 // Standard height
  const CONTENT_MARGIN = 60 // Margin for content
  const EFFECTIVE_HEIGHT = HEIGHT - 2 * CONTENT_MARGIN // Available height for the graph
  const MAX_ACTIVE_PACKETS = 3 // Limit maximum simultaneous packets

  const handlePacketClick = (e: React.MouseEvent, packet: Packet) => {
    if (!packet.dropped) {
      setPackets(prev =>
        prev.map(p =>
          p.id === packet.id
            ? { ...p, dropped: true, droppedAt: { x: p.x, y: p.y } }
            : p
        )
      )
      setMetrics(prev => ({
        ...prev,
        packetsDropped: prev.packetsDropped + 1,
        loss: Math.round(((prev.packetsDropped + 1) / prev.totalPackets) * 100),
      }))
      // Create a ripple effect at click position
      const ripple = document.createElement("div")
      ripple.className = "packet-ripple"
      ripple.style.left = `${e.clientX}px`
      ripple.style.top = `${e.clientY}px`
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 1000)
    }
  }

  useEffect(() => {
    // Calculate node positions with better spacing
    const newNodes: Node[] = []
    const LEFT_MARGIN = 140 // More space for category labels
    const RIGHT_MARGIN = WIDTH - 140
    const MIN_VERTICAL_SPACING = 100 // Minimum space between categories
    const VERTICAL_SPACING = Math.max(
      MIN_VERTICAL_SPACING,
      (HEIGHT - 120) / categories.length
    )
    const TOP_MARGIN =
      CONTENT_MARGIN +
      (HEIGHT -
        2 * CONTENT_MARGIN -
        VERTICAL_SPACING * (categories.length - 1)) /
        2 // Center vertically with margin

    // Create nodes in a left-to-right layout with chained paths
    categories.forEach((cat, i) => {
      const y = TOP_MARGIN + VERTICAL_SPACING * (i + 1)
      const totalNodesInChain = cat.subs.length + 2 // category + subs + me
      const horizontalSpacing =
        (RIGHT_MARGIN - LEFT_MARGIN) / (totalNodesInChain - 1)

      // Add category node as start of chain
      newNodes.push({
        id: cat.id,
        label: cat.label,
        type: "category",
        x: LEFT_MARGIN,
        y,
        next: `${cat.id}-0`, // Link to first sub
      })

      // Add sub nodes in a chain
      cat.subs.forEach((sub, j) => {
        const x = LEFT_MARGIN + horizontalSpacing * (j + 1)
        newNodes.push({
          id: `${cat.id}-${j}`,
          label: sub,
          type: "sub",
          category: cat.id,
          x,
          y,
          next: j === cat.subs.length - 1 ? "me" : `${cat.id}-${j + 1}`, // Link to next sub or me
        })
      })
    })

    // Add "Me" node on the right
    newNodes.push({
      id: "me",
      label: "Mary",
      type: "me",
      x: RIGHT_MARGIN,
      y: HEIGHT / 2, // Center vertically
    })

    setNodes(newNodes)

    // Create a packet that travels along a category chain
    const createRandomPacket = () => {
      // Don't create new packets if we're at the limit
      if (packets.length >= MAX_ACTIVE_PACKETS) return

      const categoryNodes = newNodes.filter(n => n.type === "category")
      const categoryNode =
        categoryNodes[Math.floor(Math.random() * categoryNodes.length)]

      if (categoryNode) {
        setPackets(prev => {
          // Double-check the limit before adding
          if (prev.length >= MAX_ACTIVE_PACKETS) return prev

          return [
            ...prev,
            {
              id: Date.now(),
              x: categoryNode.x,
              y: categoryNode.y,
              currentNode: categoryNode,
              path: [categoryNode],
              progress: 0,
              dropped: false,
            },
          ]
        })
        setMetrics(prev => ({
          ...prev,
          totalPackets: prev.totalPackets + 1,
        }))
      }
    }

    // Animation loop for packets with frame rate limiting
    const animatePackets = (timestamp: number) => {
      if (!lastFrameTimeRef.current) lastFrameTimeRef.current = timestamp

      const elapsed = timestamp - lastFrameTimeRef.current

      if (elapsed > frameInterval) {
        lastFrameTimeRef.current = timestamp - (elapsed % frameInterval)

        setPackets(prevPackets => {
          const updatedPackets = prevPackets
            .map(packet => {
              if (packet.dropped) return packet

              let progress = packet.progress + 0.01 // Slightly faster to compensate for lower frame rate

              if (progress >= 1) {
                const currentNode = packet.currentNode
                if (currentNode.next) {
                  const nextNode = nodes.find(n => n.id === currentNode.next)
                  if (nextNode) {
                    return {
                      ...packet,
                      x: currentNode.x,
                      y: currentNode.y,
                      currentNode: nextNode,
                      path: [...packet.path, nextNode],
                      progress: 0,
                    }
                  }
                }
                return null
              }

              const currentNode = packet.currentNode
              const nextNode = nodes.find(n => n.id === currentNode.next)

              if (nextNode) {
                const x =
                  currentNode.x + (nextNode.x - currentNode.x) * progress
                const y =
                  currentNode.y + (nextNode.y - currentNode.y) * progress
                return { ...packet, x, y, progress }
              }

              return packet
            })
            .filter(p => {
              if (!p) return false
              if (p.dropped) {
                return Date.now() - p.id < 1000 // Reduced to 1 second for cleanup
              }
              return true
            }) as Packet[]

          return updatedPackets
        })
      }

      requestRef.current = requestAnimationFrame(animatePackets)
    }

    // Set up random packet creation
    const createRandomPacketWithDelay = () => {
      if (document.hidden) return // Don't animate if page is not visible
      createRandomPacket()

      // Schedule next packet with random delay between 3-7 seconds
      const delay = 3000 + Math.random() * 4000
      setTimeout(createRandomPacketWithDelay, delay)
    }

    // Start animations
    requestRef.current = requestAnimationFrame(animatePackets)
    createRandomPacketWithDelay()

    // Create initial packets more quickly
    createRandomPacket()
    setTimeout(createRandomPacket, 800)
    setTimeout(createRandomPacket, 1600)

    // Create new packets at a moderate pace
    const createPacketInterval = setInterval(() => {
      if (!document.hidden && packets.length < MAX_ACTIVE_PACKETS) {
        createRandomPacket()
      }
    }, 2500) // More frequent packet creation

    // Update RTT periodically
    const metricsInterval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        rtt: 30 + Math.floor(Math.random() * 30),
      }))
    }, 4000)

    const cleanup = () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      clearInterval(metricsInterval)
      clearInterval(createPacketInterval)
    }

    window.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cleanup()
      } else {
        requestRef.current = requestAnimationFrame(animatePackets)
        createRandomPacketWithDelay()
      }
    })

    return cleanup
  }, [])

  const getNodeRadius = (type: string) => {
    switch (type) {
      case "category":
        return 45 // Larger to fit text
      case "me":
        return 40 // Prominent but not overwhelming
      case "sub":
        return 6 // Much smaller since they don't need to show text
      default:
        return 6
    }
  }

  // Create direct paths between nodes
  const createOrthogonalPath = (start: Node, end: Node) => {
    return `M ${start.x} ${start.y} L ${end.x} ${end.y}`
  }

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        position: "relative",
        borderRadius: 24,
        background: "rgba(2, 20, 43, 0.6)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 24px rgba(10, 26, 42, 0.2)",
      }}
    >
      <style>
        {`
          @keyframes pulseOut {
            0% { r: 6; opacity: 0.4; }
            100% { r: 16; opacity: 0; }
          }
          @keyframes fadeOut {
            to { opacity: 0; transform: scale(1.5); }
          }
          .packet-ripple {
            position: fixed;
            border: 2px solid ${COLORS.packet};
            border-radius: 50%;
            animation: ripple 1s cubic-bezier(0, 0, 0.2, 1);
            pointer-events: none;
          }
          @keyframes ripple {
            0% {
              width: 0;
              height: 0;
              opacity: 0.8;
            }
            100% {
              width: 50px;
              height: 50px;
              opacity: 0;
              transform: translate(-50%, -50%);
            }
          }
        `}
      </style>
      <svg
        ref={svgRef}
        width={WIDTH}
        height={HEIGHT}
        style={{ position: "absolute", left: 0, top: 0 }}
      >
        {/* Draw chained paths */}
        {nodes.map(node => {
          if (node.next) {
            const nextNode = nodes.find(n => n.id === node.next)
            if (nextNode) {
              return (
                <path
                  key={`path-${node.id}-to-${node.next}`}
                  d={createOrthogonalPath(node, nextNode)}
                  stroke={getCategoryColor(node)}
                  strokeWidth="1.5"
                  fill="none"
                  style={{
                    filter: "drop-shadow(0 0 2px rgba(41, 182, 246, 0.3))",
                  }}
                />
              )
            }
          }
          return null
        })}

        {/* Draw nodes */}
        {nodes.map(node => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={getNodeRadius(node.type)}
              fill={node.type === "me" ? COLORS.me : getCategoryColor(node)}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
            />
            {/* Only show text for category and me nodes */}
            {(node.type === "category" || node.type === "me") && (
              <>
                {/* Text background for better readability */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={getNodeRadius(node.type) - 2}
                  fill={node.type === "me" ? COLORS.me : getCategoryColor(node)}
                  opacity={0.9}
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={COLORS.text}
                  fontSize={node.type === "me" ? 18 : 13}
                  fontWeight={node.type === "me" ? "bold" : "normal"}
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    letterSpacing: "0.5px",
                    pointerEvents: "none",
                  }}
                >
                  {node.label.split(" ").map((word, i, arr) => (
                    <tspan
                      key={i}
                      x={node.x}
                      dy={i === 0 ? -arr.length * 4 + 8 : 12}
                      fontSize={node.type === "me" ? 18 : 11}
                    >
                      {word}
                    </tspan>
                  ))}
                </text>
              </>
            )}
          </g>
        ))}

        {/* Draw packets */}
        {packets.map(packet => (
          <g
            key={packet.id}
            onClick={e => handlePacketClick(e, packet)}
            style={{
              cursor: packet.dropped ? "default" : "pointer",
              pointerEvents: packet.dropped ? "none" : "all",
            }}
          >
            {packet.dropped ? (
              // Dropped packet effect - simplified
              packet.droppedAt && (
                <g>
                  <circle
                    cx={packet.droppedAt.x}
                    cy={packet.droppedAt.y}
                    r={6}
                    fill="none"
                    stroke={getCategoryColor(packet.currentNode)}
                    strokeWidth="2"
                    opacity={0.3}
                  />
                  <text
                    x={packet.droppedAt.x}
                    y={packet.droppedAt.y - 10}
                    textAnchor="middle"
                    fill={getCategoryColor(packet.currentNode)}
                    fontSize="12"
                    opacity={0.8}
                  >
                    ✕
                  </text>
                </g>
              )
            ) : (
              // Active packet - optimized rendering
              <g>
                <defs>
                  <filter id={`glow-${packet.id}`}>
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Combined packet with optimized effects */}
                <circle
                  cx={packet.x}
                  cy={packet.y}
                  r={4}
                  fill={getCategoryColor(packet.currentNode)}
                  filter={`url(#glow-${packet.id})`}
                />
                <circle
                  cx={packet.x}
                  cy={packet.y}
                  r={8}
                  fill="none"
                  stroke={getCategoryColor(packet.currentNode)}
                  strokeWidth="1"
                  opacity={0.3}
                />
              </g>
            )}
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredNode?.type === "sub" && (
        <div
          style={{
            position: "absolute",
            left: hoveredNode.x,
            top: hoveredNode.y - 10,
            background: "rgba(2, 20, 43, 0.95)",
            border: `1px solid ${getCategoryColor(hoveredNode)}`,
            borderRadius: 4,
            padding: "3px 6px",
            color: COLORS.text,
            fontSize: 12,
            pointerEvents: "none",
            zIndex: 1000,
            transform: "translate(-50%, -100%)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            whiteSpace: "nowrap",
          }}
        >
          {hoveredNode?.label}
        </div>
      )}

      {/* Metrics overlay */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          right: 20,
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between", // Better spacing for metrics
          backgroundColor: "rgba(2, 20, 43, 0.8)", // Semi-transparent background
          padding: "8px 16px",
          borderRadius: "12px",
          backdropFilter: "blur(4px)", // Blur effect for better readability
          zIndex: 10,
        }}
      >
        {/* Instructions */}
        <div
          style={{
            fontSize: 12,
            opacity: 0.8,
            color: COLORS.text,
            display: "flex",
            gap: "16px",
          }}
        >
          <span>👆 Click packets to drop them</span>
          <span>👀 Hover for details</span>
        </div>

        {/* Metrics */}
        <div
          style={{
            background: "rgba(2, 20, 43, 0.95)",
            padding: "8px 12px",
            borderRadius: 8,
            color: COLORS.text,
            fontFamily: "monospace",
            fontSize: 13,
            display: "flex",
            gap: "16px",
          }}
        >
          <span>RTT: {metrics.rtt}ms</span>
          <span>Loss: {metrics.loss}%</span>
          <span>Dropped: {metrics.packetsDropped}</span>
        </div>
      </div>
    </div>
  )
}

export default NetworkingGraph
