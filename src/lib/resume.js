import React from "react"
import { Flex, Stack, Box, Container } from "@chakra-ui/react"
import { MdFileDownload } from "react-icons/md"

export default class Resume extends React.Component {
  constructor(props) {
    super(props)
    this.resumeUrl = "https://storage.googleapis.com/akhilez/resume.pdf"
    // this.resumeUrl = 'https://docs.google.com/document/d/e/2PACX-1vSDPNxZzflcPBIwu0uFWfkK7S9Isa4YBIP82H4AJx-3i7UQmQYdTnkdcHrF835mmlhoMNr4EPzIo6RN/pub?embedded=true';
  }

  render() {
    return (
      <Container>
        <Stack alignItems="center">
          <Flex pb={4}>
            <h1>Resume</h1>
            <a href={this.resumeUrl} download={"latest.pdf"}>
              <Flex justifyContent="center">
                <Box as={MdFileDownload} ml={2} mt={1} />
              </Flex>
            </a>
          </Flex>
          <embed src={this.resumeUrl} width="100%" height="1120px" />
        </Stack>
      </Container>
    )
  }
}
