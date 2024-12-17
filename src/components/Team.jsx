import face1 from "/assets/images/face1.jpeg";
import face2 from "/assets/images/face2.jpg";
import face3 from "/assets/images/face3.jpeg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const teamData = [
  {
    name: "Israel Oyebamiji",
    role: "CEO",
    image: face1,
  },
  {
    name: "Onyekachi Nwakaihe",
    role: "CTO",
    image: face3,
  },
  {
    name: "Gideon Ihuarulam",
    role: "CFO",
    image: face2,
  },
];

const Team = () => {
  return (
    <div className="container px-6 py-8 mx-auto md:px-12 md:py-16">
      <div className="mb-16 space-y-10 text-black">
        <h1 className="text-4xl font-semibold md:text-5xl">Meet Our Team</h1>
        <p className="w-full text-lg leading-relaxed text-gray-600 text-1xl lg:w-1/2">
          Empowers users to create, customize, collaborate, and track
          seamlessly, streamlining project tasks for optimal efficiency.
        </p>
      </div>

      <div className="grid lg:h-[30rem] h-auto w-11/12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mx-auto">
        {teamData.map((data, index) => (
          <div
            key={index}
            className="bg-[rgba(4,148,79,0.05)] lg:w-full md:w-[1/2] w-[9/10] h-[500px] justify-center items-center flex flex-col rounded-t-full rounded-b-full"
          >
            <img
              src={data.image}
              alt="Oyebamiji Israel"
              className="mb-8 rounded-full w-52 h-52"
            />

            <div className="grid space-y-2 text-black">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                {data.name}
              </h1>
              <p className="text-center text-gray-600">{data.role}</p>

              {/* Icons */}
              <div className="flex flex-row justify-center space-x-3 text-gray-800">
                <div className="p-2 border border-black rounded-full">
                  <FaFacebookF />
                </div>

                <div className="p-2 border border-black rounded-full">
                  <FaInstagram />
                </div>

                <div className="p-2 border border-black rounded-full">
                  <RiTwitterXFill />
                </div>

                <div className="p-2 border border-black rounded-full">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
