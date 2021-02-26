import React from "react"
import { Flex, Text, Box, Heading, Image } from "@chakra-ui/react"
import { timeline } from "../data/texts"
import { MD } from "../common"

const TimelineBox = ({
  timeline: { description, role, year, org, img },
  ...props
}) => (
  <Flex>
    <Text w="50px" mt={2} color="gray.400" {...props}>
      {year}
    </Text>
    <Flex borderLeftColor="gray.100" borderLeftWidth={2} w="100%" {...props}>
      <Box
        w="10px"
        h="10px"
        backgroundColor="gray.100"
        ml="-6px"
        mt="15px"
        borderRadius="5px"
      />
      <Flex direction={{ base: "column", sm: "row" }}>
        <Box w="100px" p={2} ml={2} align="center">
          <Image src={img} maxW="50px" maxH="50px" mt={4} borderRadius="md" />
        </Box>
        <Box m={2} w="100%">
          <Text fontSize="xl">{role}</Text>
          <Text color="gray.400">{org}</Text>
          <MD source={description} />
        </Box>
      </Flex>
    </Flex>
  </Flex>
)

export const Timeline = () => (
  <Box my={8} w="full">
    <Heading variant="section">Timeline</Heading>
    <TimelineBox timeline={timeline.vndly} pt={4} borderTopRightRadius="lg" />
    <TimelineBox timeline={timeline.uc} />
    <TimelineBox timeline={timeline.aviso} />
    <TimelineBox timeline={timeline.kmit_dev} />
    <TimelineBox timeline={timeline.kmit} pb={4} borderBottomRightRadius="lg" />
  </Box>
)
