import React from "react"

import { Container } from "reactstrap"

import Logo from "./Logo"

export default {
  title: "Components/HeaderNav/Logo",
  component: Logo,
  decorators: [storyFn => <Container>{storyFn()}</Container>],
}

export const dark = () => <Logo dark={true} />
export const light = () => (
  <div style={{ backgroundColor: "gray" }}>
    <Logo dark={false} />
  </div>
)
