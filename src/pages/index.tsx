import React from "react"
import Layout from "../components/Layout"
import SpeedGauge from "../components/SpeedGauge"
import "../styles/about.css"

const Home: React.FC = () => (
  <Layout>
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
            I'm a software engineer at Oracle Cloud Infrastructure, focused on
            network monitoring and observability. I thrive at the intersection
            of cloud infrastructure, data engineering, and product design. I
            love solving complex problems at scale and creating intuitive
            visualizations that make data more accessible.
          </p>
          <div className="contact-links">
            <a href="mailto:marygcallanan@gmail.com" className="contact-link">
              <span role="img" aria-label="email">
                📧
              </span>{" "}
              Email
            </a>
            <a href="https://github.com/mgcallanan" className="contact-link">
              <span role="img" aria-label="github">
                💻
              </span>{" "}
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mary-callanan-203694172/"
              className="contact-link"
            >
              <span role="img" aria-label="linkedin">
                👔
              </span>{" "}
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="about-cards-container">
        <div className="about-card current">
          <div className="card-icon">💻</div>
          <h2>What I Do</h2>
          <p>
            At OCI, I build and maintain monitoring systems for Oracle's global
            cloud network. I work with real-time telemetry data, BGP routing
            analysis, and large-scale infrastructure monitoring. My experience
            spans Python, Go, TypeScript, React, D3.js, and cloud platforms.
          </p>
        </div>

        <div className="about-card education">
          <div className="card-icon">🎓</div>
          <h2>Background</h2>
          <p>
            Yale University B.S. in Computer Science, focused on graphics and
            visualization. Senior thesis: continuous line interpretation of
            user-drawn polygons, combining computational geometry with artistic
            expression.
          </p>
        </div>

        <div className="about-card interests">
          <div className="card-icon">🎨</div>
          <h2>Beyond Code</h2>
          <p>
            I have a track record of delivering robust solutions and mentoring
            junior engineers. My interests include data visualization, creative
            coding,{" "}
            <a href="https://www.nytimes.com/2024/06/18/style/everyone-watches-womens-sports-shirt.html">
              women's sports
            </a>
            , and hiking. I bring curiosity, grit, and a passion for learning to
            every project.
          </p>
        </div>

        <div className="about-card skills">
          <div className="card-icon">🚀</div>
          <h2>Core Skills</h2>
          <div className="skills-categories">
            <div className="skills-category">
              <h3>Languages</h3>
              <div className="skills-grid">
                <span>Python</span>
                <span>Go</span>
                <span>C</span>
                <span>Java</span>
                <span>SQL</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Processing</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Frameworks</h3>
              <div className="skills-grid">
                <span>React</span>
                <span>Flask</span>
                <span>D3.js</span>
                <span>Terraform</span>
                <span>Apache Kafka</span>
                <span>Apache Airflow</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Cloud & Tools</h3>
              <div className="skills-grid">
                <span>OCI</span>
                <span>Docker</span>
                <span>Git</span>
                <span>Figma</span>
                <span>Juniper Network</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Professional</h3>
              <div className="skills-grid">
                <span>Network Monitoring</span>
                <span>Cloud Infrastructure</span>
                <span>Data Visualization</span>
                <span>System Design</span>
                <span>Agile Development</span>
                <span>Atlassian Suite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="network-viz-section"
      style={{
        marginBottom: "100px",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="network-viz-intro">
        <h2>Network Status: Online</h2>
        <div className="network-metrics">
          <span>Brain Uptime: 99.9%</span>
          <span>Coffee Level: Optimal</span>
          <span>Bug Count: Decreasing</span>
        </div>
      </div>
      <div
        style={{
          margin: "20px auto",
          width: "100%",
          flex: "1 1 100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SpeedGauge />
      </div>
    </div>
  </Layout>
)

export default Home
