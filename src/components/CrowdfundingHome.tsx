import {
  Container,
  Stack,
  Text,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useBreakpointValue,
  Button,
  Box,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

const CrowdfundingHome = () => {
  const sliderSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Container maxW="6xl" py={[0, 14]} mt={[12, 0, 0, 0]} id="crowdfunding-home">
      <Flex
        as="section"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 16 }}
        py={{ base: 10, md: 20 }}
        bg="white"
      >
        {/* Left Column */}
        <Box flexBasis={{ base: "100%", md: "40%" }} mb={{ base: 8, md: 0 }}>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            color="#0D0D0D"
          >
            Support The
            <br />
            Crowd Fund
          </Text>
        </Box>

        {/* Right Column */}
        <Box flexBasis={{ base: "100%", md: "60%" }}>
          <Text
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            mb={4}
            color="gray.700"
          >
            Fresh Groceries, Zero Waste: Transforming Grocery Shopping in
            Nigeria
          </Text>
          <Text fontSize="md" color="gray.500" mb={6}>
            Help us reduce food waste, support local farmers, and deliver fresh
            groceries directly to Nigerian homes.
          </Text>

          {/* Progress Slider + Min/Max labels */}

          <Box maxW="326px" mb={6}>
            <Text fontWeight="semibold" mb={2} color="#717171">
              Progress within 30 days
            </Text>
            <Slider
              aria-label="progress-slider"
              colorScheme="green"
              defaultValue={30}
              min={0}
              max={100}
              size={sliderSize}
              flex="1"
              mr={2}
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={4} />
            </Slider>

            <Flex justify="space-between" align="center">
              <Text fontSize="sm" color="gray.500" minW="50px">
                ₦0
              </Text>
              <Text
                fontSize="sm"
                color="gray.500"
                ml={2}
                minW="80px"
                textAlign="right"
              >
                ₦10,000,000
              </Text>
            </Flex>
          </Box>

          {/* Action Buttons */}
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button colorScheme="green" size="md">
              Contribute Now
            </Button>
            <button className="text-[#0D0D0D] text-xs md:text-base flex items-center gap-2 font-semibold rounded-md border-solid border-2 border-[#D6D6D6] hover:bg-gray-100 px-6 py-2">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default CrowdfundingHome;
