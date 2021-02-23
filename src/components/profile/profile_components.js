import React from "react"
import { Box } from "@chakra-ui/react"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../../theme"
import { ProfileNavBar } from "./navbar"

export const GlobalWrapper = ({ children }) => (
  <ChakraProvider
    theme={theme}
    initialColorMode={theme.config.initialColorMode}
  >
    <ProfileNavBar />
    {children}
  </ChakraProvider>
)

export const MD = ({ source, ...props }) => (
  <Box
    as={ReactMarkdown}
    plugins={[gfm]}
    renderers={ChakraUIRenderer()}
    escapeHtml={false}
    source={source}
    {...props}
  />
)

export const MyGithubCalendar = () => {
  const theme = {
    background: "transparent",
    text: "#fff",
  }

  return (
    <GitHubCalendar
      username="Akhilez"
      theme={theme}
      blockSize={14}
      blockMargin={4}
    >
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
  )
}
