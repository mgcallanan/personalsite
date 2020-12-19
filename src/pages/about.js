import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Navigation from "../components/navigation"

export default function About() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Mary Callanan</title>
      </Helmet>
      <React.Fragment>
        <div className="total_header">
          <Header/>
        </div>
        <div className="navigation">
          <Navigation/>
        </div>
        <div className="content">
          <p>About</p>
        </div>
      </React.Fragment>
    </div>

  )
}