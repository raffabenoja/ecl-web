import React from "react"

const Hotdog = ({
  background = "transparent",
  stroke = "#848f98",
  ...rest
}) => (
  <svg
    width="24"
    height="14"
    viewBox="0 0 24 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <line fill="none" stroke={stroke} x1="0" y1="2" x2="24" y2="2" />
    <line fill="none" stroke={stroke} x1="0" y1="12" x2="24" y2="12" />
  </svg>
)

export default Hotdog
