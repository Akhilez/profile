import React from "react"
import {
  Button,
  Box,
  Text,
  Heading,
  Flex,
  Link,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { papersList } from "../data/data"
import { HiExternalLink } from "react-icons/all"

export const Research = () => (
  <Box>
    <Heading variant="section">Research Works</Heading>
    <Wrap spacing={4}>
      {papersList.map(paper => (
        <WrapItem key={paper.title}>
          <Paper paper={paper} />
        </WrapItem>
      ))}
    </Wrap>
  </Box>
)

const Paper = ({ paper }) => (
  <Flex
    h="280px"
    boxShadow="base"
    borderRadius="8px"
    direction="row"
    backgroundColor="gray.750"
  >
    <Box w={{ base: "xs", md: "sm" }} p={4}>
      <Heading fontSize="2xl" mb={4}>
        {paper.title}
      </Heading>
      <Text noOfLines={5}>
        <strong>Abstract: </strong>
        {paper.abstract}
      </Text>
      <Flex>
        <Button
          size="sm"
          mt={4}
          rightIcon={<HiExternalLink />}
          as={Link}
          href={paper.links.paper}
          isExternal
        >
          Read
        </Button>
        {paper.links.app && (
          <Button
            size="sm"
            mt={4}
            ml={4}
            rightIcon={<HiExternalLink />}
            fontWeight="normal"
            as={Link}
            href={paper.links.app}
            isExternal
          >
            Run
          </Button>
        )}
      </Flex>
    </Box>
    <Image
      display={{ base: "none", sm: "block" }}
      src={require("../media/research/" + paper.image)}
      alt={paper.title + "Image"}
      h="100%"
      w="150px"
      borderRightRadius="8px"
    />
  </Flex>
)
