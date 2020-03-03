import React from "react"

const CaretLeftSmall = ({
  background = "transparent",
  stroke = "#848f98",
  ...rest
}) => (
  <svg
    width="9"
    height="16"
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <polyline
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      points="7.3,14.7 2.5,8 7.3,1.2 "
    />
  </svg>
)

export default CaretLeftSmall
