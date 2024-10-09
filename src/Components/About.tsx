import React from "react"
import { VStack, Heading, Text } from "@chakra-ui/react"

const About = () => (
  <VStack spacing={4} as="section" mb={8}>
    <Heading as="h2" size="xl">About Me</Heading>
    <Text>
      brief intro goes here
    </Text>
  </VStack>
)

export default About