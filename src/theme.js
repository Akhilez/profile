import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        maxW: { lg: "1024px", md: "768px", sm: "640px", xl: "1280px" },
      },
    },
    Text: {
      baseStyle: {
        color: "gray.300",
      },
    },
    Heading: {
      variants: {
        section: {
          fontSize: "2xl",
          mt: 8,
          mb: 4,
        },
      },
    },
  },
  fonts: {
    body: "Roboto Condensed, system-ui, sans-serif",
    heading: "Roboto Condensed, system-ui, sans-serif",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      "750": "#232b38",
    },
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
