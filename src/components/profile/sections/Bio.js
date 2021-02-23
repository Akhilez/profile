import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { bio } from "../data/texts"
import { MD } from "../profile_components"

export const Bio = () => (
  <Box>
    <Heading size="md" my={4}>
      Bio
    </Heading>
    <MD source={bio} />
  </Box>
)
