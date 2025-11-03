import React, { useRef, useEffect, useState } from "react"

// Configuration
const CONFIG = {
  width: 900,
  height: 500,
  margins: {
    top: 80,
    right: 120,
    bottom: 80,
    left: 120
  },
  nodeRadius: {
    category: 45,
    me: 40,
    sub: 6
  },
  maxActivePackets: 3,
  fps: 30,
  packetSpeed: 0.01
}

// Types
interface Node {
  id: string
  label: string
  type: 'category' | 'sub' | 'me'
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

// Data
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

// Color scheme
const COLORS = {
  categories: {
    languages: "#0098ff",    // Professional blue
    frameworks: "#00bcd4",   // Cyan
    cloud: "#29b6f6",       // Light blue
    professional: "#039be5", // Darker blue
    interests: "#0288d1",   // Deep blue
  },
  me: "#01579b",           // Deepest blue
  packet: "#29b6f6",       // Light blue
  text: "#ffffff",         // White
  background: "rgba(2, 20, 43, 0.6)" // Semi-transparent dark blue
}

// Helper function to get category color
const getCategoryColor = (node: Node): string => {
  if (node.type === 'category') {
    return COLORS.categories[node.id as keyof typeof COLORS.categories] || COLORS.categories.interests
  }
  if (node.category) {
    return COLORS.categories[node.category as keyof typeof COLORS.categories] || COLORS.categories.interests
  }
  return COLORS.me
}

const NetworkingGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [nodes, setNodes] = useState<Node[]>([])
  const [packets, setPackets] = useState<Packet[]>([])
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null)
  const [metrics, setMetrics] = useState({
    rtt: 42,
    loss: 5,
    packetsDropped: 0,
    totalPackets: 0
  })
  
  const requestRef = useRef<number>(0)
  const lastFrameTimeRef = useRef<number>(0)

  // Calculate node positions
  useEffect(() => {
    const newNodes: Node[] = []
    const INNER_HEIGHT = CONFIG.height - CONFIG.margins.top - CONFIG.margins.bottom
    const CATEGORY_SPACING = INNER_HEIGHT / (categories.length - 1)
    
    // Create nodes
    categories.forEach((cat, i) => {
      const y = CONFIG.margins.top + (CATEGORY_SPACING * i)
      const INNER_WIDTH = CONFIG.width - CONFIG.margins.left - CONFIG.margins.right
      const HORIZONTAL_SPACING = INNER_WIDTH / (cat.subs.length + 1)
      
      // Add category node
      newNodes.push({
        id: cat.id,
        label: cat.label,
        type: 'category',
        x: CONFIG.margins.left,
        y,
        next: `${cat.id}-0`
      })

      // Add sub nodes
      cat.subs.forEach((sub, j) => {
        newNodes.push({
          id: `${cat.id}-${j}`,
          label: sub,
          type: 'sub',
          category: cat.id,
          x: CONFIG.margins.left + HORIZONTAL_SPACING * (j + 1),
          y,
          next: j === cat.subs.length - 1 ? 'me' : `${cat.id}-${j + 1}`
        })
      })
    })

    // Add "Me" node
    newNodes.push({
      id: 'me',
      label: 'Mary',
      type: 'me',
      x: CONFIG.width - CONFIG.margins.right,
      y: CONFIG.height / 2
    })

    setNodes(newNodes)
  }, [])

  // Handle packet clicking
  const handlePacketClick = (e: React.MouseEvent, packet: Packet) => {
    if (!packet.dropped) {
      setPackets(prev => prev.map(p => 
        p.id === packet.id 
          ? { ...p, dropped: true, droppedAt: { x: p.x, y: p.y } }
          : p
      ))
      setMetrics(prev => ({
        ...prev,
        packetsDropped: prev.packetsDropped + 1,
        loss: Math.round((prev.packetsDropped + 1) / prev.totalPackets * 100)
      }))

      // Ripple effect
      const ripple = document.createElement('div')
      ripple.className = 'packet-ripple'
      ripple.style.left = `${e.clientX}px`
      ripple.style.top = `${e.clientY}px`
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 1000)
    }
  }

  // Animation and packet creation
  useEffect(() => {
    const createPacket = () => {
      if (packets.length >= CONFIG.maxActivePackets) return

      const categoryNodes = nodes.filter(n => n.type === 'category')
      if (categoryNodes.length === 0) return

      const sourceNode = categoryNodes[Math.floor(Math.random() * categoryNodes.length)]
      const targetNode = nodes.find(n => n.id === sourceNode.next)
      
      if (sourceNode && targetNode) {
        setPackets(prev => {
          if (prev.length >= CONFIG.maxActivePackets) return prev
          return [...prev, {
            id: Date.now(),
            sourceNode,
            targetNode,
            x: sourceNode.x,
            y: sourceNode.y,
            progress: 0,
            dropped: false
          }]
        })
        setMetrics(prev => ({
          ...prev,
          totalPackets: prev.totalPackets + 1
        }))
      }
    }

    const animatePackets = (timestamp: number) => {
      if (!lastFrameTimeRef.current) lastFrameTimeRef.current = timestamp
      
      const elapsed = timestamp - lastFrameTimeRef.current
      const frameInterval = 1000 / CONFIG.fps
      
      if (elapsed > frameInterval) {
        lastFrameTimeRef.current = timestamp - (elapsed % frameInterval)
        
        setPackets(prevPackets => 
          prevPackets
            .map(packet => {
              if (packet.dropped) return packet
              
              const progress = packet.progress + CONFIG.packetSpeed
              
              if (progress >= 1) {
                const nextNode = nodes.find(n => n.id === packet.targetNode.next)
                if (nextNode) {
                  return {
                    ...packet,
                    sourceNode: packet.targetNode,
                    targetNode: nextNode,
                    progress: 0
                  }
                }
                return null
              }

              return {
                ...packet,
                x: packet.sourceNode.x + (packet.targetNode.x - packet.sourceNode.x) * progress,
                y: packet.sourceNode.y + (packet.targetNode.y - packet.sourceNode.y) * progress,
                progress
              }
            })
            .filter((p): p is Packet => {
              if (!p) return false
              if (p.dropped) return Date.now() - p.id < 1000
              return true
            })
        )
      }
      
      requestRef.current = requestAnimationFrame(animatePackets)
    }

    // Start animation
    requestRef.current = requestAnimationFrame(animatePackets)

    // Create initial packets
    createPacket()
    setTimeout(createPacket, 800)
    setTimeout(createPacket, 1600)

    // Create packets periodically
    const packetInterval = setInterval(() => {
      if (!document.hidden && packets.length < CONFIG.maxActivePackets) {
        createPacket()
      }
    }, 2500)

    // Update RTT periodically
    const metricsInterval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        rtt: 30 + Math.floor(Math.random() * 30)
      }))
    }, 4000)

    // Cleanup
    return () => {
      cancelAnimationFrame(requestRef.current)
      clearInterval(packetInterval)
      clearInterval(metricsInterval)
    }
  }, [nodes, packets.length])

  return (
    <div className="network-graph" style={{
      width: CONFIG.width,
      height: CONFIG.height,
      position: "relative",
      background: COLORS.background,
      borderRadius: "24px",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 24px rgba(10, 26, 42, 0.2)"
    }}>
      <style>
        {`
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
          .packet-ripple {
            position: fixed;
            border: 2px solid ${COLORS.packet};
            border-radius: 50%;
            animation: ripple 1s cubic-bezier(0, 0, 0.2, 1);
            pointer-events: none;
          }
        `}
      </style>

      {/* Metrics Overlay */}
      <div style={{
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(2, 20, 43, 0.8)",
        padding: "8px 16px",
        borderRadius: "12px",
        backdropFilter: "blur(4px)",
        zIndex: 10
      }}>
        <div style={{
          fontSize: 12,
          color: COLORS.text,
          opacity: 0.8,
          display: "flex",
          gap: "16px"
        }}>
          <span>👆 Click packets to drop them</span>
          <span>👀 Hover for details</span>
        </div>
        <div style={{
          fontFamily: "monospace",
          fontSize: 13,
          color: COLORS.text,
          display: "flex",
          gap: "16px"
        }}>
          <span>RTT: {metrics.rtt}ms</span>
          <span>Loss: {metrics.loss}%</span>
          <span>Dropped: {metrics.packetsDropped}</span>
        </div>
      </div>

      {/* Main SVG */}
      <svg 
        ref={svgRef}
        width={CONFIG.width}
        height={CONFIG.height}
      >
        {/* Paths */}
        {nodes.map(node => {
          if (node.next) {
            const nextNode = nodes.find(n => n.id === node.next)
            if (nextNode) {
              return (
                <path
                  key={`path-${node.id}-${node.next}`}
                  d={`M ${node.x} ${node.y} L ${nextNode.x} ${nextNode.y}`}
                  stroke={getCategoryColor(node)}
                  strokeWidth="1.5"
                  fill="none"
                  style={{
                    filter: "drop-shadow(0 0 2px rgba(41, 182, 246, 0.3))"
                  }}
                />
              )
            }
          }
          return null
        })}

        {/* Nodes */}
        {nodes.map(node => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={CONFIG.nodeRadius[node.type]}
              fill={getCategoryColor(node)}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
            />
            {(node.type === 'category' || node.type === 'me') && (
              <>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={CONFIG.nodeRadius[node.type] - 2}
                  fill={getCategoryColor(node)}
                  opacity={0.9}
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={COLORS.text}
                  fontSize={node.type === 'me' ? 18 : 13}
                  fontWeight={node.type === 'me' ? 'bold' : 'normal'}
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    letterSpacing: "0.5px",
                    pointerEvents: "none"
                  }}
                >
                  {node.label.split(' ').map((word, i, arr) => (
                    <tspan
                      key={i}
                      x={node.x}
                      dy={i === 0 ? -arr.length * 4 + 8 : 12}
                      fontSize={node.type === 'me' ? 18 : 11}
                    >
                      {word}
                    </tspan>
                  ))}
                </text>
              </>
            )}
          </g>
        ))}

        {/* Packets */}
        {packets.map(packet => (
          <g
            key={packet.id}
            onClick={(e) => handlePacketClick(e, packet)}
            style={{ cursor: packet.dropped ? 'default' : 'pointer' }}
          >
            {packet.dropped ? (
              packet.droppedAt && (
                <g>
                  <circle
                    cx={packet.droppedAt.x}
                    cy={packet.droppedAt.y}
                    r={6}
                    fill="none"
                    stroke={getCategoryColor(packet.sourceNode)}
                    strokeWidth="2"
                    opacity={0.3}
                  />
                  <text
                    x={packet.droppedAt.x}
                    y={packet.droppedAt.y - 10}
                    textAnchor="middle"
                    fill={getCategoryColor(packet.sourceNode)}
                    fontSize="12"
                    opacity={0.8}
                  >
                    ✕
                  </text>
                </g>
              )
            ) : (
              <g>
                <defs>
                  <filter id={`glow-${packet.id}`}>
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <circle
                  cx={packet.x}
                  cy={packet.y}
                  r={4}
                  fill={getCategoryColor(packet.sourceNode)}
                  filter={`url(#glow-${packet.id})`}
                />
                <circle
                  cx={packet.x}
                  cy={packet.y}
                  r={8}
                  fill="none"
                  stroke={getCategoryColor(packet.sourceNode)}
                  strokeWidth="1"
                  opacity={0.3}
                />
              </g>
            )}
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredNode?.type === 'sub' && (
        <div style={{
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
          whiteSpace: "nowrap"
        }}>
          {hoveredNode.label}
        </div>
      )}
    </div>
  )
}

export default NetworkingGraph