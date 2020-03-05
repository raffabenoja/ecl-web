import React from "react"

const CaretDownLarge = ({
  background = "transparent",
  stroke = "#848f98",
  ...rest
}) => (
  <svg
    width="48"
    height="23"
    viewBox="0 0 48 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <polyline stroke={stroke} points="1.8,1.6 24,20.4 46.2,1.6 " />
  </svg>
)

export default CaretDownLarge
