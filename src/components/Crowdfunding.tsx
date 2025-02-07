import crowdfund from "/assets/images/crowdfund.png";
import fruit from "/assets/images/fruit.png";
import Graph from "/assets/images/Graph.png";
import empty from "/assets/images/empty.png";

import {
  Box,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Slider,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

const Crowdfunding = () => {
  return (
    <div className="md:pt-32 flex justify-center items-start min-h-screen pt-20 pb-20 flex-col">
      <div className="mx-auto p-4 w-4/5 gap-8 md:flex md:h-[30rem] ">

        <img
          src={crowdfund}
          alt="Crowdfunding Image"
          className="md:w-[34rem] md:h-96 mb-6"
        />

        <div className="w-full">
          <h2 className="text-green-600 uppercase font-bold mb-3 text-sm">
            FreshCrate's Crowd Funding
          </h2>
          <h2 className="text-black text-xl mb-4">
            Fresh Groceries, Zero Waste: Transforming Grocery Shopping in
            Nigeria
          </h2>
          <h2 className="text-gray-500 text-sm mb-5">
            Help us reduce food waste, support local farmers, and deliver
            fresh groceries directly to Nigerian homes.
          </h2>

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
              size="md"
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

          <button className="bg-green-600 text-white mt-12 p-4 rounded-3xl">
            Contribute Now
          </button>
        </div>
      </div>

      <Divider borderColor="gray.200" className="my-4 w-full" />

      <div className="w-3/5 mt-12 mx-auto p-4 flex flex-col items-center">

      
      <div className="flex md:flex-row flex-col w-11/12 md:w-4/5 -gap-14  items-center text-left">
        <div className="uppercase text-left">The Problem</div>
        <hr className="w-full md:w-2/3 mx-10 my-4 border-black" />
      </div>

      <div className="mt-4 w-11/12 md:w-4/5 items-center text-left">
        <h1 className="md:text-4xl text-3xl mb-6">40% of Food in Nigeria is Wasted Before It Reaches Consumers.</h1>

        <h4 className="mt-4 text-gray-900">Food waste is a massive problem in Nigeria, inflating costs and reducing access to fresh produce for millions of families. Farmers lose income, families pay higher prices, and the environment suffers from wasted resources</h4>
      </div>

      {/* Circle */}
      <div className="mt-9 flex md:flex-row flex-col gap-7">

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <svg width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#ccc"
            strokeWidth="20"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#34C759" 
            strokeWidth="20"
            fill="none"
            strokeDasharray="565.49"
            strokeDashoffset={565.49 - (565.49 * 0.4)}
            transform="rotate(-90 100 100)"
          />
          <text x="100" y="110" textAnchor="middle" fontSize="24">
            40%
          </text>
        </svg>
        <p className="text-center mt-4 font-bold">Food Waste</p>
        </div>

        {/* 2nd Circle  */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <svg width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#ccc"
            strokeWidth="20"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#34C759" 
            strokeWidth="20"
            fill="none"
            strokeDasharray="565.49"
            strokeDashoffset={565.49 - (565.49 * 0.4)}
            transform="rotate(-90 100 100)" 
          />
          <text x="100" y="110" textAnchor="middle" fontSize="24">
            834.7M
          </text>
        </svg>
        <p className="text-center mt-4 font-bold">Customers</p>
        </div>
    </div>


    {/* The Solution Section */}
    <div className="flex md:flex-row flex-col w-11/12 md:w-4/5 -gap-14  items-center text-left mt-24">
    
      <div className="uppercase text-left">The Solution</div>
        <hr className="w-full md:w-2/3 mx-10 my-4 border-black" />
      </div>

      <div className="mt-4 w-11/12 md:w-4/5 items-center text-left">
        <h1 className="md:text-4xl text-3xl mb-6">Fresh Crates Delivers Freshness, Savings, and Sustainability.</h1>

        <h4 className="mt-4 text-gray-900">By partnering directly with farmers, Fresh Crates packages fresh produce into meal kits and grocery bundles. We reduce waste, streamline logistics, and bring fresh, affordable groceries to your doorstep. Every contribution helps us build a sustainable, food-secure future for Nigeria.</h4>
      </div>

      <img
          src={fruit}
          alt="Crowdfunding Image"
          className="md:w-[25rem] md:h-48 mt-9"
        />



    {/* The Impact Section */}
    <div className="flex md:flex-row flex-col w-11/12 md:w-4/5 -gap-14  items-center text-left mt-24">
      <div className="uppercase text-left">The Impact</div>
      <hr className="w-full md:w-2/3 mx-10 my-4 border-black" />
    </div>

    <div className="mt-4 w-11/12 md:w-4/5 items-center text-left">
      <h1 className="md:text-4xl text-3xl mb-6">
        Your Contribution Makes a Difference.
      </h1>

    <h4 className="mt-4 text-gray-900">
      <p><span className="font-bold">Reduce Food Waste:</span> Support the fight against the 40% food loss problem.</p>
      <p><span className="font-bold">Support Farmers:</span>Increase income for local farmers by reducing losses.</p>
      <p><span className="font-bold">Affordable Groceries:</span> Make fresh groceries accessible to Nigerian families.</p>
    </h4>
    
  </div>

<img
  src={Graph}
  alt="Crowdfunding Image"
  className="md:w-[25rem] md:h-48 mt-9"
/>


{/* How it work section */}
<div className="flex md:flex-row flex-col w-11/12 md:w-4/5 -gap-14  items-center text-left mt-24">
      <div className="uppercase text-left">How it work</div>
      <hr className="w-full md:w-2/3 mx-10 my-4 border-black" />
    </div>

    <div className="mt-4 w-11/12 md:w-4/5 items-center text-left">
      <h1 className="md:text-4xl text-3xl mb-6">
        Join the Fresh Crates Movement in 3 Simple Steps!.
      </h1>

    <h4 className="mt-4 text-gray-900">
      <p><span className="font-bold">Contribute::</span> Choose your reward and make your contribution.</p>
      <p><span className="font-bold">Impact:</span>Help us reduce waste, support farmers, and deliver groceries.</p>
      <p><span className="font-bold">Enjoy Rewards:</span> Receive your meal kits, recipes, or other perks as a thank-you</p>
    </h4>
    
  </div>

  <img
    src={empty}
    alt="Crowdfunding Image"
    className="md:w-[25rem] md:h-48 mt-9"
  />

  {/* FUNDING TIERS & REWARDS */}
  <div className="flex md:flex-row flex-col w-11/12 md:w-4/5 -gap-2  items-center text-left mt-24">
      <div className="uppercase text-left">Funding tiers & rewards</div>
      <hr className="md:w-1/3 mx-10 my-4 border-black" />
    </div>

    <div className="mt-4 w-11/12 md:w-4/5 items-center text-left">
      <h1 className="md:text-4xl text-3xl mb-6">
        Contribution	Reward.
      </h1>

    <h4 className="mt-4 text-gray-900">
      <p>₦5,000	Personalized thank-you email + a recipe ebook.</p>
      <p>₦10,000	Fresh Crates-branded tote bag + the recipe ebook.</p>
      <p>₦25,000	A curated Detoxify meal kit.</p>
      <p>₦50,000	A curated Quick-fix meal kit.</p>
      <p>₦100,000	Two months of monthly Quick-fix meal + a "founding supporter" badge.</p>
      <p>₦250,000	Four months of bi-weekly Healthy Pack</p>
      <p>₦500,000+	2 years 10% discount + acknowledgment as a "Founding Partner" on our website and materials.</p>
    </h4>
    
  </div>

  {/* Progress Tracker */}
  <div className="flex md:flex-row flex-col w-11/12 md:w-4/5 -gap-2  items-center text-left mt-24">
      <div className="uppercase text-left">Progress Tracker</div>
      <hr className="w-full md:w-2/3 mx-5 my-4 border-black" />
    </div>

    <div className="mt-4 w-11/12 md:w-4/5 items-center text-left">
      <h1 className="md:text-4xl text-3xl mb-6">
        Together, We're Building a Better Future.
      </h1>

    {/* Funds Circle */}
    <div className="mt-9 flex md:flex-row flex-col gap-7">

    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
    <svg width="200" height="200">
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="#ccc"
        strokeWidth="20"
        fill="none"
      />
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="#34C759" 
        strokeWidth="20"
        fill="none"
        strokeDasharray="565.49"
        strokeDashoffset={565.49 - (565.49 * 0.45)}
        transform="rotate(-90 100 100)"
      />
      <text x="100" y="110" textAnchor="middle" fontSize="24">
        15.2M
      </text>
    </svg>
    <p className="text-center mt-4 font-bold">Total Funds Raised</p>
    </div>

    {/* 2nd Circle  */}
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
    <svg width="200" height="200">
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="#ccc"
        strokeWidth="20"
        fill="none"
      />
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="#34C759" 
        strokeWidth="20"
        fill="none"
        strokeDasharray="565.49"
        strokeDashoffset={565.49 - (565.49 * 1.4)}
        transform="rotate(-90 100 100)" 
      />
      <text x="100" y="110" textAnchor="middle" fontSize="24">
        14 days
      </text>
    </svg>
    <p className="text-center mt-4 font-bold">Time Remaining</p>
    </div>
    </div>
        
    </div>

    {/* Be part of This */}
    <div className="flex md:flex-row flex-col w-11/12 md:w-4/5 -gap-2  items-center text-left mt-24">
      <div className="uppercase text-left">Be part of This</div>
      <hr className="w-full md:w-2/3 mx-5 my-4 border-black" />
      
    </div>
    <p className="text-gray-500">
        .............................................................................................................................................................
    </p>


      <div className="mt-4 w-11/12 md:w-4/5 items-center text-left">
      <h1 className="md:text-4xl text-3xl mb-6">
        Be Part of the Change. Contribute Today!
      </h1>

      <button className="bg-green-600 text-white p-3 rounded-xl">Contribute Now</button>

    </div>



</div>
</div>
    

      

      
  );
};

export default Crowdfunding;