import React from "react"
import ak_logo from "./media/ak_logo.svg"
import urls from "../urls.json"
import {
  Box,
  Link,
  Flex,
  Container,
  Image,
  useColorMode,
  HStack,
} from "@chakra-ui/react"
import { Link as GLink } from "gatsby"
import { FiMenu } from "react-icons/all"
import profilePhoto from "./media/profile_photo.jpg"
import { Helmet } from "react-helmet"

function NavItem({ href, text }) {
  return (
    <Link
      as={GLink}
      to={href}
      py={2}
      px={3}
      href={href}
      fontSize="sm"
      display="block"
      _hover={{ color: "white", textDecoration: "none" }}
    >
      {text}
    </Link>
  )
}

function MetaTags() {
  let desc =
    "Deep Learning Engineer. Master's in AI 🎓. Neural Nets 🧠, Web 🖥, Mobile 📱, Cloud ☁️, UI."
  let title = "Akhil D. (Akhilez)"
  return (
    <Helmet>
      <title>Akhilez</title>

      <meta name="description" content={desc} />

      <meta name="twitter:image:src" content={profilePhoto} />
      <meta name="twitter:site" content="@akhilez_" />
      <meta name="twitter:creator" content="@akhilez_" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />

      <meta property="og:image" content={profilePhoto} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="object" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://akhil.ai" />
      <meta property="og:description" content={desc} />
    </Helmet>
  )
}

export default function ProfileNavBar2() {
  const [show, setShow] = React.useState(false)

  return (
    <>
      <MetaTags />
      <Flex
        as="nav"
        alignItems="center"
        justify="space-between"
        wrap="wrap"
        padding="4"
      >
        <GLink to={urls.profile.url} className="navbar-brand logo">
          <img src={ak_logo} width={"30px"} alt={"ak_logo"} />
        </GLink>

        <Box
          display={{ base: "block", sm: "none" }}
          onClick={() => setShow(!show)}
        >
          <FiMenu />
        </Box>

        <Box
          display={{ base: show ? "block" : "none", sm: "flex" }}
          width={{ base: "full", sm: "auto" }}
        />

        <Box
          display={{ base: show ? "block" : "none", sm: "flex" }}
          mt={{ base: 4, sm: 0 }}
        >
          <NavItem href={urls.profile.url} text="PROFILE" />
          <NavItem href={urls.ml_gallery.url} text="ML GALLERY" />
          <NavItem href={urls.all_projects.url} text="PROJECTS" />
          <NavItem href={urls.resume.url} text="RESUME" />
        </Box>
      </Flex>
    </>
  )
}

export const ProfileNavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  if (colorMode !== "dark") toggleColorMode()
  const linkProps = { _hover: { textDecoration: "none", color: "white" } }
  return (
    <Box backgroundColor="gray.800" position="sticky" top="0" py={2} zIndex={5}>
      <MetaTags />
      <Container>
        <Flex as="nav" alignItems="center" justify="space-between" wrap="wrap">
          <GLink to={urls.profile.url} className="navbar-brand logo">
            <Image src={ak_logo} height="30px" alt="ak_logo" mt={1} />
          </GLink>
          <Box width="auto" />
          <HStack spacing={4}>
            <Link color="gray.300" href={urls.ml_gallery.url} {...linkProps}>
              ML Gallery
            </Link>
            <Link
              as={GLink}
              color="gray.300"
              href={urls.all_projects.url}
              to={urls.all_projects.url}
              {...linkProps}
            >
              Projects
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
