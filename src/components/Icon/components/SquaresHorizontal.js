import React from "react"

const SquaresHorizontal = ({
  background = "transparent",
  stroke = "#848f98",
  ...rest
}) => (
  <svg
    width="25"
    height="7"
    viewBox="0 0 25 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect stroke={stroke} x="2.5" y="1.5" width="3" height="3" />
    <rect stroke={stroke} x="18.5" y="1.5" width="3" height="3" />
    <rect stroke={stroke} x="10.5" y="1.5" width="3" height="3" />
  </svg>
)

export default SquaresHorizontal
