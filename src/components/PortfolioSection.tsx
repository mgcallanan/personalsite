import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Navigation from "./navigation"
import PortfolioWork from "./PortfolioWork"

import "../styles/portfolio.css"

interface PortfolioSectionProps {
  title: string
  children?: React.ReactNode
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className="portfolio-section">
      <p className="section-title">{title}</p>
      {children}
      <br />
    </div>
  )
}

export default PortfolioSection
