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

export function ProfileBadge2() {
  return (
    <Box className={"profileBadgeContainer"} ml={{ base: "10%", sm: 0 }}>
      <Row>
        <Col sm={"auto"}>
          <img
            src={profilePhoto}
            className={"profile_img"}
            alt={"profilePhoto"}
          />
        </Col>
        <Col sm={"auto"}>
          <div style={{ marginTop: 20 }}>
            <h1 className={"light_font"} style={{ fontSize: 58 }}>
              Akhil Devarashetti
            </h1>

            <div style={{ fontSize: 28, marginTop: -10 }}>
              Deep Learning Engineer
            </div>
            <div style={{ fontSize: 22 }} className="roboto-light-ak no_href">
              <a href="mailto: akhilez.ai@gmail.com">
                {" "}
                akhilez.ai<span style={{ color: "#8d9599" }}>@gmail.com</span>
              </a>
            </div>
            <Social />
            <ResumeButton />
          </div>
        </Col>
      </Row>
    </Box>
  )
}

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
  <Box my={4}>
    <Wrap my={2} align="center" justify={justify} spacing={8}>
      <WrapItem>
        <Avatar src={profilePhoto} name="Akhil Devarashetti" size="2xl" />
      </WrapItem>
      <WrapItem>
        <Box justify={justify} textAlign={justify}>
          <Heading as="h1">Akhil Devarashetti</Heading>
          <Text>Deep Learning Engineer</Text>
          <CLink
            fontSize="md"
            href="mailto: akhilez.ai@gmail.com"
            mt={1}
            _hover={{ textDecoration: "underline", color: "gray.500" }}
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
          fontWeight="normal"
          _hover={{
            backgroundColor: "gray.700",
            color: "white",
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
