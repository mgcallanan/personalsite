import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"

export default function Resume() {

  return (
    <React.Fragment>
      <div className="total_header">
        <Header/>
      </div>
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="content">
        <p>Resume</p>
      </div>
    </React.Fragment>

  )
}