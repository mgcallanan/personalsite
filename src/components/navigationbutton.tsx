import React from "react"
import { Link } from "gatsby"

interface NavigationButtonProps {
  pageName: string
  name: string
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  pageName,
  name,
}) => {
  return (
    <Link to={pageName}>
      <button className="navbutton">{name}</button>
    </Link>
  )
}

export default NavigationButton
