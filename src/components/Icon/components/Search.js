import React from "react"

const Hamburger = ({
  background = "transparent",
  stroke = "#848f98",
  ...rest
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <line
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      strokeLinecap="butt"
      x1="13.9"
      y1="14"
      x2="18.6"
      y2="18.6"
    />
    <circle
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      cx="9"
      cy="9"
      r="7"
    />
  </svg>
)

export default Hamburger
