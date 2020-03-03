import React from "react"

const CaretLeftLarge = ({
  background = "transparent",
  stroke = "#848f98",
  ...rest
}) => (
  <svg
    width="23"
    height="48"
    viewBox="0 0 23 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <polyline
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      points="1.5,45.7 20.4,23.5 1.5,1.3 "
    />
  </svg>
)

export default CaretLeftLarge
