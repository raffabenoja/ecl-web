import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Link as GatsbyLink } from "gatsby"

import { device } from "utils"

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import Logo from "./Logo"
import HamburgerSVG from "images/hamburger.svg"
import CloseSVG from "images/close.svg"

const HeaderNav = ({ clearNav, section }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useState()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const darkBar = clearNav

    setDark(darkBar)

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY

      if (darkBar) {
        setDark(scrollTop < 30)
      }
    })
    // eslint-disable-next-line
  }, [])

  return (
    <Background dark={dark}>
      <StyledNavbar
        className="justify-content-between"
        dark={dark ? true : false}
        expand="lg"
        fixed="top"
        isOpen={isOpen}
        light={dark ? false : true}
      >
        <StyledContainer>
          <StyledNavbarBrand href="/">
            <Logo dark={!dark && !isOpen} />
          </StyledNavbarBrand>
          <NavbarToggler onClick={toggle} />
          <StyledCollapse isOpen={isOpen} navbar>
            <StyledNav className="ml-auto" navbar dark={dark}>
              {isOpen && (
                <NavItem>
                  <NavLink
                    active={section === "how-it-works"}
                    to="/"
                    tag={GatsbyLink}
                  >
                    HOME
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink
                  active={section === "how-it-works"}
                  to="/"
                  tag={GatsbyLink}
                >
                  HOW THE ECL WORKS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={section === "experiments"}
                  to="/"
                  tag={GatsbyLink}
                >
                  EXPERIMENTAL CAPABILITIES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={section === "about-us"}
                  to="/"
                  tag={GatsbyLink}
                >
                  ABOUT US
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={section === "download"}
                  to="/"
                  tag={GatsbyLink}
                >
                  DOWNLOAD
                </NavLink>
              </NavItem>
            </StyledNav>
          </StyledCollapse>
        </StyledContainer>
      </StyledNavbar>
    </Background>
  )
}

HeaderNav.propTypes = {
  initialDark: PropTypes.bool,
}

HeaderNav.defaultProps = {
  initialDark: true,
}

export default HeaderNav

const Background = styled.div`
  margin-top: 54px;

  @media ${device.lg} {
    margin-top: 50px;
  }

  a {
    color: rgb(154, 154, 154);
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;

    &:hover {
      color: rgba(177, 186, 194, 0.6);
      text-decoration: none;
    }
  }
`

const StyledContainer = styled(Container)`
  height: 55px;

  @media ${device.lg} {
    height: 50px;
  }
`

const StyledNavbar = styled(Navbar)`
  height: 56px;
  padding: 0 5px 0 13px;

  @media ${device.lg} {
    height: 51px;
    padding: 0;
  }

  /* background-color: ${({ isOpen, scrolled }) =>
    isOpen ? "#16191c" : scrolled ? "#fff" : "transparent"}; */

  && {
    > .container {
      padding: 0;
    }
  }

  &.navbar-dark {
    background-color: ${({ isOpen, scroll }) =>
      isOpen ? "#16191c" : "transparent"};
    transition: background-color 0.1s linear
  }

  &.navbar-light {
    background-color: ${({ isOpen }) => (isOpen ? "#16191c" : "#fff")};
    border-bottom: 1px solid #e9e9e9;
    transition: background-color 0.3s linear
  }

  .navbar-toggler {
    border: 0;

    .navbar-toggler-icon {
      background-image: ${({ isOpen }) =>
        isOpen ? `url(${CloseSVG})` : `url(${HamburgerSVG})`};
      height: 18px;
      margin-bottom: ${({ isOpen }) => (isOpen ? "3px" : 0)};
      margin-right: ${({ isOpen }) => (isOpen ? "-1px" : 0)};
      stroke-width: 2px;
      width: 18px;
    }
  }
`

const StyledNav = styled(Nav)`
  > .nav-item {
    > .nav-link {
      letter-spacing: 0.015em;
      padding: 0 29px;
      text-transform: uppercase;

      &.active:after {
        border-bottom: 1px solid ${({ dark }) => (dark ? "#fff" : "#000")};
        content: "";
        display: block;
        position: relative;
        top: -3px;
      }
    }
  }

  > .nav-item:last-child {
    > .nav-link {
      padding-right: 0;
    }
  }
`

const StyledNavbarBrand = styled(NavbarBrand)`
  padding: 9px 0;
`

const StyledCollapse = styled(Collapse)`
  background-color: transparent;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 55px;
  left: 0;

  .navbar-nav {
    .nav-link {
      opacity: 0;
    }
  }

  &.show {
    background-color: #16191c;
    border-top: 1px solid #464646;
    padding: 10px 25px;

    .navbar-nav {
      .nav-link {
        color: #b1bac2;
        font-size: 18px;
        font-weight: 500;
        line-height: 48px;
        opacity: 1;
        padding: 0;
      }
    }

    .navbar-nav > .nav-item > .nav-link {
      &.active:after {
        border-bottom: none;
      }
    }
  }

  @media ${device.lg} {
    background: transparent;
    border: none;
    height: auto;
    margin: auto;
    position: block;
    top: unset;

    .navbar-nav {
      .nav-link {
        opacity: 1;
      }
    }
  }
`
