import React, { useState } from "react"
import { Box, Heading, Text, VStack, HStack, Tag, Link, Collapse, Button } from "@chakra-ui/react"

interface ProjectBoxProps {
  title: string
  description: string
  technologies: string[]
  link: string
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ title, description, technologies, link }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      shadow="md"
      _hover={{ shadow: "lg" }}
      transition="all 0.3s"
    >
      <VStack align="start" spacing={3}>
        <Heading size="md">{title}</Heading>
        <Collapse in={isOpen} animateOpacity>
          <VStack align="start" spacing={3}>
            <Text>{description}</Text>
            <HStack wrap="wrap">
              {technologies.map((tech, index) => (
                <Tag key={index} size="sm" colorScheme="blue">
                  {tech}
                </Tag>
              ))}
            </HStack>
            <Link href={link} isExternal color="blue.500">
              View Project
            </Link>
          </VStack>
        </Collapse>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          //rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          size="sm"
          width="100%"
        >
          {isOpen ? "Less" : "More"}
        </Button>
      </VStack>
    </Box>
  )
}

export default ProjectBox