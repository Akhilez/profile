import React from "react"
import ak_logo from "./media/ak_logo.svg"
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
import profilePhoto from "./media/profile_photo.jpg"
import { Helmet } from "react-helmet"
import { urls } from "./data/data"

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
