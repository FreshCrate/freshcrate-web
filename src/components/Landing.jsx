import { FiArrowUpRight } from "react-icons/fi";
import hero from "/assets/images/hero.png";
import { useEffect, useState } from "react";
import { BadgeCheck, ChefHat, HeartPulse, Leaf } from "lucide-react";

const Landing = () => {
  const [source, setSource] = useState("preload.jpg");

  useEffect(() => {
    const img = new Image();
    img.src = hero;
    img.onload = () => setSource(hero);
  }, []);

  const mealKit = [
    {
      name: "Muscle-Up Kit",
      summary: "Selected protein for muscle gain",
      image: "/assets/images/muscle_kit.png",
    },
    {
      name: "Smart Start Kit",
      summary: "Basic everyday food items ",
      image: "/assets/images/smart_kit.png",
    },
    {
      name: "On-The-Go Kit",
      summary: "On-the-go meal options",
      image: "/assets/images/ssmart_kit.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center md:h-screen"
        style={{
          backgroundImage: `url(${source})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#D9D9D9",
        }}
      >
        <div className="h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 py-48 md:py-0">
            <div className="bg-[#D9D9D9] bg-opacity-30 px-6 md:px-12 py-9 rounded-3xl">
              <h1 className="text-4xl md:text-6xl text-white font-bold">
                Where Health meets Comfort
              </h1>

              <div className="relative mt-6">
                <div className="absolute top-0 left-0 h-full w-1 bg-white hidden md:block"></div>
                <p className="text-lg md:text-xl text-white pl-4">
                  Experience fresh, nutritious, and affordable meal solutions
                  designed for every lifestyle and health need. Join us in
                  promoting balanced diets and reducing food insecurity across
                  African households.
                </p>
              </div>

              <button className="mt-8 px-6 py-3 bg-primary-500 text-white rounded-xl shadow hover:bg-primary-600">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-6 md:px-12 py-8 md:py-16">
        {/* About Us Section */}
        <section className="text-center md:py-24">
          <div className="px-3 py-2 border border-primary-600 rounded-full inline-block">
            <h2 className="text-xl text-primary-500 font-medium">About Us</h2>
          </div>
          {/* <h3 className="text-3xl md:text-5xl font-semibold mt-4 text-black">
            What we do
          </h3> */}

          <p className="text-gray-600 px-4 max-w-4xl mx-auto border-y border-y-green-200 py-8 mt-5">
            FreshCrate makes meal preparation easy with fresh, farm-sourced meal
            kits that fit into your lifestyle. We provide high-quality
            ingredients and simple recipes for busy professionals, students,
            health-conscious individuals, and families. FreshCrate brings farm
            freshness and variety to your kitchen, making nutritious eating
            accessible and convenient.
          </p>
        </section>

        {/* Meal Kits Section */}
        <section className="mt-16 text-black space-y-14">
          <div className="text-left mb-6">
            <h3 className="text-4xl md:text-5xl font-semibold  border-b border-primary-100 pb-4">
              Meal Kits
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Meal Kit Cards */}
            {mealKit.map((kit, i) => (
              <div
                key={i}
                className="bg-[rgba(4,148,79,0.05)] shadow rounded-[20px] overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between pb-5 border-b border-[rgba(4,148,79,0.3)]">
                    <h4 className="text-2xl font-medium">{kit.name}</h4>
                    <button className="flex items-center text-white font-semibold hover:underline bg-primary-500 p-4 rounded-lg">
                      <FiArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-600 py-5 ">{kit.summary}</p>

                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full rounded-[20px]"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="font-light text-[#0D0D0D] text-3xl">
            Marketing research is the cornerstone of a successful business
            strategy. At its core, marketing research involves collecting,
            analyzing, and interpreting data to understand market dynamics,
          </p>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 bg-white gap-5 md:gap-28">
          {/* Left Side */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-green-600 font-semibold text-sm mb-2">
              Services
            </h3>
            <h1 className="text-black font-bold text-4xl md:text-5xl leading-snug mb-4">
              Nutrition at your doorstep
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We deliver meal kits with fresh, high-quality ingredients right to
              your doorstep, designed for easy cooking and optimal nutrition.
              Our curated kits cater to various lifestyles, offering convenient,
              balanced meals for individuals and families of all sizes.
            </p>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <ul className="space-y-8">
              {/* Item 1 */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <BadgeCheck className="text-green-600 w-6 h-6"/>
                </div>
                <span className="text-black font-medium text-lg">
                  Uncompromising Quality
                </span>
              </li>
              {/* Item 2 */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <Leaf className="text-green-600 w-6 h-6"/>
                </div>
                <span className="text-black font-medium text-lg">
                  Fresh Ingredients
                </span>
              </li>
              {/* Item 3 */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <HeartPulse className="text-green-600 w-6 h-6"/>
                </div>
                <span className="text-black font-medium text-lg">
                  Healthy Nutrition
                </span>
              </li>
              {/* Item 4 */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <ChefHat className="text-green-600 w-6 h-6"/>
                </div>
                <span className="text-black font-medium text-lg">
                  Curated Recipes
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
