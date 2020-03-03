import React from "react"

const Bag = ({ background = "transparent", stroke = "#848f98", ...rest }) => (
  <svg
    width="34"
    height="38"
    viewBox="0 0 34 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      d="M29,36H5c-1.7,0-3-1.6-3-3.5L4,15h26l2,17.5C32,34.4,30.7,36,29,36z"
    />
    <path
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      d="M11.8,11c0-1.4,0.6-9,5.2-9s5,8.6,5,9"
    />
  </svg>
)

export default Bag
