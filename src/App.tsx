import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  theme,
  Container,
  Image,
  Text,
  Button,
  Heading,
  useColorModeValue,
  ButtonProps
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
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const sidebarBg = useColorModeValue('white', 'gray.700')
  const buttonHoverBg = useColorModeValue('gray.200', 'gray.600')

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
            <Heading size="lg">Welcome to My Portfolio</Heading>
            <Text fontSize="xl" maxW="600px" textAlign="center">
              Hi! I'm Emma.
            </Text>
          </VStack>
        )
    }
  }

  const NavButton: React.FC<NavButtonProps> = ({ name, label, ...props }) => (
    <Button
      w="full"
      h="60px"
      variant="ghost"
      justifyContent="flex-start"
      pl={8}
      mb={4}
      fontSize="xl"
      backgroundColor={activeComponent === name ? buttonHoverBg : 'transparent'}
      _hover={{ bg: buttonHoverBg }}
      onClick={() => setActiveComponent(name)}
      {...props}
    >
      {label}
    </Button>
  )

  return (
    <ChakraProvider theme={theme}>
      <Flex h="100vh" bg={bgColor}>
        {/* Sidebar */}
        <Box
          w="300px"
          h="100vh"
          bg={sidebarBg}
          py={8}
          boxShadow="lg"
          position="fixed"
        >
          <VStack spacing={2} align="stretch">
            <NavButton name="home" label="Home" />
            <NavButton name="about" label="About" />
            <NavButton name="projects" label="Projects" />
            <NavButton name="contact" label="Contact" />
          </VStack>
          <Box position="absolute" bottom={4} left={4}>
            <ColorModeSwitcher />
          </Box>
        </Box>

        {/* Main Content */}
        <Box ml="300px" w="calc(100% - 300px)" p={8}>
          <Container maxW="container.xl">
            {renderComponent()}
          </Container>
          <Footer />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}