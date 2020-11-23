import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"

import enasImg from "../images/enas118.jpg"
import chImg from "../images/codehavenblog.png"

import "../styles/publications.css"

export default function Publications() {

  return (
    <React.Fragment>
      <div className="total_header">
        <Header/>
      </div>
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="content">
        <p>Publications</p>
        <a href="https://seas.yale.edu/news-events/news/enas-118-artful-innovations-carry-weight-and-make-surgery-go-easier">
          <div className="publication-section">
            <div className="thumbnail">
              <img src={enasImg}/>
            </div>
            <div className="article-details">
              <div className="article-name">
                <h2>Artful Innovations that Carry Weight (and Make Surgery Go Easier)</h2>
              </div>
              <div className="article-date">
                <p>January 18, 2019</p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://medium.com/code-haven/fostering-community-in-a-virtual-world-680306bb15">
          <div className="publication-section">
            <div className="thumbnail">
              <img src={chImg}/>
            </div>
            <div className="article-details">
              <div className="article-name">
                <h2>Fostering Community in a Virtual World</h2>
              </div>
              <div className="article-date">
                <p>October 3, 2020</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>

  )
}