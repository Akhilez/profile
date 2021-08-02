import React from "react"
import { BsCode, FaAndroid } from "react-icons/all"
import {
    deepLearningProjects,
    gameProjects, mlgProject,
    mobileProjects,
    webProjects,
} from "../data/data"
import {
  Box,
  Button,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  Wrap,
  WrapItem,
  Text,
  Link,
  Tag,
  HStack,
} from "@chakra-ui/react"

export const Projects = () => (
  <Box>
    <Heading variant="section">Projects</Heading>

    <Wrap spacing={4}>
      <DeepLearning />
      <GenericCategory title="Mobile" projects={mobileProjects} />
      <GenericCategory title="Web" projects={webProjects} />
      <GenericCategory title="Games" projects={gameProjects} />
    </Wrap>

    <Button
      as={Link}
      href="https://akhilez.com/home/all_projects"
      size="sm"
      mt={4}
      variant="outline"
    >
      More projects
    </Button>
  </Box>
)

const GenericCategory = ({ title, projects }) => (
  <Category title={title}>
    {projects.map(project => (
      <WrapItem>
        <Project {...project}>
          <Text noOfLines={5}>{project.desc}</Text>
        </Project>
      </WrapItem>
    ))}
  </Category>
)

const DeepLearning = () => (
  <Category title="Deep Learning">
      <WrapItem key={mlgProject.title}>
        <Project {...mlgProject}>
          <Text noOfLines={5}>{mlgProject.desc}</Text>
        </Project>
      </WrapItem>
    {deepLearningProjects.map(project => (
      <WrapItem key={project.title}>
        <Project {...project}>
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

export const Project = ({ image, title, links, tags, date, children }) => (
  <Box w="250px">
    <Link href={links?.app}>
      <Image src={image} alt={title} w="100%" h="150px" borderRadius="md" />
      <Heading fontSize="lg" my={2}>
        {title}
      </Heading>
    </Link>
    {children}
    {tags?.map(tag => (
      <Tag key={tag} borderRadius="full" mr={2} mt={2}>
        {tag}
      </Tag>
    ))}
    <HStack mt={2}>
      {date && <Text fontSize="xs">{date}</Text>}
      {links?.code && (
        <Link href={links.code}>
          <BsCode />
        </Link>
      )}
      {links?.android && (
        <Link href={links.android}>
          <FaAndroid />
        </Link>
      )}
    </HStack>
  </Box>
)
