import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  HStack,
  VStack,
  theme,
  Container,
  Image,
  Text,
  Button,
  Heading,
  useColorModeValue,
  ButtonProps,
  Link
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { useState } from 'react'

type NavButtonProps = {
  name: 'home' | 'about' | 'projects' | 'contact';
  label: string;
} & Omit<ButtonProps, 'name'>

export const App = () => {
  const [activeComponent, setActiveComponent] = useState<'home' | 'about' | 'projects' | 'contact'>('home')
  

  // TODO: Fix dark Mode 
  // TODO: Fix dark Mode 
  // TODO: Fix dark Mode 

  // TODO: Set up styling/theme structure
  // TODO: Set up styling/theme structure
  // TODO: Set up styling/theme structure


  // Color mode values
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const navBg = useColorModeValue('white', 'gray.800')
  const buttonHoverBg = useColorModeValue('gray.100', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const buttonColor = useColorModeValue('gray.800', 'white')
  const activeButtonBg = useColorModeValue('gray.200', 'gray.600')

  const renderComponent = () => {
    switch(activeComponent) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return (
          <VStack spacing={6} align="center" w="full" pt={10}>
            <Image
              borderRadius="full"
              boxSize="200px"
              src="/api/placeholder/200/200"
              alt="Profile Photo"
            />
            <Heading size="lg" color={textColor}>Welcome to My Portfolio</Heading>
            <Text fontSize="xl" maxW="600px" textAlign="center" color={textColor}>
              Hi! I'm Emma.
            </Text>
          </VStack>
        )
    }
  }

  const NavButton: React.FC<NavButtonProps> = ({ name, label, ...props }) => (
    <Button
      variant="ghost"
      px={4}
      h="full"
      fontSize="lg"
      color={buttonColor}
      backgroundColor={activeComponent === name ? activeButtonBg : 'transparent'}
      _hover={{ 
        bg: buttonHoverBg,
      }}
      onClick={() => setActiveComponent(name)}
      {...props}
    >
      {label}
    </Button>
  )

  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" bg={bgColor} flexDirection="column">
        {/* Top Navigation */}
        <Box
          bg={navBg}
          boxShadow="sm"
          position="sticky"
          top={0}
          zIndex={1}
        >
          <Container maxW="container.xl">
            <Flex h="70px" alignItems="center" justifyContent="space-between">
              {/* Navigation Buttons */}
              <HStack spacing={1} h="full">
                <NavButton name="home" label="Home" />
                <NavButton name="about" label="About" />
                <NavButton name="projects" label="Projects" />
                <NavButton name="contact" label="Contact" />
              </HStack>

              {/* Resume Link and Color Mode Switch */}
              <HStack spacing={4}>
                <Link
                  href="/path-to-your-resume.pdf"
                  fontSize="lg"
                  fontWeight="bold"
                  color={textColor}
                  _hover={{
                    textDecoration: "underline",
                    textUnderlineOffset: "4px"
                  }}
                  download
                >
                  Download Resume
                </Link>
                <ColorModeSwitcher />
              </HStack>
            </Flex>
          </Container>
        </Box>

        {/* Main Content */}
        <Box flex="1">
          <Container maxW="container.xl" py={8}>
            {renderComponent()}
          </Container>
        </Box>
        
        {/* Footer */}
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}