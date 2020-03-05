import React from "react"

const Cart = ({ background = "transparent", stroke = "#848f98", ...rest }) => (
  <svg
    width="31"
    height="26"
    viewBox="0 0 31 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <circle stroke={stroke} strokeMiterlimit="10" cx="23" cy="23" r="1" />
    <circle stroke={stroke} strokeMiterlimit="10" cx="9" cy="23" r="1" />
    <path
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      d="M0,2h5c0.6,0,1.1,0.4,1.1,1l1.7,13c0.1,0.5,0.6,1,1.1,1h15c0.5,0,1.2-0.4,1.4-0.9l3.3-8.1C28.8,7.4,28.5,7,28,7H12"
    />
  </svg>
)

export default Cart
