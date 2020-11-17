import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"
import Circles from "../components/circle"


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
        <Circles/>
      </div>
    </React.Fragment>

  )
}