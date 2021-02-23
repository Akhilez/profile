import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { bio } from "../data/texts"
import { MD } from "../common"

export const Bio = () => (
  <Box>
    <Heading variant="section">Bio</Heading>
    <MD source={bio} />
  </Box>
)
