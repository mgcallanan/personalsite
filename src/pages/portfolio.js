import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"

export default function Portfolio() {

  return (
    <React.Fragment>
      <div className="total_header">
        <Header/>
      </div>
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="content">
        <p>Portfolio</p>
      </div>
    </React.Fragment>

  )
}