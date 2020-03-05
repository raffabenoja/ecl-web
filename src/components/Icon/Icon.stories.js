import React from "react"

import { withKnobs, color } from "@storybook/addon-knobs"

import Icon from "."

export default {
  title: "Components/Shared/Icons",
  component: Icon,
  decorators: [
    storyFn => <div style={{ padding: "40px" }}>{storyFn()}</div>,
    withKnobs,
  ],
}

export const Bag = () => <Icon name="Bag" stroke={color("Stroke", "#333333")} />
export const Cart = () => (
  <Icon name="Cart" stroke={color("Stroke", "#333333")} />
)
export const CaretDownLarge = () => (
  <Icon name="CaretDownLarge" stroke={color("Stroke", "#333333")} />
)
export const CaretLeftSmall = () => (
  <Icon name="CaretLeftSmall" stroke={color("Stroke", "#333333")} />
)
export const CaretRightSmall = () => (
  <Icon name="CaretRightSmall" stroke={color("Stroke", "#333333")} />
)
export const CaretLeftLarge = () => (
  <Icon name="CaretLeftLarge" stroke={color("Stroke", "#333333")} />
)
export const CaretRightLarge = () => (
  <Icon name="CaretRightLarge" stroke={color("Stroke", "#333333")} />
)
export const Close = () => (
  <Icon name="Close" stroke={color("Stroke", "#333333")} />
)
export const DotsHorizontal = () => (
  <Icon name="DotsHorizontal" stroke={color("Stroke", "#333333")} />
)
export const DotsVertical = () => (
  <Icon name="DotsVertical" stroke={color("Stroke", "#333333")} />
)
export const Hamburger = () => (
  <Icon name="Hamburger" stroke={color("Stroke", "#333333")} />
)
export const Hotdog = () => (
  <Icon name="Hotdog" stroke={color("Stroke", "#333333")} />
)
export const Plus = () => (
  <Icon name="Plus" stroke={color("Stroke", "#333333")} />
)
export const SquaresHorizontal = () => (
  <Icon name="SquaresHorizontal" stroke={color("Stroke", "#333333")} />
)
export const SquaresVertical = () => (
  <Icon name="SquaresVertical" stroke={color("Stroke", "#333333")} />
)
export const Search = () => (
  <Icon name="Search" stroke={color("Stroke", "#333333")} />
)
