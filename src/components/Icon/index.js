import React from "react"
import PropTypes from "prop-types"
import * as Icons from "./components"

const validIcons = [
  "Bag",
  "Cart",
  "CaretDownLarge",
  "CaretLeftLarge",
  "CaretLeftSmall",
  "CaretRightLarge",
  "CaretRightSmall",
  "Close",
  "DotsHorizontal",
  "DotsVertical",
  "Hamburger",
  "Hotdog",
  "Plus",
  "Search",
  "SquaresHorizontal",
  "SquaresVertical",
]

export default class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.oneOf(validIcons).isRequired,
    stroke: PropTypes.string,
    background: PropTypes.string,
  }

  render() {
    const { name, ...rest } = this.props
    if (!name) {
      return console.error(
        "You must provide the name of the icon, valid icons are: ",
        validIcons
      )
    }
    const IconComponent = Icons[name]
    return <IconComponent {...rest} />
  }
}
