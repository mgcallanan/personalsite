import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

import enasImg from "../images/enas118.jpg"
import chImg from "../images/codehavenblog.png"
import wprImg from "../images/wprarticleimage.jpeg"
import gwcImg from "../images/gwc.jpeg"

import "../styles/publications.css"

interface Publication {
  url: string
  image: string
  imageAlt: string
  title: string
  date: string
  source: string
}

const publications: Publication[] = [
  {
    url:
      "https://www.wpr.org/case-more-computer-science-wisconsin-high-schools",
    image: wprImg,
    imageAlt: "Students studying drag and drop coding on a computer",
    title: "A Case For More Computer Science In Wisconsin High Schools",
    date: "February 1, 2021",
    source: "Wisconsin Public Radio",
  },
  {
    url:
      "https://www.jsonline.com/story/news/solutions/2021/01/28/why-dont-more-wisconsin-public-high-schools-teach-computer-science/4282783001/",
    image: gwcImg,
    imageAlt: "Two students at their computers in a coding class",
    title: "There is a huge need for computer science skills.",
    date: "January 28, 2021",
    source: "Milwaukee Journal Sentinel",
  },
  {
    url:
      "https://medium.com/code-haven/fostering-community-in-a-virtual-world-680306bb15",
    image: chImg,
    imageAlt: "Group of people at Code Haven social event",
    title: "Fostering Community in a Virtual World",
    date: "October 3, 2020",
    source: "Code Haven Medium",
  },
  {
    url:
      "https://seas.yale.edu/news-events/news/enas-118-artful-innovations-carry-weight-and-make-surgery-go-easier",
    image: enasImg,
    imageAlt: "Students with their project to measure fading in art",
    title: "Artful Innovations that Carry Weight (and Make Surgery Go Easier)",
    date: "January 18, 2019",
    source: "Yale SEAS News Publication",
  },
]

const Publications: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Publications | Mary Callanan</title>
      </Helmet>
      <div className="publications-content">
        {publications.map((pub, index) => (
          <a
            href={pub.url}
            key={index}
            className="publication-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="pub-thumbnail">
              <img src={pub.image} alt={pub.imageAlt} />
            </div>
            <div className="pub-details">
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-meta">
                {pub.date} | {pub.source}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Layout>
  )
}

export default Publications
