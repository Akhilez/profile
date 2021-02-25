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
        grade4: "hsl(217, 38%, 20%)",
        grade3: "hsl(217, 38%, 35%)",
        grade2: "hsl(217, 38%, 55%)",
        grade1: "hsl(217, 38%, 72%)",
        grade0: "#eee",
      }}
      blockSize={14}
      blockMargin={4}
    >
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
    <div
      id="retainable-rss-embed"
      data-rss="https://medium.com/feed/@akhilez"
      data-maxcols="3"
      data-layout="grid"
      data-poststyle="inline"
      data-readmore="Read the rest"
      data-buttonclass="btn btn-primary"
      data-offset="-100"
    ></div>
  </Box>
)
