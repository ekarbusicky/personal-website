// components/Contact.tsx
import React, { useState } from "react"
import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Box
} from "@chakra-ui/react"

const Contact: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to a server
    // For this example, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    toast({
      title: "Message sent.",
      description: "We'll get back to you soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    
    // Reset form
    setName("")
    setEmail("")
    setMessage("")
    setIsSubmitting(false)
  }

  return (
    <VStack spacing={8} as="section" mb={8} width="100%">
      <Heading as="h2" size="xl">Contact Me</Heading>
      <Box as="form" onSubmit={handleSubmit} width="100%" maxWidth="500px">
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
            loadingText="Submitting"
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </VStack>
  )
}

export default Contact