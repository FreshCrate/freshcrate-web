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
        className="relative bg-center bg-cover md:h-screen"
        style={{
          backgroundImage: `url(${source})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#D9D9D9",
        }}
      >
        <div className="flex items-center h-full">
          <div className="container px-6 py-48 mx-auto md:px-12 md:py-0">
            <div className="bg-[#D9D9D9] bg-opacity-30 px-6 md:px-12 py-9 rounded-3xl">
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                Where Health meets Comfort
              </h1>

              <div className="relative mt-6">
                <div className="absolute top-0 left-0 hidden w-1 h-full bg-white md:block"></div>
                <p className="pl-4 text-lg text-white md:text-xl">
                  Experience fresh, nutritious, and affordable meal solutions
                  designed for every lifestyle and health need. Join us in
                  promoting balanced diets and reducing food insecurity across
                  African households.
                </p>
              </div>

              <button className="px-6 py-3 mt-8 text-white shadow bg-primary-500 rounded-xl hover:bg-primary-600">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="container px-6 py-8 mx-auto md:px-12 md:py-16">
        {/* About Us Section */}
        <section className="text-center md:py-24">
          <div className="inline-block px-3 py-2 border rounded-full border-primary-600">
            <h2 className="text-xl font-medium text-primary-500">About Us</h2>
          </div>
          {/* <h3 className="mt-4 text-3xl font-semibold text-black md:text-5xl">
            What we do
          </h3> */}

          <p className="max-w-4xl px-4 py-8 mx-auto mt-5 text-gray-600 border-y border-y-green-200">
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
          <div className="mb-6 text-left">
            <h3 className="pb-4 text-4xl font-semibold border-b md:text-5xl border-primary-100">
              Meal Kits
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Meal Kit Cards */}
            {mealKit.map((kit, i) => (
              <div
                key={i}
                className="bg-[rgba(4,148,79,0.05)] shadow rounded-[20px] overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between pb-5 border-b border-[rgba(4,148,79,0.3)]">
                    <h4 className="text-2xl font-medium">{kit.name}</h4>
                    <button className="flex items-center p-4 font-semibold text-white rounded-lg hover:underline bg-primary-500">
                      <FiArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="py-5 text-gray-600 ">{kit.summary}</p>

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

        <section className="flex flex-col items-center justify-between gap-5 py-12 bg-white md:flex-row md:py-24 md:gap-28">
          {/* Left Side */}
          <div className="text-left md:w-1/2">
            <h3 className="mb-2 text-sm font-semibold text-green-600">
              Services
            </h3>
            <h1 className="mb-4 text-4xl font-bold leading-snug text-black md:text-5xl">
              Nutrition at your doorstep
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              We deliver meal kits with fresh, high-quality ingredients right to
              your doorstep, designed for easy cooking and optimal nutrition.
              Our curated kits cater to various lifestyles, offering convenient,
              balanced meals for individuals and families of all sizes.
            </p>
          </div>

          {/* Right Side */}
          <div className="mt-10 md:w-1/2 md:mt-0">
            <ul className="space-y-8">
              {/* Item 1 */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <BadgeCheck className="w-6 h-6 text-green-600"/>
                </div>
                <span className="text-lg font-medium text-black">
                  Uncompromising Quality
                </span>
              </li>
              {/* Item 2 */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <Leaf className="w-6 h-6 text-green-600"/>
                </div>
                <span className="text-lg font-medium text-black">
                  Fresh Ingredients
                </span>
              </li>
              {/* Item 3 */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <HeartPulse className="w-6 h-6 text-green-600"/>
                </div>
                <span className="text-lg font-medium text-black">
                  Healthy Nutrition
                </span>
              </li>
              {/* Item 4 */}
              <li className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <ChefHat className="w-6 h-6 text-green-600"/>
                </div>
                <span className="text-lg font-medium text-black">
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
