import React from "react"
import { BsCode, FaAndroid } from "react-icons/all"
import {
  deepLearningProjects,
  gameProjects,
  mobileProjects,
  projects,
  urls,
  webProjects,
} from "../data/data"
import mlgImg from "../media/projects/mlgImg.png"
import {
  Box,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react"
import { mlGalleryDescription } from "../data/texts"

export const Projects = () => (
  <Box>
    <Heading variant="section">Projects</Heading>

    <Wrap spacing={4}>
      <DeepLearning />
      <GenericCategory title="Mobile" projects={mobileProjects} />
      <GenericCategory title="Web" projects={webProjects} />
      <GenericCategory title="Games" projects={gameProjects} />
    </Wrap>
  </Box>
)

const GenericCategory = ({ title, projects }) => (
  <Category title={title}>
    {projects.map(project => (
      <WrapItem>
        <Project title={project.title} img={project.image}>
          <Text noOfLines={5}>{project.desc}</Text>
        </Project>
      </WrapItem>
    ))}
  </Category>
)

const DeepLearning = () => (
  <Category title="Deep Learning">
    <WrapItem>
      <Project title="ML Gallery" img={mlgImg}>
        {mlGalleryDescription}
      </Project>
    </WrapItem>
    {deepLearningProjects.map(project => (
      <WrapItem key={project.title}>
        <Project title={project.title} img={project.img}>
          <UnorderedList>
            {project.projectList.map(petProjectName => (
              <ListItem>{petProjectName}</ListItem>
            ))}
          </UnorderedList>
        </Project>
      </WrapItem>
    ))}
  </Category>
)

const Category = ({ title, children }) => (
  <WrapItem>
    <Box>
      <Heading fontSize="md" color="gray.400" mb={4}>
        {title}
      </Heading>
      <Wrap spacing={4}>{children}</Wrap>
    </Box>
  </WrapItem>
)

const Project = ({ img, title, children }) => (
  <Box w="250px">
    <Image src={img} alt={title} w="100%" h="150px" borderRadius="md" />
    <Heading fontSize="lg" my={2}>
      {title}
    </Heading>
    {children}
  </Box>
)

export function ProjectBox(props) {
  let project = props.data
  return (
    <div className="no_href">
      <div className="row project_box" key={project.title}>
        <div className="col-md-5">
          <a target="_blank" rel="noopener noreferrer" href={project.links.app}>
            <img
              className="project_image"
              src={require(`../media/projects/${project.image}.png`)}
              alt={project.image}
              width="400px"
            />
          </a>
        </div>
        <div className="col-md-7">
          <h4 className="project_title">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.links.app}
            >
              {project.title}
            </a>
          </h4>
          <div className={"projectLinkText"}>
            <a
              href={project.links.app}
              style={{ color: "#919c9e", fontWeight: 400 }}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              {project.links.app}
            </a>
          </div>
          <p className="project_description">{project.desc}</p>

          <div className="row" style={{ marginTop: 10 }}>
            {project.tags.map(tag => (
              <div className="col-auto chip_tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-auto project_date">{project.date}</div>
            {project.links.code != null && (
              <div
                className="col-auto view_source_button"
                data-toggle="tooltip"
                title="View source code"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.links.code}
                >
                  <Box as={BsCode} mt="2px" />
                </a>
              </div>
            )}
            {project.links.android && (
              <div
                className="col-auto view_source_button"
                data-toggle="tooltip"
                title="Android App"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.links.android}
                >
                  <Box as={FaAndroid} mt="2px" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsOld() {
  let profile_projects = projects.projects.filter(project => project.on_profile)
  return (
    <div>
      <h3 className="header1 no_href_p">
        <a
          href="https://github.com/Akhilez?tab=repositories"
          style={{ fontWeight: 700 }}
        >
          Independent Projects
        </a>
      </h3>

      <div>
        {profile_projects.map(project => (
          <ProjectBox data={project} key={project.title} />
        ))}
        <a
          href={urls.all_projects.url}
          className="btn btn-outline-secondary btn-lg resume-button"
          style={{ width: 200 }}
        >
          SHOW MORE
        </a>
      </div>
    </div>
  )
}
