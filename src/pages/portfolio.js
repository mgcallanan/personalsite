import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Navigation from "../components/navigation"

import "../styles/portfolio.css"



export default function Portfolio() {

  return (
    <div>
      <Helmet>
        <title>Portfolio | Mary Callanan</title>
      </Helmet>
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

              <div className="mySlides supreme">
                <iframe title="Supreme Court Visualization" className="d3-sample" src="/court.html"></iframe>
                <div className="caption">A graphic showing the connections between various cases and the Supreme Court Justices who voted "Yes" on those particular cases.</div>
              </div>

              <div className="mySlides bars">
                <iframe title="Generic Bar Graph" className="d3-sample" src="/looped_bars.html"></iframe>
                <div className="caption">An animation with bar graphs showing arbitrary data in various formats. Click within the white frame to rotate views.</div>
              </div>

              <div className="mySlides map">
                <iframe title="Pay Gap Map" className="d3-sample" src="/genderdata.html"></iframe>
                <div className="caption">A map depicting the pay gap between males and females in various US states from 2010.</div>
              </div>

              <div className="mySlides film">
                <iframe title="Gender in Movies" className="d3-sample" src="/genderinmovies.html"></iframe>
                <div className="caption">A visual representation of the gender divide in Hollywood. The blue in all of the visualizations represents male figures, and the red represents female figures. The data was scraped from <a href="https://github.com/taubergm/HollywoodGenderData">https://github.com/taubergm/HollywoodGenderData</a></div>
              </div>

            </div>
            <br/>

          </div>
        </div>
      </React.Fragment>
    </div>

  )
}