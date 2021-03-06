import React from "react"

const Hamburger = ({
  background = "transparent",
  stroke = "#848f98",
  ...rest
}) => (
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <line
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      x1="0"
      y1="2"
      x2="24"
      y2="2"
    />
    <line
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      x1="0"
      y1="9"
      x2="24"
      y2="9"
    />
    <line
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      x1="0"
      y1="16"
      x2="24"
      y2="16"
    />
  </svg>
)

export default Hamburger
