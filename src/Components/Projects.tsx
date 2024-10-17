import React from "react"
import { VStack, Heading, SimpleGrid } from "@chakra-ui/react"
import ProjectBox from "./ProjectBox"

const projectsData = [
  {
    title: "This Website!",
    description: "A responsive personal website built with React and Chakra UI.",
    technologies: ["React", "Chakra UI", "TypeScript"],
    link: "https://github.com/ekarbusicky/personal-website",
  },
  {
    title: "Automation of Internal Teams Progress Report",
    description: "Full Stack internal web Application",
    technologies: ["Java", "JavaScript", "Spring", "JUnit Tests"],
    link: "",
  },
  {
    title: " Accessibility for Customer and Agent Facing Applications",
    description: "",
    technologies: ["Web Development", "UX/UI Design", "Accessibility Standards"],
    link: "",
  },
  {
    title: "Android Application - BarHop",
    description: "A full-stack Location based social app",
    technologies: ["Android Development", "Location Services"],
    link: "https://github.com/KohnKaleb/BarHop",
  },
]

const Projects: React.FC = () => (
  <VStack spacing={8} as="section" mb={8} width="100%">
    <Heading as="h2" size="xl">My Projects</Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} width="100%">
      {projectsData.map((project, index) => (
        <ProjectBox key={index} {...project} />
      ))}
    </SimpleGrid>
  </VStack>
)

export default Projects