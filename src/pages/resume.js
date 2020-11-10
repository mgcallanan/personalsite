import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"
import "../styles/resume.css"

import yalelogo from "../images/yalelogo.png"


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
              <div className="experience-title">
                <h3>Yale University</h3>
              </div>
              <div className="experience-date">
                <p>August 2022 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  )
}