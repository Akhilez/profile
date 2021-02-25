import React from "react"
import { Box, Heading, UnorderedList, ListItem, Link } from "@chakra-ui/react"

export const Misc = () => (
  <Box>
    <Heading variant="section">More about me</Heading>
    <UnorderedList>
      <ListItem>I am a huge space nerd</ListItem>
      <ListItem>I sketch really well</ListItem>
      <ListItem>
        I like reading books. My books list @{" "}
        <Link href="https://goodreads.com/akhilez">good reads</Link>
      </ListItem>
      <ListItem>
        My{" "}
        <Link href="http://kmit.in/emagazine/author/akhil-kanna/">
          older blog
        </Link>{" "}
        from undergrad
      </ListItem>
    </UnorderedList>
  </Box>
)
