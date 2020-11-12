import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"
import "../styles/resume.css"

import yalelogo from "../images/yalelogo.png"
import dshalogo from "../images/dshalogo.png"
import oraclelogo from "../images/oraclelogo.png"
import stclogo from "../images/stclogo.png"
import codehavenlogo from "../images/codehavenlogo.png"


export default function Resume() {

  return (
    <React.Fragment>
      <div className="total_header">
        <Header/>
      </div>
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="general-page-content">
        <div className="section">
          <div className="section-header">
            <h2>EDUCATION</h2>
          </div>
          <div className="section-content">
            <div className="experience-main">
              <div className="experience-logo">
                <img src={yalelogo} alt="Yale Logo"/>
              </div>
              <div className="experience-main-text">
                <div className="experience-title">
                  <h3>Yale University</h3>
                </div>
                <div className="experience-date">
                  <p>August 2018 - Present</p>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <ul>
                <li><span>Bachelor of Science, Computer Science</span></li>
                <li><span style={{fontStyle: "italic"}}>Relevant Classes:</span> Data Structures and Programming, Systems Programming & Computer Organization</li>
              </ul>
            </div>
          </div>
          <div className="section-content">
            <div className="experience-main">
              <div className="experience-logo">
                <img src={dshalogo} alt="Divine Savior Holy Angels High School Seal"/>
              </div>
              <div className="experience-main-text">
                <div className="experience-title">
                  <h3 className="dsha">Divine Savior Holy Angels High School</h3>
                </div>
                <div className="experience-date">
                  <p>August 2014 - May 2018</p>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <ul>
                <li>Graduated in top 10% of the graduating class</li>
                <li><span style={{fontStyle: "italic"}}>Awards:</span> National Honor Society, AP Scholar with Distinction, Salvatorian Sisters' Service Award</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>WORK EXPERIENCE</h2>
          </div>
          <div className="section-content">
            <div className="experience-main">
              <div className="experience-logo">
                <img src={oraclelogo} alt="Oracle Logo"/>
              </div>
              <div className="experience-main-text">
                <div className="experience-title">
                  <h3>Oracle Cloud Infrastructure</h3>
                </div>
                <div className="experience-date">
                  <p>May 2020 - August 2020</p>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <div className="job">
                <h3>Software Engineer Intern</h3>
                <ul>
                  <li>Worked as the only intern on the Network Monitoring team on a project that measured internet performance on a global scale</li>
                  <li>Used Oracle Cloud tools, like Oracle Functions, to track and manage alarms that were firing</li>
                  <li>Implemented code that used Java JSON libraries and the OCI SDK to convert alarm messages</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="experience-main">
              <div className="experience-logo">
                <img src={stclogo} alt="Student Technology Collaborative Logo"/>
              </div>
              <div className="experience-main-text">
                <div className="experience-title">
                  <h3>Student Technology Collaborative</h3>
                </div>
                <div className="experience-date">
                  <p>October 2018 - Present</p>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <div className="job">
                <h3>Cluster Technician Coordinator</h3>
                <ul>
                  <li>Communicate with technicians, coordinators, and management to ensure proper cross-campus coverage</li>
                  <li>Work with the operations staff to repair lab equipment, resolve issues with software, and deploy new computers</li>
                  <li>Interact regularly with clients to troubleshoot issues and order materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>VOLUNTEER EXPERIENCE</h2>
          </div>
          <div className="section-content">
            <div className="experience-main">
              <div className="experience-logo">
                <img src={codehavenlogo} alt="Code Haven Logo"/>
              </div>
              <div className="experience-main-text">
                <div className="experience-title">
                  <h3>Code Haven</h3>
                </div>
                <div className="experience-date">
                  <p>September 2018 - Present</p>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <div className="job">
                <h3>Board Member, Classroom Mentor</h3>
                <ul>
                  <li>Conduct weekly hour-long computer science classes at New Haven middle schools, reaching over 200 students</li>
                  <li>Promote Code Haven’s mission of providing inclusive access to computer science in middle schools</li>
                  <li>Host annual events to train area teachers on computer science principles and to showcase students’ final projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  )
}