import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "reactstrap"

import { FooterNav, HeaderNav } from "components"
import "css/main.scss"

const Layout = ({ clearNav, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HeaderNav siteTitle={data.site.siteMetadata.title} clearNav={clearNav} />
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <FooterNav />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  clearNav: PropTypes.bool,
}

export default Layout
