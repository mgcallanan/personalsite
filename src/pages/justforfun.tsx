import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"

const JustForFun: React.FC = () => {
  return (
    <React.Fragment>
      <div className="total_header">
        <Header />
      </div>
      <div className="navigation">
        <Navigation />
      </div>
      <div className="content">
        <p>coming soon :)</p>
      </div>
    </React.Fragment>
  )
}

export default JustForFun
