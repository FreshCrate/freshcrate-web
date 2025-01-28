import React from 'react';
import {
  Box,
  SimpleGrid,
  Stack,
  Icon,
  Heading,
  Text,
  chakra,
 
} from '@chakra-ui/react';
import {
  FaCheck,
  FaLeaf,
  FaHeart,
  FaBook,
} from 'react-icons/fa';

interface CardProps {
  icon: React.ElementType;
  iconColor: string;
  borderColor: string;
  shadowColor: string;
  title: string;
  description: string;
}

/** Reusable feature card */
const FeatureCard: React.FC<CardProps> = ({
  icon,
  iconColor,
  borderColor,
  shadowColor,
  title,
  description,
}) => {
  const Card = chakra(Stack, {
    baseStyle: {
    
      bg: 'white',
      // subtle colored border & shadow
      borderWidth: '1px',
      borderColor,
      boxShadow: `0 0 15px 2px ${shadowColor}`,
      borderRadius: 'lg',
      p: 6,
      transition: 'box-shadow 0.2s ease',
      _hover: {
        boxShadow: `0 0 20px 3px ${shadowColor}`,
      },
    },
  });

  return (
    <Card>
      <Icon as={icon} boxSize={6} color={iconColor} />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
    </Card>
  );
};

const Services: React.FC = () => {
  return (
    <Box as="section" py={10} px={{ base: 4, md: 8 }} bg="gray.50">
      {/* Headings */}
      <Box maxW="3xl" mb={8}>
        <Text
          color="green.500"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Services
        </Text> 
        
        <Heading as="h2" size="xl" mt={2} mb={4}>
          Nutrition At Your Doorstep
        </Heading>
      </Box>

      {/* 4-Card Grid */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={12}>
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

      {/* Bottom paragraph */}
      <Box maxW="3xl">
        <Text color="gray.700" fontSize="lg" lineHeight="tall">
          We deliver meal kits with fresh, high-quality ingredients
          right to your doorstep, designed for easy cooking and optimal
          nutrition. Our curated kits cater to various lifestyles,
          offering convenient, balanced meals for individuals and families
          of all sizes.
        </Text>
      </Box>
    </Box>
  );
};

export default Services;
