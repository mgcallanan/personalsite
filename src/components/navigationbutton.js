import React from "react"
import { Link } from "gatsby"

export default function NavigationButton(props) {
    return (
        <Link to={props.pageName}>
            <button className="navbutton">
                {props.name}
            </button>
        </Link>
    )
}