import React from "react"

import styled from "styled-components"
import { Col, Container, Row } from "reactstrap"

export default {
  title: "Design Library/Font Styles",
  component: "Text",
}

export const Text = () => (
  <TextContainer>
    <Row>
      <Col sm="6">
        <h1>Headline Text 1 - 42/36</h1>
        <h2>Headline Text 2 - 28/26</h2>
        <h3>Headline Text 3 - 22</h3>
        <h4>Headline Text 4 - 22</h4>
        <h5>Headline Text 5 - 22</h5>
        <h6>Headline Text 6 - 22</h6>
        <br />
        <div style={{ fontFamily: "Ringside Narrow", fontWeight: 100 }}>
          Narrow 100
        </div>
        <div style={{ fontFamily: "Ringside Narrow", fontWeight: 200 }}>
          Narrow 200
        </div>
        <div style={{ fontFamily: "Ringside Narrow", fontWeight: 300 }}>
          Narrow 300
        </div>
        <div style={{ fontFamily: "Ringside Narrow", fontWeight: 400 }}>
          Narrow 400
        </div>
        <div style={{ fontFamily: "Ringside Narrow", fontWeight: 500 }}>
          Narrow 500
        </div>
        <div style={{ fontFamily: "Ringside Narrow", fontWeight: 600 }}>
          Narrow 600
        </div>
        <div style={{ fontFamily: "Ringside Narrow", fontWeight: 700 }}>
          Narrow 700
        </div>
        <div style={{ fontFamily: "Ringside Narrow", fontWeight: 800 }}>
          Narrow 800
        </div>
        <div style={{ fontFamily: "Ringside Narrow", fontWeight: 900 }}>
          Narrow 900
        </div>
        <br />
        <div style={{ fontFamily: "Ringside Regular", fontWeight: 400 }}>
          Regular 400
        </div>
        <div style={{ fontFamily: "Ringside Regular", fontWeight: 500 }}>
          Regular 500
        </div>
      </Col>
    </Row>
  </TextContainer>
)

const TextContainer = styled(Container)``
