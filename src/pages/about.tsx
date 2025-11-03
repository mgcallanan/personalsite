import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Navigation from "../components/navigation"
import NetworkingGraph from "../components/NetworkingGraph"
import "../styles/about.css"
// (already imported above)
// Glitch bar for all pages
const GlitchBar: React.FC = () => (
  <div className="glitch-bar">
    <div className="glitch-bar-segment"></div>
    <div className="glitch-bar-segment"></div>
    <div className="glitch-bar-segment"></div>
    <div className="glitch-bar-segment"></div>
  </div>
)

const PacketAnimation: React.FC = () => {
  // Simulate RTT/packet loss with animated packets
  const packets = [
    { id: 1, delay: 0, lost: false },
    { id: 2, delay: 0.2, lost: false },
    { id: 3, delay: 0.4, lost: true },
    { id: 4, delay: 0.6, lost: false },
    { id: 5, delay: 0.8, lost: false },
  ]
  return (
    <div className="packet-animation-container">
      <div className="packet-animation-label">
        Network RTT: 42ms &nbsp;|&nbsp; Packet Loss: 20%
      </div>
      <div className="packet-animation-bar">
        <span className="packet-node">You</span>
        <div className="packet-path">
          {packets.map(pkt => (
            <div
              key={pkt.id}
              className={`packet-dot${pkt.lost ? " lost" : ""}`}
              style={{ animationDelay: `${pkt.delay}s` }}
              title={pkt.lost ? "Packet lost" : "Packet delivered"}
            />
          ))}
        </div>
        <span className="packet-node">Mary</span>
      </div>
      <div className="packet-animation-desc">
        Hi, I'm Mary! Sometimes a few packets get lost, but I always deliver
        creative solutions in the end.
      </div>
    </div>
  )
}

const About: React.FC = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Mary Callanan</title>
      </Helmet>
      <Fragment>
        <GlitchBar />
        <div className="total_header">
          <Header />
        </div>
        <div className="navigation">
          <Navigation />
        </div>
        <PacketAnimation />
        <NetworkingGraph />
        <div className="about-content-grid">
          <div className="about-intro-card">
            <img
              className="about-headshot"
              src={require("../images/headshot.png")}
              alt="Mary's headshot"
            />
            <div className="about-intro-text">
              <h1>Hello! I'm Mary</h1>
              <p>
                Software engineer at Oracle Cloud Infrastructure, focused on
                network monitoring and observability. I love solving complex
                problems at scale and creating intuitive visualizations that
                make data more accessible.
              </p>
            </div>
          </div>
          
          <div className="about-cards-container">
            <div className="about-card current">
              <div className="card-icon">💻</div>
              <h2>What I Do</h2>
              <p>
                At OCI, I build and maintain monitoring systems for Oracle's
                global cloud network. I work with real-time telemetry data,
                BGP routing analysis, and large-scale infrastructure
                monitoring.
              </p>
            </div>

            <div className="about-card education">
              <div className="card-icon">🎓</div>
              <h2>Background</h2>
              <p>
                Yale University B.S. in Computer Science, focused on graphics
                and visualization. Senior thesis: continuous line
                interpretation of user-drawn polygons, combining computational
                geometry with artistic expression.
              </p>
            </div>

            <div className="about-card interests">
              <div className="card-icon">🎨</div>
              <h2>Beyond Code</h2>
              <p>
                Outside of work, I explore new data visualization techniques,
                contribute to open-source projects, and find creative ways to make
                complex systems more understandable through visual storytelling.
              </p>
            </div>

            <div className="about-card skills">
              <div className="card-icon">🚀</div>
              <h2>Core Skills</h2>
              <div className="skills-grid">
                <span>Network Monitoring</span>
                <span>Cloud Infrastructure</span>
                <span>Data Visualization</span>
                <span>System Design</span>
                <span>Python</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  )
}
// This page has been removed. All about content is now on the index page.
export default About
