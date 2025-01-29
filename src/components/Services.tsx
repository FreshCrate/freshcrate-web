import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  chakra,
  Container,
} from "@chakra-ui/react";
import { FaCheck, FaLeaf, FaHeart, FaBook } from "react-icons/fa";

interface FeatureCardProps {
  icon: React.ElementType;
  iconColor: string;
  borderColor: string;
  shadowColor: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconColor,
  borderColor,
  shadowColor,
  title,
  description,
}) => {
  const Card = chakra(Box, {
    baseStyle: {
      direction: "column",
      p: 6,
      bg: "white",
      borderRadius: "lg",
      borderWidth: "1px",
      borderColor,
      boxShadow: `0 0 15px 2px ${shadowColor}`,
      transition: "box-shadow 0.2s ease-in-out",
      _hover: {
        boxShadow: `0 0 20px 3px ${shadowColor}`,
      },
    },
  });

  return (
    <Card>
      <Icon as={icon} boxSize={6} color={iconColor} mr={2} />

      <Heading as="h3" size="md">
        {title}
      </Heading>

      <Text color="gray.600" fontSize="sm">
        {description}
      </Text>
    </Card>
  );
};

const Service: React.FC = () => {
  return (
    <Box as="section" py={10} px={{ base: 4, lg: 20 }}>
      {/* Main Container */}
      <Container maxW="7xl">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ base: "flex-start", lg: "center" }}
          justify="space-between"
          rowGap={8}
          columnGap={28}
        >
          {/* Left Content */}
          <Box maxW={{base: "100%", lg: "md"}}>
            {/* “Services” label */}
            <Text
              color="primary.500"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Services
            </Text>

            {/* Main heading */}

            <Text
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="medium"
              color="#0D0D0D"
              mb={4}
            >
              Nutrition At Your Doorstep
            </Text>

            {/* Paragraph describing the service */}
            <Text color="gray.700" fontSize="lg" lineHeight="tall" mb={8}>
              We deliver meal kits with fresh, high-quality ingredients right to
              your doorstep, designed for easy cooking and optimal nutrition.
              Our curated kits cater to various lifestyles, offering convenient,
              balanced meals for individuals and families of all sizes.
            </Text>
          </Box>

          {/* Right Content (Feature Cards) */}
          <Box>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={6}
              // Adjust if you want them more spaced or less
            >
              <FeatureCard
                icon={FaCheck}
                iconColor="blue.500"
                borderColor="blue.100"
                shadowColor="rgba(66, 153, 225, 0.15)"
                title="Uncompromising Quality"
                description="Lorem ipsum dolor sit amet consectetur. Id non a magna mi dignissim. Vitae id venenatis eget velit volutpat."
              />
              <FeatureCard
                icon={FaLeaf}
                iconColor="green.500"
                borderColor="green.100"
                shadowColor="rgba(72, 187, 120, 0.15)"
                title="Fresh Ingredients"
                description="Lorem ipsum dolor sit amet consectetur. Mi enim facilisis euismod sit tincidunt eget magnis quis pretium."
              />
              <FeatureCard
                icon={FaHeart}
                iconColor="pink.500"
                borderColor="pink.100"
                shadowColor="rgba(236, 72, 153, 0.15)"
                title="Healthy Nutrition"
                description="Lorem ipsum dolor sit amet consectetur. Mattis hendrerit enim mi proin tempus. Consectetur sed lorem erat quis."
              />
              <FeatureCard
                icon={FaBook}
                iconColor="yellow.600"
                borderColor="yellow.100"
                shadowColor="rgba(237, 216, 82, 0.15)"
                title="Curated Recipes"
                description="Lorem ipsum dolor sit amet consectetur. Orci nullam dui tellus enim. Sollicitudin eu metus et massa dui."
              />
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Service;
