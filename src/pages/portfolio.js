import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"
import Circles from "../components/circle"

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
        <div className="portfolio-section">
          <p className="section-title">&nbsp;Work from CPSC 446: Data Visualization&nbsp;</p>

          <div class="slideshow-container">
            
            <div className="mySlides fade">
              <div className="numbertext">1 / 3</div>
              <iframe className="d3-sample" src="/genderinmovies.html" title="test" style={{width:'725px',height:'625px'}}></iframe>
              <div className="caption">A visual representation of the gender divide in Hollywood. The blue in all of the visualizations represents male figures, and the red represents female figures. The data was scraped from <a href="https://github.com/taubergm/HollywoodGenderData">https://github.com/taubergm/HollywoodGenderData</a></div>
            </div>

            <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
              <iframe className="d3-sample" src="/court.html" title="test" style={{width:'500px',height:'325px'}}></iframe>
              <div className="caption">A graphic showing the connections between various cases and the Supreme Court Justices who voted "Yes" on those particular cases.</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 3</div>
              <iframe className="d3-sample" src="/looped_bars.html" title="test" style={{width:'625px',height:'325px'}}></iframe>
              <div className="caption">An animation with bar graphs showing arbitrary data in various formats. Click within the white frame to rotate views.</div>
            </div>

          </div>
          <br/>

        </div>
      </div>
    </React.Fragment>

  )
}