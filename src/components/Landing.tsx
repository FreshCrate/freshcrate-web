import hero from "/assets/images/hero.png";
import { ArrowRight } from "lucide-react";
import { Box, Button, HStack, Image } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Box maxW="8xl" mx="auto" pt={12} id="home">
      {/* Header Section */}
      <Image
        src={hero}
        alt="hero"
        className="w-full h-full md:hidden"
        loading="lazy"
      />
      <div className="flex flex-col items-center justify-between w-full gap-20 px-6 py-20 gap-y-6 lg:flex-row lg:px-20 rounded-3xl">
        <h1 className="text-4xl font-bold text-black lg:w-1/2 md:text-6xl">
          Where Health Meets Comfort
        </h1>

        <div className="lg:px-20 lg:w-1/2">
          <p className="mb-8 text-gray-600">
            Experience fresh, nutritious, and affordable meal solutions designed
            for every lifestyle and health need. Join us in promoting balanced
            diets and reducing food insecurity across African households.
          </p>

          <HStack>
            <Button fontSize={{ base: "xs", md: "md" }}>Order Now</Button>
            <button className="text-[#0D0D0D] text-xs md:text-base flex items-center gap-2 font-semibold rounded-md border-solid border-2 border-[#D6D6D6] hover:bg-gray-100 px-6 py-2">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </HStack>
        </div>
      </div>

      <Image
        src={hero}
        alt="hero"
        className="hidden w-full h-full md:block"
        loading="lazy"
      />
    </Box>
  );
};

export default Landing;
