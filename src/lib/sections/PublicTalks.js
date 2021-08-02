import * as React from "react"
import { Box, Flex, Heading, HStack, Link, Tag, Text } from "@chakra-ui/react"
import { BsCode, FaAndroid } from "react-icons/all"

export const PublicTalks = () => (
  <Box>
    <Heading variant="section">Public Talks</Heading>
    <Flex
      direction={{ base: "column", sm: "row" }}
      boxShadow="base"
      borderRadius="8px"
      backgroundColor="gray.750"
      p={4}
    >
      <Box
        as="iframe"
        width="full"
        height="360px"
        borderRadius="8px"
        src="https://www.youtube.com/embed/Flz0QvJE0J0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Akhil speaks Reinforcement Learning at CincyML"
      />
      <Box p={4}>
        <Heading fontSize="xl" mb={2} fontWeight="normal">
          Overview on Reinforcement Learning
        </Heading>
        <Text fontSize="xs" mb={4}>
          July 15, 2021
        </Text>
        <Text noOfLines={4} mb={4}>
          I spoke at this July's CincyML meetup where I introduced Reinforcement
          Learning in a very approachable way. I used PyTorch and other
          libraries to train my machine to play games like GridWorld and even
          Super Mario.
        </Text>
        {["reinforcement learning", "pytorch", "gym"].map(tag => (
          <Tag key={tag} borderRadius="full" mr={2} mt={2}>
            {tag}
          </Tag>
        ))}
        <HStack mt={2}>
          <Link href="https://github.com/Akhilez/reward_lab/tree/main/rl_talk">
            <BsCode />
          </Link>
          <Link href="https://docs.google.com/presentation/d/1A9Kxp66BmAQGLjG_jnkvkeEwdamMoS2SnkpFqmREvSc/edit?usp=sharing">
            ppt
          </Link>
          <Link href="https://www.meetup.com/Cincinnati-Machine-Learning-Meetup/events/lwnfvrycckbtb/">
            meetup
          </Link>
        </HStack>
      </Box>
    </Flex>
  </Box>
)
