import { FiArrowUpRight } from "react-icons/fi";
import hero from "../assets/images/hero.png";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12">
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
      <main className="container mx-auto px-6 md:px-12 py-16">
        {/* About Us Section */}
        <section className="text-center">
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
        <section className="mt-16 text-black">
          <div className="text-left mb-6">
            <h3 className="text-4xl md:text-5xl font-semibold  border-b border-primary-100 pb-4">
              Meal Kits
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Meal Kit Cards */}
            {["Muscle-Up Kit", "Smart Start Kit", "On-the-go Kit"].map(
              (kit, i) => (
                <div
                  key={i}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={`https://placehold.co/300x200?text=${kit}`}
                    alt={kit}
                    className="w-full"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold">{kit}</h4>
                    <p className="text-gray-600 mt-2">
                      {kit === "Muscle-Up Kit"
                        ? "Selected protein for muscle gain"
                        : kit === "Smart Start Kit"
                        ? "Basic everyday food items"
                        : "On-the-go meal options"}
                    </p>
                    <button className="flex items-center mt-4 text-green-500 font-semibold hover:underline">
                      Learn More <FiArrowUpRight className="ml-2" />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
          <p className="font-light text-[#0D0D0D] text-3xl mt-8">
            Marketing research is the cornerstone of a successful business
            strategy. At its core, marketing research involves collecting,
            analyzing, and interpreting data to understand market dynamics,
          </p>
        </section>
      </main>
    </div>
  );
};

export default Landing;
