import React from "react"

import { boolean, text, withKnobs } from "@storybook/addon-knobs"
import { Col, Container, Row } from "reactstrap"

import VimeoPlayer from "."

export default {
  title: "Components/VimeoPlayer",
  component: VimeoPlayer,
  decorators: [
    storyFn => (
      <Container>
        <Row>
          <Col sm={12} md={5} lg={4}>
            {storyFn()}
          </Col>
        </Row>
      </Container>
    ),
    withKnobs,
  ],
}

export const Default = () => (
  <VimeoPlayer
    autoplay={boolean("Autoplay", true)}
    height={text("Height", "320")}
    src={text("Video URL", "https://player.vimeo.com/video/320831261")}
    title={text("Title", "ECL Video")}
    width={text("Width", "640")}
  />
)
