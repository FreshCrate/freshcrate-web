import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import hero from "../assets/images/hero.png";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Hero Content */}
        <div className="flex flex-col justify-center items-start h-full">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="bg-[#D9D9D9] bg-opacity-30 px-4 md:px-8 py-9 rounded-3xl max-w-xl">
              <h1 className="text-4xl md:text-6xl text-white font-bold">
                Where Health meets Comfort
              </h1>
              <p className="text-lg md:text-xl text-white mt-4">
                Experience fresh, nutritious, and affordable meal solutions
                designed for every lifestyle and health need. Join us in promoting
                balanced diets and reducing food insecurity across African
                households.
              </p>
              <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-500">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-lg text-green-500 font-medium">About Us</h2>
        <h3 className="text-3xl font-semibold mt-2">What we do</h3>
        <p className="text-gray-600 mt-4 px-4 max-w-4xl mx-auto">
          FreshCrate makes meal preparation easy with fresh, farm-sourced meal
          kits that fit into your lifestyle. We provide high-quality ingredients
          and simple recipes for busy professionals, students, health-conscious
          individuals, and families. FreshCrate brings farm freshness and
          variety to your kitchen, making nutritious eating accessible and
          convenient.
        </p>
      </section>

      {/* Meal Kits Section */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold">Meal Kits</h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Meal Kit Card */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/300x200"
              alt="Selected protein for muscle gain"
              className="w-full"
            />
            <div className="p-6">
              <h4 className="text-lg font-semibold">Muscle-Up Kit</h4>
              <p className="text-gray-600 mt-2">
                Selected protein for muscle gain
              </p>
              <button className="flex items-center mt-4 text-green-500 font-semibold hover:underline">
                Learn More <FiArrowUpRight className="ml-2" />
              </button>
            </div>
          </div>
          {/* Meal Kit Card */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/300x200"
              alt="Basic everyday food items"
              className="w-full"
            />
            <div className="p-6">
              <h4 className="text-lg font-semibold">Smart Start Kit</h4>
              <p className="text-gray-600 mt-2">Basic everyday food items</p>
              <button className="flex items-center mt-4 text-green-500 font-semibold hover:underline">
                Learn More <FiArrowUpRight className="ml-2" />
              </button>
            </div>
          </div>
          {/* Meal Kit Card */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/300x200"
              alt="On-the-go meal options"
              className="w-full"
            />
            <div className="p-6">
              <h4 className="text-lg font-semibold">Smart Start Kit</h4>
              <p className="text-gray-600 mt-2">On-the-go meal options</p>
              <button className="flex items-center mt-4 text-green-500 font-semibold hover:underline">
                Learn More <FiArrowUpRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
