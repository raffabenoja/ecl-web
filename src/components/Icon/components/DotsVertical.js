import React from "react"

const DotsVertical = ({
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
    <circle stroke={stroke} cx="3" cy="4" r="1.5" />
    <circle stroke={stroke} cx="3" cy="12" r="1.5" />
    <circle stroke={stroke} cx="3" cy="20" r="1.5" />
  </svg>
)

export default DotsVertical
