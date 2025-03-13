'use client'

import React from 'react'
import { Box, Button, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Icon } from '@chakra-ui/react'
import { FaHome, FaCalculator, FaCamera, FaChartBar } from 'react-icons/fa'

export default function Home() {
  return (
    <Box as="main">
      {/* Hero Section */}
      <Box bg="brand.500" color="white" py={16}>
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={6} maxW="600px" mb={{ base: 12, md: 0 }}>
              <Heading as="h1" size="2xl" fontWeight="bold">
                DealFlow Pro
              </Heading>
              <Text fontSize="xl" opacity={0.9}>
                Streamline your real estate acquisitions from seller conversations to deal analysis and photo management.
              </Text>
              <Button size="lg" bg="white" color="brand.500" _hover={{ bg: 'gray.100' }}>
                Get Started
              </Button>
            </VStack>
            <Box 
              w={{ base: '100%', md: '450px' }} 
              h={{ base: '300px', md: '400px' }} 
              bg="gray.100" 
              borderRadius="md" 
              position="relative"
              overflow="hidden"
            >
              {/* Placeholder for hero image */}
              <Box 
                position="absolute" 
                top="0" 
                left="0" 
                right="0" 
                bottom="0" 
                bg="gray.200" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
              >
                <Text color="gray.500" fontWeight="bold">Real Estate Dashboard Image</Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={16}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" maxW="800px">
              <Heading as="h2" size="xl">
                Everything You Need in One Place
              </Heading>
              <Text fontSize="lg" color="gray.600">
                DealFlow Pro guides you through every step of the real estate acquisition process
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} w="full">
              {/* Feature 1 */}
              <VStack spacing={4} p={6} bg="white" borderRadius="lg" boxShadow="md" align="flex-start">
                <Flex 
                  w="50px" 
                  h="50px" 
                  bg="brand.50" 
                  color="brand.500" 
                  borderRadius="md" 
                  align="center" 
                  justify="center"
                >
                  <Icon as={FaHome} boxSize={5} />
                </Flex>
                <Heading as="h3" size="md">Pre-Work Planner</Heading>
                <Text color="gray.600">Prepare for seller conversations with custom checklists and goal-setting prompts.</Text>
              </VStack>

              {/* Feature 2 */}
              <VStack spacing={4} p={6} bg="white" borderRadius="lg" boxShadow="md" align="flex-start">
                <Flex 
                  w="50px" 
                  h="50px" 
                  bg="brand.50" 
                  color="brand.500" 
                  borderRadius="md" 
                  align="center" 
                  justify="center"
                >
                  <Icon as={FaCalculator} boxSize={5} />
                </Flex>
                <Heading as="h3" size="md">Deal Calculator</Heading>
                <Text color="gray.600">Analyze deal profitability with our advanced calculator and ARV estimation tools.</Text>
              </VStack>

              {/* Feature 3 */}
              <VStack spacing={4} p={6} bg="white" borderRadius="lg" boxShadow="md" align="flex-start">
                <Flex 
                  w="50px" 
                  h="50px" 
                  bg="brand.50" 
                  color="brand.500" 
                  borderRadius="md" 
                  align="center" 
                  justify="center"
                >
                  <Icon as={FaCamera} boxSize={5} />
                </Flex>
                <Heading as="h3" size="md">Photo Management</Heading>
                <Text color="gray.600">Capture and organize property photos with automatic optimization and basic editing.</Text>
              </VStack>

              {/* Feature 4 */}
              <VStack spacing={4} p={6} bg="white" borderRadius="lg" boxShadow="md" align="flex-start">
                <Flex 
                  w="50px" 
                  h="50px" 
                  bg="brand.50" 
                  color="brand.500" 
                  borderRadius="md" 
                  align="center" 
                  justify="center"
                >
                  <Icon as={FaChartBar} boxSize={5} />
                </Flex>
                <Heading as="h3" size="md">Analytics & Reporting</Heading>
                <Text color="gray.600">Track your deals with interactive dashboards and exportable PDF reports.</Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl">
              Ready to Streamline Your Real Estate Deals?
            </Heading>
            <Text fontSize="lg" maxW="800px">
              Join DealFlow Pro today and take the guesswork out of real estate acquisitions. Whether you're a seasoned investor or just starting out, our tools will help you make informed decisions.
            </Text>
            <Button size="lg" bg="brand.500" color="white" _hover={{ bg: 'brand.600' }}>
              Sign Up Now
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
