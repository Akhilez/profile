import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { codingActivity } from "../data/texts"
import ReactTooltip from "react-tooltip"
import GitHubCalendar from "react-github-calendar"
import { MD } from "../common"

export const CodingActivity = () => (
  <Box>
    <Heading variant="section">Coding Activity</Heading>
    <MD source={codingActivity} />
    <GitHubCalendar
      username="Akhilez"
      theme={{
        background: "transparent",
        text: "#fff",
      }}
      blockSize={14}
      blockMargin={4}
    >
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
  </Box>
)
