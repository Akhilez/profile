import React from "react"
import { Box } from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../theme"
import { ProfileNavBar } from "./navbar"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
})

export const GlobalWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider
      theme={theme}
      initialColorMode={theme.config.initialColorMode}
    >
      <ProfileNavBar />
      {children}
    </ChakraProvider>
  </QueryClientProvider>
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
