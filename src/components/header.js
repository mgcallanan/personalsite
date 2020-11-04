import React, { Fragment, useEffect, useRef, useState } from "react"
import Title from "../components/title"
import NavigationButton from "../components/navigationbutton"
import Hamburger from "../components/hamburger"
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
      <nav>
        <div className="buttons">
          <NavigationButton name="ABOUT ME" pageName="/about"/>
          <NavigationButton name="RESUME" pageName="/resume"/>
          <NavigationButton name="PORTFOLIO" pageName="/portfolio"/>
          <NavigationButton name="PUBLICATIONS" pageName="/publications"/>
          <NavigationButton name="JUST FOR FUN" pageName="/justforfun"/>
        </div>
        <div className="mobile_buttons">
            <Hamburger/>
        </div>
      </nav>
      </React.Fragment>
    )
  }