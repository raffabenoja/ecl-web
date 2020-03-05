import React from "react"

const Close = ({ background = "transparent", stroke = "#848f98", ...rest }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <line
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      x1="1.4"
      y1="1.4"
      x2="14.4"
      y2="14.4"
    />
    <line
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      x1="1.4"
      y1="14.4"
      x2="14.4"
      y2="1.4"
    />
  </svg>
)

export default Close
