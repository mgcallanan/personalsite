import React from "react"
import { Link } from "gatsby"
import Title from "./title"
import { Helmet } from "react-helmet"
// import logo from "../images/logo.png"
import "../styles/header.css"

const Header: React.FC = () => {
  return (
    <div className="header neo-brutal-header">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Link to="/">
        <div className="text neo-brutal-block">
          <Title />
        </div>
      </Link>
    </div>
  )
}

export default Header
