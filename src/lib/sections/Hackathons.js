import React from "react"
import { Box, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { hackathonsList } from "../data/data"

export const Hackathons = () => (
  <Box>
    <Heading variant="section">Hackathons</Heading>
    <Wrap spacing={4}>
      {hackathonsList.map(hackathon => (
        <WrapItem key={hackathon.title}>
          <Hackathon hackathon={hackathon} />
        </WrapItem>
      ))}
    </Wrap>
  </Box>
)

const Hackathon = ({ hackathon: { title, date, img, result, desc } }) => (
  <Box maxW="380px">
    <Image src={img} h="230px" w="100%" borderRadius="md" />
    <Heading fontSize="lg" mt={2}>
      {title}
    </Heading>
    <Text fontSize="sm" color="gray.400" my={1}>
      {date} | {result}
    </Text>
    <Text>{desc}</Text>
  </Box>
)
