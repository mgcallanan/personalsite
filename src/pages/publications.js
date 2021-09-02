import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Navigation from "../components/navigation"

import enasImg from "../images/enas118.jpg"
import chImg from "../images/codehavenblog.png"
import wprImg from "../images/wprarticleimage.jpeg"
import gwcImg from "../images/gwc.jpeg"

import "../styles/publications.css"

export default function Publications() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Publications | Mary Callanan</title>
      </Helmet>
      <React.Fragment>
        <div className="total_header">
          <Header />
        </div>
        <div className="navigation">
          <Navigation />
        </div>
        <div className="content publications">
          <a href="https://www.wpr.org/case-more-computer-science-wisconsin-high-schools">
            <div className="publication-section">
              <div className="thumbnail">
                <img
                  src={wprImg}
                  alt="Students studying drag and drop coding on a computer"
                />
              </div>
              <div className="article-details">
                <div className="article-name">
                  <h2>
                    A Case For More Computer Science In Wisconsin High Schools
                  </h2>
                </div>
                <div className="article-date">
                  <p>February 1, 2021 | Wisconsin Public Radio</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.jsonline.com/story/news/solutions/2021/01/28/why-dont-more-wisconsin-public-high-schools-teach-computer-science/4282783001/">
            <div className="publication-section">
              <div className="thumbnail">
                <img
                  src={gwcImg}
                  alt="Two students at their computers in a coding class"
                />
              </div>
              <div className="article-details">
                <div className="article-name">
                  <h2>There is a huge need for computer science skills.</h2>
                </div>
                <div className="article-date">
                  <p>January 28, 2021 | Milwaukee Journal Sentinel</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://medium.com/code-haven/fostering-community-in-a-virtual-world-680306bb15">
            <div className="publication-section">
              <div className="thumbnail">
                <img
                  src={chImg}
                  alt="Group of people at Code Haven social event"
                />
              </div>
              <div className="article-details">
                <div className="article-name">
                  <h2>Fostering Community in a Virtual World</h2>
                </div>
                <div className="article-date">
                  <p>October 3, 2020 | Code Haven Medium</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://seas.yale.edu/news-events/news/enas-118-artful-innovations-carry-weight-and-make-surgery-go-easier">
            <div className="publication-section">
              <div className="thumbnail">
                <img
                  src={enasImg}
                  alt="Students with their project to measure fading in art"
                />
              </div>
              <div className="article-details">
                <div className="article-name">
                  <h2>
                    Artful Innovations that Carry Weight (and Make Surgery Go
                    Easier)
                  </h2>
                </div>
                <div className="article-date">
                  <p>January 18, 2019 | Yale SEAS News Publication</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </React.Fragment>
    </div>
  )
}
