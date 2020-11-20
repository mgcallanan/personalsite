import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"
import Circles from "../components/circle"
import Slideshow from "../components/slideshow"

import "../styles/portfolio.css"



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
        <Slideshow/> 
      </div>
    </React.Fragment>

  )
}