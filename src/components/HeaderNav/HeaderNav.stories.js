import React from "react"
import styled from "styled-components"

import { Container } from "reactstrap"

import HeaderNav from "."

export default {
  title: "Components/HeaderNav",
  component: HeaderNav,
  decorators: [
    storyFn => (
      <div style={{ height: "5000px" }}>
        {storyFn()}
        <Container style={{ height: "1000px", marginTop: "5rem" }}>
          <p>
            Qui esse velit adipisicing laboris non quis id id nulla eiusmod
            dolor eu mollit. Adipisicing adipisicing ipsum cillum ullamco
            ullamco nisi esse eu ipsum officia anim ad. Enim sit aliqua sunt
            minim incididunt. Reprehenderit aliquip voluptate magna culpa. Ad
            dolor nulla exercitation sit in ad esse dolor in ea enim proident
            minim.
          </p>
          <p>
            Reprehenderit labore sunt non deserunt eiusmod. Qui ullamco esse
            commodo dolor et anim dolore enim sunt cillum fugiat voluptate
            proident consectetur. Sit enim cupidatat proident ad eu.
            Reprehenderit nostrud anim ut magna quis ut qui velit exercitation
            deserunt nulla.
          </p>
          <p>
            Ut velit anim ut ipsum reprehenderit aliqua elit pariatur eu officia
            proident minim ea. Cupidatat aliquip excepteur amet nisi ut
            reprehenderit velit. Id deserunt consequat culpa laboris Lorem nisi
            officia consequat pariatur est. Id ad enim ea nulla deserunt non
            duis minim.
          </p>
          <p>
            Eiusmod eu laborum officia magna sunt officia duis cupidatat anim
            enim dolor incididunt. Nisi non ut laborum occaecat sit aliquip
            deserunt et culpa eiusmod fugiat pariatur esse. Est mollit culpa
            veniam reprehenderit ullamco mollit cupidatat consectetur labore
            esse enim. Cillum voluptate et officia magna elit dolor ex laborum
            nulla pariatur.
          </p>
        </Container>
      </div>
    ),
  ],
}

export const dark = () => (
  <>
    <Background />
    <HeaderNav clearNav={true} section="how-it-works" />
  </>
)
export const light = () => <HeaderNav clearNav={false} section="download" />

const Background = styled.div`
  background-color: darkgray;
  height: 500px;
  position: absolute;
  width: 100%;
  z-index: -1000;
`
