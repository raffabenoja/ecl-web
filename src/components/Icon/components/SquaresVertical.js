import React from "react"

const SquaresVertical = ({
  background = "transparent",
  stroke = "#848f98",
  ...rest
}) => (
  <svg
    width="7"
    height="25"
    viewBox="0 0 7 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect stroke={stroke} x="2" y="2" width="3" height="3" />
    <rect stroke={stroke} x="2" y="11" width="3" height="3" />
    <rect stroke={stroke} x="2" y="20" width="3" height="3" />
  </svg>
)

export default SquaresVertical
