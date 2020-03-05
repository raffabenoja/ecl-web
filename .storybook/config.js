import React from "react"
import { addDecorator, addParameters, configure } from "@storybook/react"

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import { create } from "@storybook/theming"
import { jsxDecorator } from "storybook-addon-jsx"
import { withA11y } from "@storybook/addon-a11y"

import { action } from "@storybook/addon-actions"

import theme from "../src/utils/theme"
import { ThemeProvider } from "styled-components"

import logo from "./logo.png"
import "../src/css/main.scss"

addDecorator(jsxDecorator)
addDecorator(withA11y)

addParameters({
  jsx: { indent_size: 2 },
  options: {
    theme: create({
      base: "light",
      brandTitle: "ECL",
      brandImage: logo,
    }),
    isFullscreen: false,
    panelPosition: "left",
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module)
