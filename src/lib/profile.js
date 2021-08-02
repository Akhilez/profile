import React from "react"
import { Projects } from "./sections/Projects"
import "../styles/github_calendar.css"
import { ProfileBadge } from "./sections/ProfileBadge"
import { Container } from "@chakra-ui/react"
import { Bio } from "./sections/Bio"
import { Timeline } from "./sections/Timeline"
import { CodingActivity } from "./sections/CodingActivity"
import { Research } from "./sections/Research"
import { Hackathons } from "./sections/Hackathons"
import { Blogs } from "./sections/Blogs"
import { Misc } from "./sections/Misc"
import { PublicTalks } from "./sections/PublicTalks"

export const ProfilePage = () => (
  <Container mb={6}>
    <ProfileBadge />
    <Bio />
    <Timeline />
    <CodingActivity />
    <PublicTalks />
    <Research />
    <Hackathons />
    <Projects />
    <Blogs />
    <Misc />
  </Container>
)
