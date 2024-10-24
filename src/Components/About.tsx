import React from "react"
import { VStack, Heading, Text, Image, Box, Container, useColorModeValue } from "@chakra-ui/react"

const About = () => (
  <Container maxW="4xl">
    <VStack spacing={8} as="section" mb={8} align="center">
      <Heading as="h2" size="xl">About Me</Heading>
      
      <Box
        w="full"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap={8}
        alignItems="center"
      >
        <Image
          src="/api/placeholder/400/400"
          alt="Profile Photo"
          borderRadius="lg"
          boxSize={{ base: "300px", md: "400px" }}
          objectFit="cover"
          boxShadow="lg"
          bg={useColorModeValue('gray.100', 'gray.700')}
        />
        
        <VStack align="start" spacing={4}>
          <Text fontSize="lg" lineHeight="tall">
            Education
          </Text>
          <Text fontSize="lg" lineHeight="tall">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum debitis consequatur ex ipsa molestiae eligendi!
          </Text>
          <Text fontSize="lg" lineHeight="tall">
            Expereince
          </Text>
          <Text fontSize="lg" lineHeight="tall">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum debitis consequatur ex ipsa molestiae eligendi!
          </Text>
          <Text fontSize="lg" lineHeight="tall">
          Why did I make this website? 
          </Text>
          <Text fontSize="lg" lineHeight="tall">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum debitis consequatur ex ipsa molestiae eligendi!
          </Text>
        </VStack>
      </Box>
    </VStack>
  </Container>
)

export default About