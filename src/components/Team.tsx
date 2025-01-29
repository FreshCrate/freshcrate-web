import {
  Box,
  Container,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Israel Oyebamiji",
    title: "CEO",
    imageSrc: "/assets/images/israel.png",
  },
  {
    name: "Gideon Ihuaralam",
    title: "CFO",
    imageSrc: "/assets/images/gideon.png",
  },
  {
    name: "Onyekachi Nwakaihe",
    title: "CTO",
    imageSrc: "/assets/images/kachi.png",
  },
];

const Team = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} bg="white">
      <Container maxW="7xl">
        {/* Heading and Subheading */}
        <Flex flexDirection={{base: "column" , lg: "row"}} justifyContent="space-between" px={{base: 4, md: 12}}>
          <Box mb={12} textAlign={{ base: "center", md: "left" }}>
            <Text as="h2" fontSize={{base: "3xl", md: "5xl" }} fontWeight="medium" color="#0D0D0D" mb={4}>
              Meet Our Team
            </Text>
            <Text fontSize="lg" color="#808080" maxW="480px">
              Efficiently optimizing the payment infrastructure to accommodate
              the rapid growth.
            </Text>
          </Box>

          {/* Team Grid */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={8}
            justifyItems="center"
          >
            {teamMembers.map((member) => (
              <VStack key={member.name} spacing={4} textAlign="center">
                {/* Circular image */}
                <Box
                  w="150px"
                  h="150px"
                  borderRadius="full"
                  overflow="hidden"
                  boxShadow="md"
                >
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    boxSize="100%"
                    objectFit="cover"
                  />
                </Box>
                {/* Name & Title */}
                <Box>
                  <Text color="#0D0D0D" fontWeight="bold" fontSize="md">
                    {member.name}
                  </Text>
                  <Text color="#808080" fontSize="sm">
                    {member.title}
                  </Text>
                </Box>
              </VStack>
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Team;
