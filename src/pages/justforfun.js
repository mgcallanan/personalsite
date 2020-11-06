import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"

export default function JustForFun() {

  return (
    <React.Fragment>
      <div className="total_header">
        <Header/>
      </div>
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="content">
        <p>Just for Fun</p>
      </div>
    </React.Fragment>

  )
}