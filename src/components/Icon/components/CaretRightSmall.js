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
      points="1.6,1.2 6.5,7.9 1.6,14.7 "
    />{" "}
  </svg>
)

export default CaretLeftSmall
