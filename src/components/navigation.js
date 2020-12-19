import React from "react"
import NavigationButton from "../components/navigationbutton"
import Hamburger from "../components/hamburger"
import "../styles/header.css"

export default function Navigation() {

  return (
    <React.Fragment>
        <div className="buttons">
            <NavigationButton name="RESUME" pageName="/resume"/>
            <NavigationButton name="PORTFOLIO" pageName="/portfolio"/>
            <NavigationButton name="PUBLICATIONS" pageName="/publications"/>
            {/*<NavigationButton name="JUST FOR FUN" pageName="/justforfun"/>*/}
        </div>
        <div className="mobile_buttons">
            <Hamburger/>
        </div>
    </React.Fragment>
  )
}