import React from "react"
import { Container } from "react-bootstrap"
import ProfileNavBar from "../components/profile/navbar"
import projectsData from "../components/profile/data/projects.json"
import { ProjectBox } from "../components/profile/sections/Projects"
import "../styles/profile_style.css"
import "../styles/fontawesome/css/font-awesome.min.css"
import "../styles/fontawesome/css/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { theme } from "../theme"
import { ChakraProvider } from "@chakra-ui/react"

export default class AllProjectsPage extends React.Component {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <div className={"profile_root"}>
          <Container>
            <ProfileNavBar active={"all_projects"} />
            <h1 style={{ marginTop: 70 }}>Projects</h1>
            <this.Projects />
          </Container>
        </div>
      </ChakraProvider>
    )
  }

  Projects() {
    let deployed_projects = projectsData.projects.filter(
      project => project.status === "deployed"
    )
    return (
      <div>
        {deployed_projects.map(project => (
          <ProjectBox data={project} key={project.title} />
        ))}
      </div>
    )
  }
}
