// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

import { device } from "utils"

// TODO: Added href links
const Footer = ({ siteTitle }) => (
  <Background>
    <Container>
      <Row>
        <Col sm={12} md={4} lg={4}>
          <Address>
            844 Dubuque Ave
            <br /> South San Francisco, CA 94080
          </Address>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <a href="#">HOME</a>
          <br />
          <a href="#">HOW THE ECL WORKS</a>
          <br />
          <a href="#">EXPERIMENTAL CAPABILITIES</a>
          <br />
          <a href="#">ABOUT US</a>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <a href="#">CAREERS</a>
          <br />
          <a href="#">LEGAL</a>
          <br />
          <a href="#">CONTACT US</a>
        </Col>
      </Row>
      <Row style={{ marginTop: "55px" }}>
        <Col sm={12} md={12} lg={12}>
          <Copyright>
            © {new Date().getFullYear()} Emerald Cloud Lab, Inc.
          </Copyright>
        </Col>
      </Row>
    </Container>
  </Background>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

const Background = styled.div`
  background-color: #16191c;
  color: #7b8690;
  padding: 55px 10px 40px 10px;

  @media ${device.lg} {
    padding: 40px 50px;
  }

  a {
    color: rgb(154, 154, 154);
    font-size: 14px;
    line-height: 30px;
    font-weight: 500;

    &:hover {
      color: rgba(177, 186, 194, 0.6);
      text-decoration: none;
    }
  }
`
const Address = styled.address`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 50px;
`

const Copyright = styled.span`
  font-family: "Ringside Regular";
  font-size: 12px;
  font-weight: 300;
  color: #76828c;
  margin-top: 55px;
`
