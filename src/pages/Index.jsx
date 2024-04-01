import React from "react";
import { Box, Heading, Text, Image, Stack, Container, SimpleGrid, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          ÁRVAI KERÍTÉS
        </Heading>
        <Text fontSize="xl" maxW="xl" mx="auto">
          Professional Fencing Services in Hungary
        </Text>
      </Box>

      {/* About Section */}
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Image src="https://www.arvai-kerites.hu/images/about-us.jpg" alt="Árvai Kerítés" borderRadius="md" />
          </Box>
          <Stack spacing={6}>
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text fontSize="lg">Árvai Kerítés is a leading fencing contractor based in Hungary. With over 15 years of experience, we specialize in providing high-quality fencing solutions for residential and commercial properties.</Text>
            <Text fontSize="lg">Our skilled team is dedicated to delivering exceptional craftsmanship and customer service. We use premium materials and advanced techniques to ensure durability and aesthetic appeal.</Text>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Services Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box bg="white" p={6} borderRadius="md" textAlign="center">
              <Image src="https://www.arvai-kerites.hu/images/wooden-fence.jpg" alt="Wooden Fences" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Wooden Fences
              </Heading>
              <Text>Durable and attractive wooden fences for your property.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" textAlign="center">
              <Image src="https://www.arvai-kerites.hu/images/metal-rigid-fence.jpg" alt="Metal Rigid Fences" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Metal Rigid Fences
              </Heading>
              <Text>Durable and stylish metal rigid fences for your property.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" textAlign="center">
              <Image src="https://www.arvai-kerites.hu/images/custom-fence.jpg" alt="Custom Fences" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Custom Fences
              </Heading>
              <Text>Personalized fence designs tailored to your preferences.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.lg" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="lg" mb={8}>
          Get in touch with us for any inquiries or to request a quote.
        </Text>
        <Stack direction="row" spacing={4} justify="center">
          <Link href="https://www.facebook.com/arvaikerites" isExternal>
            <Icon as={FaFacebook} boxSize={8} />
          </Link>
          <Link href="https://www.instagram.com/arvaikerites" isExternal>
            <Icon as={FaInstagram} boxSize={8} />
          </Link>
          <Link href="mailto:info@arvaikerites.hu">
            <Icon as={FaEnvelope} boxSize={8} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Index;
