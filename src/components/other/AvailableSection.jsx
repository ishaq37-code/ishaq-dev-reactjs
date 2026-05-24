import {
  FaClock,
  FaGlobe,
  FaEnvelope,
  FaLaptopCode,
} from "react-icons/fa"

const availability = [
  {
    title: "Available for Freelance",
    desc: "Currently open for freelance and remote opportunities.",
    icon: <FaLaptopCode />,
  },

  {
    title: "Quick Response Time",
    desc: "Usually reply to messages within a few hours.",
    icon: <FaClock />,
  },

  {
    title: "Worldwide Collaboration",
    desc: "Working with clients and startups from anywhere.",
    icon: <FaGlobe />,
  },

  {
    title: "Easy Communication",
    desc: "Smooth communication through email and social platforms.",
    icon: <FaEnvelope />,
  },
]

const AvailabilitySection = () => {
  return (
    <div className="bg-gray-800 px-6 md:px-10 py-20 text-white">

      {/* HEADING */}
      <div className="text-center mb-16">

        <p className="text-purple-500 tracking-[5px] mb-3 font-[font3]">
          AVAILABILITY
        </p>

        <h1 className="text-4xl font-bold font-[font1]">
          Ready For New Opportunities
        </h1>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {availability.map((item, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-gray-700
            rounded-[30px] p-8 hover:border-purple-500
            transition-all duration-300 hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          >

            {/* TOP */}
            <div className="flex items-center gap-5">

              {/* ICON */}
              <div
                className="w-16 h-16 rounded-2xl
                bg-purple-500/10 border border-purple-500/20
                flex items-center justify-center text-3xl text-purple-500
                group-hover:scale-110 transition-all duration-300"
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>

            </div>

            {/* DESC */}
            <p className="text-gray-400 leading-8 mt-6">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default AvailabilitySection