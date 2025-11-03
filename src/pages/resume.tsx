import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import "../styles/resume.css"

import yalelogo from "../images/yalelogo.png"
import dshalogo from "../images/dshalogo.png"
import oraclelogo from "../images/oraclelogo.png"
import stclogo from "../images/stclogo.png"
import codehavenlogo from "../images/codehavenlogo.png"
import brightcellarslogo from "../images/bright-cellars-badge-logo.png"

interface Experience {
  company: string
  logo: string
  logoAlt: string
  dates: string
  title: string
  bulletPoints: string[]
}

interface Education {
  school: string
  logo: string
  logoAlt: string
  dates: string
  degree?: string
  details: string[]
}

const Resume: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Resume | Mary Callanan</title>
      </Helmet>
      <div className="general-page-content">
        <div className="section">
          <div className="section-header">
            <h2>WORK EXPERIENCE</h2>
          </div>
          {/* Oracle Experience */}
          <div className="section-content">
            <div className="experience-main">
              <div className="experience-logo">
                <img src={oraclelogo} alt="Oracle Logo" />
              </div>
              <div className="experience-main-text">
                <div className="experience-title">
                  <h3>Oracle Cloud Infrastructure</h3>
                </div>
                <div className="experience-date">
                  <p>May 2020 – Present</p>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <div className="job">
                <h3>Member of Technical Staff (Sept 2025 – Present)</h3>
                <ul>
                  <li>
                    Expanded observability of OCI's edge connectivity, detecting
                    high-profile customer impact ~30 min before customer reports
                  </li>
                  <li>
                    Mentor junior engineers across Network Monitoring and
                    volunteer for Oracle Global Tech campus program
                  </li>
                  <li>
                    Lead cross-functional projects analyzing routing and
                    performance via BGP data and telemetry automation
                  </li>
                </ul>
              </div>
              <div className="job">
                <h3>Software Engineer (Sept 2023 – Sept 2025)</h3>
                <ul>
                  <li>
                    Built a fault-isolation service to identify
                    "needle-in-haystack" devices causing packet loss, reducing
                    triage from ~1 hr to minutes
                  </li>
                  <li>
                    Deployed compute, networking, serverless, and containerized
                    services to improve reliability and compliance (Linux
                    upgrades, FIPS compliance, automated security patching)
                  </li>
                  <li>
                    Awarded Networking Unsung Hero for team enthusiasm,
                    commitment to security, and elevating observability
                  </li>
                </ul>
              </div>
              <div className="job">
                <h3>Software Engineering Intern (May 2020 – Aug 2022)</h3>
                <ul>
                  <li>
                    Built a production-grade visualization tool for BGP route
                    analysis, reducing troubleshooting time by 85%
                  </li>
                  <li>
                    Selected for the Oracle Developer Scholars Program ($10,000
                    award) and served on intern speaking panels
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Software Engineering Intern - Bright Cellars */}
          <div className="section-content">
            <div className="experience-main">
              <div className="experience-logo">
                <img src={brightcellarslogo} alt="Bright Cellars Logo" />
              </div>
              <div className="experience-main-text">
                <div className="experience-title">
                  <h3>Bright Cellars</h3>
                </div>
                <div className="experience-date">
                  <p>Jan 2021 – Apr 2021</p>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <div className="job">
                <h3>Software Engineering Intern</h3>
                <ul>
                  <li>
                    Built APIs and D3.js visualizations to analyze wine
                    performance and inform product strategy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>EDUCATION</h2>
          </div>
          <div className="section-content education">
            <div className="experience-main">
              <div className="experience-logo">
                <img src={yalelogo} alt="Yale Logo" />
              </div>
              <div className="experience-main-text">
                <div className="experience-title">
                  <h3>Yale University</h3>
                </div>
                <div className="experience-date">
                  <p>May 2023</p>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <ul>
                <li>
                  <span>Bachelor of Science in Computer Science</span>
                </li>
                <li>
                  Relevant Coursework: Data Structures, Systems Programming,
                  Databases, Algorithms, Data Visualization, Creative Embedded
                  Systems, Computer Graphics, Linear Algebra
                </li>
                <li>
                  Recipient of the Saybrook Head of College Prize for academic
                  and community leadership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resume
