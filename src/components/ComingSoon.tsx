import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";

const ComingSoon = () => {
  return (
    <Box
      as="section"
      bg="white"
      maxW="8xl"
      mx="auto"
      px={{ base: 6, lg: 20 }}
      pt={{ base: 6, md: 12 }}
      mt={{ base: 12, md: 0 }}
    >
      <Box
        alignItems="center"
        justifyContent="center"
        bg="primary.500"
        gap={6}
        rounded="3xl"
        position="relative"
      >
        {/* Left Column: Phone Mockup */}
        <Box
          position="absolute"
          top={{ base: "-10%", md: "-30%" }}
          left={{ base: "30%", md: "-12%" }}
        >
          <Image
            src="/assets/images/subscribe.png"
            alt="FreshCrate Phone Mockup"
            maxW={{ base: "35%", md: "30%" }}
            objectFit="contain"
          />
        </Box>

        {/* Right Column: Green Panel */}
        <Box
          flex="1"
          color="white"
          borderRadius="xl"
          px={{ base: 2, md: 12 }}
          py={{ base: 6, md: 12 }}
          pt={{ base: 20, md: 12 }}
          maxW={{ base: "80%", md: "70%" }}
          mx="auto"
        >
          <Stack spacing={6} align="center" textAlign="center" w="full">
            <Box textAlign="center">
              <Text fontSize="xl" mb={1}>
                We are
              </Text>
              <Heading as="h1" size="2xl" mb={3}>
                COMING SOON
              </Heading>
              <Text fontSize="md" maxW="400px">
                We are preparing something amazing and exciting for you. Stay
                tuned for the launch of our blog magazine website.
              </Text>
            </Box>

            {/* Subscription Form */}
            <Box w={{ base: "100%", md: "80%" }}>
              <InputGroup size="lg">
                <Input
                  placeholder="Enter your email"
                  _placeholder={{ color: "gray.300" }}
                  bg="white"
                  fontSize={{ base: "sm", md: "md" }}
                  color="#808080"
                  rounded="md"
                />
                <InputRightElement width="auto" mr={1}>
                  <Button
                    colorScheme="green"
                    bg="green.600"
                    color="white"
                    rounded="md"
                    fontSize={{ base: "sm", md: "md" }}
                    px={6}
                    _hover={{ bg: "primary.700" }}
                  >
                    Subscribe
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoon;
