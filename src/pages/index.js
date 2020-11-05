import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"
import headshot from "../../images/headshot.png"
import "../styles/home.css"


export default function Home() {

  return (
    <React.Fragment>
      <div className="total_header">
        <Header/>
      </div>
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="background1">
        <div className="layer">
          <div className="tech-intro">
            <div className="image-cropper">
              <img className="headshot" src={headshot} alt=""/>
            </div>
            <div className="bio">
              <p>Hi, I'm Mary! I am a rising junior at <span className="yale">Yale University</span> studying Computer Science. I was a SWE intern at <span className="oracle">Oracle Cloud Infrastructure</span> last summer, and I'm returning there for another internship next year. I'm passionate about </p>
            </div>
          </div> 
        </div>
      </div>
      <div className="background2">
        <div className="layer">
          <div className="tech-intro">
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

