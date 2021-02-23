import {
  Avatar,
  Box,
  Wrap,
  Text,
  Heading,
  IconButton,
  HStack,
  Flex,
  Link as CLink,
  Image,
  WrapItem,
  Button,
} from "@chakra-ui/react"
import { Col, Row } from "react-bootstrap"
import profilePhoto from "../media/profile_photo.jpg"
import mediumLogo from "../media/medium_logo.png"
import React from "react"
import { ResumeButton, Social } from "../profile_components"
import { FaLinkedinIn, FaGithub } from "react-icons/all"
import urls from "../../urls.json"
import { Link } from "gatsby"

const SocialIcon = ({ color, icon, url }) => (
  <CLink href={url} isExternal>
    <IconButton
      backgroundColor="gray.700"
      color="white"
      _hover={{ backgroundColor: color, transitionDuration: "0.4s" }}
      icon={icon}
      isRound
    />
  </CLink>
)

const justify = { base: "center", sm: "left" }

export const ProfileBadge = () => (
  <Box my={8}>
    <Wrap my={2} align="center" justify={justify} spacing={8}>
      <WrapItem>
        <Avatar src={profilePhoto} name="Akhil Devarashetti" size="2xl" />
      </WrapItem>
      <WrapItem>
        <Box justify={justify} textAlign={justify}>
          <Heading as="h1">Akhil Devarashetti</Heading>
          <Text fontSize="lg">Deep Learning Engineer</Text>
          <CLink
            href="mailto: akhilez.ai@gmail.com"
            mt={1}
            _hover={{ textDecoration: "none", color: "gray.300" }}
            color="gray.400"
          >
            akhilez.ai@gmail.com
          </CLink>
        </Box>
      </WrapItem>
    </Wrap>
    <Wrap align="center" spacing={6} justify={justify}>
      <WrapItem>
        <HStack>
          <SocialIcon
            icon={<FaLinkedinIn />}
            color="#0e76a8"
            url="https://www.linkedin.com/in/akhilez/"
          />
          <SocialIcon
            icon={<FaGithub />}
            color="black"
            url="https://github.com/Akhilez"
          />
          <SocialIcon
            icon={<Image src={mediumLogo} alt="medium" height="24px" />}
            color="black"
            url="https://akhilez.medium.com/"
          />
        </HStack>
      </WrapItem>
      <WrapItem>
        <Button
          as={Link}
          to={urls.resume.url}
          variant="outline"
          borderColor="gray.600"
          color="gray.500"
          fontWeight="normal"
          _hover={{
            backgroundColor: "gray.700",
            color: "gray.400",
            transitionDuration: "0.4s",
            textDecoration: "none",
          }}
        >
          RESUME
        </Button>
      </WrapItem>
    </Wrap>
  </Box>
)
