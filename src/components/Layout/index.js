import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "reactstrap"

import { Footer, Header } from "components"
import "css/main.scss"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
