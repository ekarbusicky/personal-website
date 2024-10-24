import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  HStack,
  VStack,
  Container,
  Image,
  Text,
  Button,
  Heading,
  useColorModeValue,
  ButtonProps,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { theme } from "./theme"
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

  const bgColor = useColorModeValue('background.light', 'background.dark')
  const navBg = useColorModeValue('nav.light', 'nav.dark')
  const buttonHoverBg = useColorModeValue('button.hoverLight', 'button.hoverDark')
  const textColor = useColorModeValue('text.light', 'text.dark')
  const buttonColor = useColorModeValue('button.light', 'button.dark')
  const activeButtonBg = useColorModeValue('button.activeLight', 'button.activeDark')

  const NavButton: React.FC<NavButtonProps> = ({ name, label, ...props }) => (
    <Button
      variant="nav"
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
            Hello, I'm Emma! I'm a recent graduate from the University of 
            Wisconsin-Madison with a Bachelor of Science in Computer Science. 
            I have hands-on experience in creating, testing, debugging, 
            and documenting software features for a range of medium to large-scale applications. 
            I’m passionate about delivering high-quality, user-friendly digital solutions, and 
            am actively seeking new opportunities to apply my skills and grow as a developer. 
            Let’s build something great together! 
            </Text>
          </VStack>
        )
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" bg={bgColor} flexDirection="column">
        <Box
          bg={navBg}
          boxShadow="sm"
          position="sticky"
          top={0}
          zIndex={1}
        >
          <Container maxW="container.xl">
            <Flex h="70px" alignItems="center" justifyContent="space-between">
              <HStack spacing={1} h="full">
                <NavButton name="home" label="Home" />
                <NavButton name="about" label="About" />
                <NavButton name="projects" label="Projects" />
                <NavButton name="contact" label="Contact" />
              </HStack>

              <HStack spacing={4}>
                <Button
                  as="a"
                  href="/Resume - Emma Karbusicky TEST.pdf"
                  variant="link"
                  fontSize="lg"
                  fontWeight="bold"
                  color={textColor}
                  download
                >
                  Download Resume
                </Button>
                <ColorModeSwitcher />
              </HStack>
            </Flex>
          </Container>
        </Box>

        <Box flex="1">
          <Container maxW="container.xl" py={8}>
            {renderComponent()}
          </Container>
        </Box>
        
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}