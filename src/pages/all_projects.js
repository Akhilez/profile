import React from "react"
import { theme } from "../theme"
import { ChakraProvider, Container } from "@chakra-ui/react"
import { ProjectBox } from "../lib/sections/Projects"
import { projects } from "../lib/data/data"

export default class AllProjectsPage extends React.Component {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <div className={"profile_root"}>
          <Container>
            <h1 style={{ marginTop: 70 }}>Projects</h1>
            <this.Projects />
          </Container>
        </div>
      </ChakraProvider>
    )
  }

  Projects() {
    let deployed_projects = projects.projects.filter(
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
