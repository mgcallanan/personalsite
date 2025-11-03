import React from "react"
import NavigationButton from "./navigationbutton"
import Hamburger from "./hamburger"
import "../styles/header.css"

interface NavigationProps {
  isOpen?: boolean
  onToggle?: () => void
}

const Navigation: React.FC<NavigationProps> = ({
  isOpen = false,
  onToggle,
}) => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <React.Fragment>
      <div
        className={`buttons navigation-bar-centered ${
          isMobile ? "hidden" : ""
        }`}
      >
        <NavigationButton name="HOME" pageName="/" />
        <NavigationButton name="RESUME" pageName="/resume" />
        <NavigationButton name="PORTFOLIO" pageName="/portfolio" />
        <NavigationButton name="PUBLICATIONS" pageName="/publications" />
      </div>
      {isMobile && (
        <div className="mobile_buttons">
          <Hamburger isOpen={isOpen} onToggle={onToggle} />
        </div>
      )}
    </React.Fragment>
  )
}

export default Navigation
