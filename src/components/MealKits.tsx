import {
  Container,
  Flex,
  Stack,
  Text,
  Box,
  Image,
  Link,
  Divider,
} from "@chakra-ui/react";
import muscleUpKit from "/assets/images/muscle_kit.png";
import smartStartKit from "/assets/images/smart_kit.png";
import onTheGoKit from "/assets/images/ssmart_kit.png";

interface MealKit {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  readMoreLink: string;
}

const mealKits: MealKit[] = [
  {
    id: 1,
    title: "Muscle-Up Kit",
    description: "Selected protein for muscle gain.",
    imageUrl: muscleUpKit,
    readMoreLink: "#",
  },
  {
    id: 2,
    title: "Smart Start Kit",
    description: "Basic everyday food items.",
    imageUrl: smartStartKit,
    readMoreLink: "#",
  },
  {
    id: 3,
    title: "On The Go Kit",
    description: "On-the-go meal options.",
    imageUrl: onTheGoKit,
    readMoreLink: "#",
  },
];

const MealKits = () => {
  return (
    <Container maxW="6xl" py={[0, 14]} mt={[12, 0, 0, 0]} id="meal-kits">
      <Stack spacing={{ base: 2, md: 1 }} mb={8}>
        <Text
          color="primary.500"
          fontWeight="medium"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Meal Kits
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            color="#0D0D0D"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="medium"
            maxW={{ base: "100%", md: "300px" }}
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: 4, md: 0 }}
          >
            Tailored Meals for Individual Goals
          </Text>
          <Text
            color="#808080"
            maxW={{ base: "100%", md: "600px" }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Marketing research is the cornerstone of a successful business
            strategy. At its core, marketing research involves collecting,
            analyzing, and interpreting data to understand market dynamics.
          </Text>
        </Flex>
      </Stack>

      <Stack
        spacing={6}
        bg="white"
        p={8}
        rounded="2xl"
        shadow="sm"
        border="1px solid rgba(4, 148, 79, 0.5)"
        divider={<Divider />}
      >
        {mealKits.map((kit, index) => (
          <Flex
            key={kit.id}
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            columnGap={10}
          >
            {/* Left part: Number, Image */}
            <Flex
              align="center"
              mb={{ base: 4, md: 0 }}
              w={{ base: "full", md: "auto" }}
            >
              <Box
                fontSize="6xl"
                fontWeight="bold"
                color="primary.500"
                mr={6}
                sx={{
                  WebkitTextStroke: "1px #04944F",
                  WebkitTextFillColor: "white",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Box>
              <Box>
                <Image
                  src={kit.imageUrl}
                  alt={kit.title}
                  // boxSize="120px"
                  h="120px"
                  maxW={{ base: "100%", md: "300px" }}
                  objectFit="contain"
                  rounded="md"
                />
              </Box>
            </Flex>
            {/* Right part: Title, Description, Read more */}
            <Flex
              direction="row"
              align="center"
              justify="space-between"
              w="full"
            >
              <Box flex="1" ml={{ base: 0, md: 6 }}>
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  color="#0D0D0D"
                  mb={1}
                >
                  {kit.title}
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="#808080"
                  mb={1}
                >
                  {kit.description}
                </Text>
              </Box>
              <Link
                href={kit.readMoreLink}
                ml={{ base: 0, md: 6 }}
                color="#616161"
                fontWeight="semibold"
              >
                Read More &rarr;
              </Link>
            </Flex>
          </Flex>
        ))}
      </Stack>
    </Container>
  );
};

export default MealKits;
