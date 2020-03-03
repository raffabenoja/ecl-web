import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Layout, Image, SEO } from "components"

const IndexPage = () => (
  <>
    <Background />
    <Layout clearNav={true}>
      <SEO title="Home" />
      <H1>Hi people</H1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div style={{ height: "1000px" }} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </>
)

export default IndexPage

const H1 = styled.h1`
  text-decoration: underline;
`

const Background = styled.div`
  background-color: darkgray;
  height: 500px;
  position: absolute;
  width: 100%;
`
