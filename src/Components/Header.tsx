import React from "react"
import { Container, Heading, Text } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"

const Header = () => (
  <Container as="header" maxW="container.xl" py={4}>
    <Heading as="h1" size="2xl">Emma Karbusicky</Heading>
    <Text>Web Developer | Designer | Etc.</Text>
    <ColorModeSwitcher justifySelf="flex-end" />
  </Container>
)

export default Header