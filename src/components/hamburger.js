import React, { useState } from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const MenuIcon = styled.button`
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;

    div {
        width: 2rem;
        height: 0.2rem;
        background: #bfbfbf;
        border-radius: 5px;
        transform-origin: 1px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        transition: opacity 300ms, transform 300ms;

        :first-child {
            transform: ${({nav}) => (nav ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({nav}) => (nav ? "0" : "1")};
        }

        :nth-child(3) {
            transform: ${({nav}) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`

const MenuLinks = styled.nav `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    background: #636363;
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 300ms;
    transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};
    z-index: 4;

    ul {
        list-style-type: none;
        vertical-align: center;
        horizontal-align: center;
    }

    li {
        margin-top: 2rem;
    }

    a {
        text-decoration: none;
        color: white;
        font-size:1.5rem;
        font-family: acumin-pro-wide, sans-serif;
        font-weight: 200;
        font-style: normal;
        transition: color 300ms;

        :hover {
            color: #6ab4ff;
        }

    }

`

export default function Hamburger() {
    const [nav, showNav] = useState(false)

    return (
        <div className="hamburger">
            <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                <div />
                <div />
                <div />
            </MenuIcon>
            <MenuLinks nav={nav} className="hamburger_links">
                <ul>
                    <li>
                        <Link to="/resume/">
                            <p>RESUME</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio/">
                            <p>PORTFOLIO</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/publications/">
                            <p>PUBLICATIONS</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/justforfun/">
                            <p>JUST FOR FUN</p>
                        </Link>
                    </li>
                </ul>
            </MenuLinks>
        </div>
    )
}