import {
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "/assets/images/freshcrate_logo.png";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Container
      maxW="8xl"
      py={[6, 14]}
      mt={[12, 0, 0, 0]}
      bg="rgba(4, 148, 79, 0.03)"
      color="#808080"
      px={[6, 0, 6, 20]}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 4 }}
        alignItems="flex-start"
        w="full"
      >
        {/* Left Logo + Tagline */}
        <Stack spacing={4}>
          <Flex align="center">
            <a href="#">
              <img
                src={logo}
                alt="FreshCrate Logo"
                className="w-[74px] h-[40px] lg:w-[193px] lg:h-[105px]"
              />
            </a>
          </Flex>
          <Text fontSize="sm" maxW="300px">
            Where Health meets Comfort
          </Text>
        </Stack>

        <Flex justifyContent={"space-around"}>
          {/* Middle: Company Links */}
          <Stack spacing={4} align="flex-start">
            <Heading as="h3" size="sm" mb={2}>
              Company
            </Heading>
            <Link href="#" color="gray.600" _hover={{ color: "green.600" }}>
              Home
            </Link>
            <Link href="#" color="gray.600" _hover={{ color: "green.600" }}>
              About Us
            </Link>
            <Link href="#" color="gray.600" _hover={{ color: "green.600" }}>
              MealKits
            </Link>
          </Stack>

          {/* Right: Support Links */}
          <Stack spacing={4} align="flex-start">
            <Heading as="h3" size="sm" mb={2}>
              Support
            </Heading>
            <Link href="#" color="gray.600" _hover={{ color: "green.600" }}>
              FAQs
            </Link>
            <Link href="#" color="gray.600" _hover={{ color: "green.600" }}>
              Privacy Policy
            </Link>
            <Link href="#" color="gray.600" _hover={{ color: "green.600" }}>
              Terms &amp; Conditions
            </Link>
          </Stack>
        </Flex>
      </SimpleGrid>

      {/* Divider and Bottom Bar */}
      <Divider my={8} borderColor="gray.300" />

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        fontSize="sm"
        color="gray.600"
      >
        {/* Copyright */}
        <Text mb={{ base: 2, md: 0 }}>
          © FreshCrate {currentYear}. All rights reserved.
        </Text>

        {/* Social Icons */}
        <Stack direction="row" spacing={4}>
          <Link
            href="#"
            aria-label="Facebook"
            _hover={{ color: "primary.500" }}
          >
            <Icon as={FaFacebookF} />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            _hover={{ color: "primary.500" }}
          >
            <Icon as={FaInstagram} />
          </Link>

          <Link href="#" aria-label="X" _hover={{ color: "primary.500" }}>
            <Icon as={FaTwitter} />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            _hover={{ color: "primary.500" }}
          >
            <Icon as={FaLinkedinIn} />
          </Link>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Footer;
