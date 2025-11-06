import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  nav: boolean
}

interface StyledNavProps extends React.HTMLAttributes<HTMLElement> {
  nav: boolean
}

const StyledButton = styled.button.attrs<StyledButtonProps>(({ onClick }) => ({
  type: "button",
  onClick,
}))<StyledButtonProps>`
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
  padding: 0;

  div {
    width: 2rem;
    height: 0.2rem;
    background: #ffffff;
    border-radius: 4px;
    transform-origin: center;
    position: relative;
    margin: 0 auto;
    transition: all 300ms ease;

    :first-child {
      transform: ${({ nav }) =>
        nav ? "translateY(0.7rem) rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
      transform: ${({ nav }) =>
        nav ? "translateX(100%)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "translateY(-0.7rem) rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const StyledNav = styled.nav.attrs<StyledNavProps>(({ className }) => ({
  className,
}))<StyledNavProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 300ms ease;
  transform: ${({ nav }) =>
    nav ? "translateX(0)" : "translateX(100%)"};
  z-index: 4;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 2rem 0;
    opacity: ${({ nav }) => (nav ? "1" : "0")};
    transition: opacity 300ms ease;
    transition-delay: ${({ nav }) => (nav ? "200ms" : "0")};
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-family: acumin-pro-wide, sans-serif;
    font-weight: 300;
    letter-spacing: 0.1em;
    transition: color 200ms ease;

    &:hover {
      color: #6ab4ff;
    }

    p {
      margin: 0;
    }
  }
`

interface HamburgerProps {
  isOpen?: boolean
  onToggle?: () => void
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen = false, onToggle }) => {
  return (
    <div className="hamburger">
      <StyledButton nav={isOpen} onClick={onToggle} aria-label="Menu">
        <div />
        <div />
        <div />
      </StyledButton>
      <StyledNav nav={isOpen} className="hamburger_links">
        <ul>
          <li>
            <Link to="/">
              <p>HOME</p>
            </Link>
          </li>
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
        </ul>
      </StyledNav>
    </div>
  )
}

export default Hamburger
