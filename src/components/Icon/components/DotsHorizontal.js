import React from "react"

const DotsHorizontal = ({
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
    <circle stroke={stroke} cx="20" cy="3" r="1.5" />
    <circle stroke={stroke} cx="12" cy="3" r="1.5" />
    <circle stroke={stroke} cx="4" cy="3" r="1.5" />
  </svg>
)

export default DotsHorizontal
