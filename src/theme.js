import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
  fonts: {
    body: "Roboto Condensed, system-ui, sans-serif",
    heading: "Roboto Condensed, system-ui, sans-serif",
  },
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    backgroundColor: "gray.100",
  },
  breakpoints: createBreakpoints({
    base: "150px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1500px",
  }),
  shadows: { outline: "none" },
})
