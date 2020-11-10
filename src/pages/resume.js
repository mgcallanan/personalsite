import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"
import "../styles/resume.css"

import yalelogo from "../images/yalelogo.png"
import dshalogo from "../images/dshalogo.png"


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
                  <p>August 2022 - Present</p>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <ul>
                <li><span>Bacheler's of Science, Computer Science</span></li>
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
      </div>
    </React.Fragment>

  )
}