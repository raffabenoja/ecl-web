import React from "react"

const Plus = ({ background = "transparent", stroke = "#848f98", ...rest }) => (
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <line stroke={stroke} x1="0" y1="9.5" x2="19" y2="9.5" />
    <line stroke={stroke} x1="9.5" y1="0" x2="9.5" y2="19" />{" "}
  </svg>
)

export default Plus
