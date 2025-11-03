import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PortfolioSection from "../components/PortfolioSection"
import PortfolioWork from "../components/PortfolioWork"

import "../styles/portfolio.css"

const Portfolio: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Mary Callanan</title>
      </Helmet>
      <div className="content">
        <PortfolioSection title="Featured Projects">
          <PortfolioWork
            title="Senior Thesis: Generative Hullies"
            dateCompleted="December 2022"
            description="Created an interactive full-stack system that transforms user-drawn polygons into continuous-line humanoid figures, inspired by Pixar's 'Soul' character design. Users draw body parts on their devices, which are transformed into 'Hullies' using concave hull algorithms and displayed on large projector screens with animated color-morphing backgrounds. The installation at Yale's CCAM Leeds Studio featured six vertical projectors, enabling multiple simultaneous user interactions. Built using React, WebSocket for real-time communication, and p5.js for creative visualizations."
            videoUrl="https://www.youtube.com/embed/Pm56kx5IGyY"
            images={[
              "/project-images/hullies-1.jpg",
              "/project-images/hullies-4.jpg",
              "/project-images/hullies-3.jpg",
            ]}
            technologies={[
              "React.js",
              "Redux",
              "p5.js",
              "WebSocket",
              "Node.js",
              "JavaScript",
              "Hull.js",
            ]}
          />
          <PortfolioWork
            title="Spoti-Fynd"
            dateCompleted="April 2022"
            description="Developed an interactive physical installation that challenges users to test their music listening awareness. Using a Raspberry Pi and LED display enclosed in a custom enclosure, users authenticate with their Spotify account and play a game where they guess which of two songs they've listened to more frequently. The system provides immediate feedback through LED animations and keeps track of the user's score, creating an engaging way to explore personal music habits."
            videoUrl="https://www.youtube.com/embed/AGtb1SfObhg?si=6N0hI6lnljGbNIau"
            images={[
              "/project-images/spotify-1.jpg",
              "/project-images/spotify-2.jpg",
              "/project-images/spotify-3.jpg",
            ]}
            technologies={[
              "Python",
              "Raspberry Pi",
              "Arduino",
              "Spotify API",
              "LED Matrix",
              "OAuth 2.0",
              "CorelDraw",
              "Laser Cutting",
            ]}
          />
          <PortfolioWork
            title="Women in CS Pipeline Visualization"
            dateCompleted="October 2021"
            description="Created an interactive data visualization installation at Yale's CCAM exploring the progression of women through various stages of computer science education and career development compared to their male counterparts. The visualization uses generative art techniques to represent data flows, with organic, flowing transitions between educational phases. Real-time animations illustrate the changing demographics and highlight key transition points where representation shifts significantly."
            videoUrl="https://www.youtube.com/embed/l2ZFxiM0dEo?si=PsgRr_dQ-xkUQYZz"
            technologies={[
              "Processing",
              "Data Visualization",
              "Generative Art",
              "Interactive Installation",
            ]}
          />
        </PortfolioSection>
      </div>
    </Layout>
  )
}

export default Portfolio
