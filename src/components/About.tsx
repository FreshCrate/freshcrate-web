import { Box, Text } from "@chakra-ui/react";


const About = () => {
  return (
    <Box maxW="8xl" mx="auto" py={[0, 14]} mt={[0, 0, 0, 12]} id="about">
      {/* About Us */}
      <div className="grid justify-center w-full p-4 space-y-6">
        <p className="text-center text-green-600">About us</p>
        <h1 className="text-5xl font-medium text-black">What We Do</h1>
      </div>

      <Box maxW="6xl" mx="auto" px={[4, 4, 4, 20]}>
        <Text fontSize="xl" textAlign="center" textColor="#808080">
          FreshCrate makes meal preparation easy with fresh, farm-sourced meal
          kits that fit into your lifestyle. We provide high-quality ingredients
          and simple recipes for busy professionals, students, health-conscious
          individuals, and families. FreshCrate brings farm freshness and
          variety to your kitchen, making nutritious eating accessible and
          convenient.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
