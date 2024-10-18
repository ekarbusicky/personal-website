import React from "react"
import { VStack, Heading, Box, Image, Flex, Container } from "@chakra-ui/react"
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
    title: "Accessibility for Customer and Agent Facing Applications",
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
  <Container maxW="6xl">
    <VStack spacing={16} as="section" mb={8} width="100%">
      <Heading as="h2" size="xl">My Projects</Heading>
      
      {projectsData.map((project, index) => (
        <Flex
          key={index}
          w="full"
          flexDirection={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
          gap={8}
          align="center"
          bg={index % 2 === 0 ? "transparent" : "blackAlpha.50"}
          p={6}
          borderRadius="lg"
        >
          {/* Project Content */}
          <Box flex="1">
            <ProjectBox {...project} />
          </Box>

          {/* Project Image */}
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={`/api/placeholder/600/400`}
              alt={`${project.title} preview`}
              borderRadius="lg"
              objectFit="cover"
              boxShadow="lg"
              maxW="500px"
              w="100%"
              h="300px"
            />
          </Box>
        </Flex>
      ))}
    </VStack>
  </Container>
)

export default Projects