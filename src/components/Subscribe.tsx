import {
  Box,
  Container,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Stack,
  Flex,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";

const Subscribe = () => {
  return (
    <Box as="section" bg="white" py={10} mb={6}>
      <Container maxW="3xl">
        {/* Logo */}
        <Flex justify="center">
          <Image
            src="/assets/images/freshcrate_logo1.png"
            alt="FreshCrate"
            boxSize="150px"
          />
        </Flex>

        {/* Heading / Tagline */}
        <Text
          as="h2"
          color="#0D0D0D"
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={6}
        >
          Get the best blog stories
          <br />
          into your inbox!
        </Text>

        {/* Subscription Form */}
        <Flex justify="center">
          <Box w={{ base: "100%", sm: "400px" }}>
            <InputGroup size="lg">
              <Input
                placeholder="Enter your email"
                rounded="md"
                bg="white"
                shadow="sm"
                fontSize={{ base: "sm", md: "md" }}
                _placeholder={{ color: "#808080" }}
              />
              <InputRightElement width="auto" mr={1}>
                <Button
                  colorScheme="primary.500"
                  fontSize={{ base: "sm", md: "md" }}
                  px={6}
                  _hover={{ bg: "primary.700" }}
                >
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>

        {/* Pills / Links */}
        <Stack
          direction="row"
          spacing={6}
          justify="center"
          mt={10}
          flexWrap="wrap"
        >
          {["Home", "Meal Kits", "Crowd Funding", "Services", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                px={4}
                py={2}
                rounded="full"
                border="1px solid"
                borderColor="primary.500"
                color="primary.500"
                opacity={0.5}
                fontWeight="semibold"
                _hover={{
                  textDecoration: "none",
                  bg: "primary.50",
                }}
              >
                {item}
              </Link>
            )
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Subscribe;
