import React from "react"
import Title from "../components/title"
import { Helmet }  from "react-helmet"
import logo from "../../logo.png"
import "../styles/header.css"

export default function Header() {

  return (
    <React.Fragment>
      <div className="header">
        <Helmet>
          <title>Mary Callanan</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
        <div className="image">
          <img id="logo" src={logo} alt="Logo"/>
        </div>
        <div className="text">
          <Title/>
        </div>
      </div>
    </React.Fragment>
  )
}