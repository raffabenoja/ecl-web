// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

const Footer = ({ siteTitle }) => (
  <Background>
    <Container>
      <Row>
        <Col>
          844 Dubuque Ave
          <br /> South San Francisco, CA 94080
        </Col>
        <Col>
          HOME
          <br />
          HOW THE ECL WORKS
          <br />
          EXPERIMENTAL CAPABILITIES
          <br />
          ABOUT US
        </Col>
        <Col>
          CAREERS
          <br />
          LEGAL
          <br />
          CONTACT US
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <Col>
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
  padding: 40px 50px;
`
const Copyright = styled.span``
