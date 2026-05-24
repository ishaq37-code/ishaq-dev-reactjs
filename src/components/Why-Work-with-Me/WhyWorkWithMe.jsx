import {
  FaBolt,
  FaCode,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa"

const features = [
  {
    title: "Fast Response",
    desc: "Quick communication and regular project updates.",
    icon: <FaBolt />,
  },

  {
    title: "Clean Code",
    desc: "Modern and reusable frontend development approach.",
    icon: <FaCode />,
  },

  {
    title: "Responsive Design",
    desc: "Mobile-friendly layouts for all screen sizes.",
    icon: <FaMobileAlt />,
  },

  {
    title: "Client Support",
    desc: "Friendly collaboration and long-term support.",
    icon: <FaHeadset />,
  },
]

const WhyWorkWithMe = () => {
  return (
    <div className="bg-gray-800 px-6 md:px-10 py-20 text-white">

      {/* HEADING */}
      <div className="text-center mb-16">

        <p className="text-purple-500 tracking-[5px] mb-3 font-[font3]">
          WHY WORK WITH ME
        </p>

        <h1 className="text-4xl font-bold font-[font1]">
          Building Modern Digital Experiences
        </h1>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-gray-700
            rounded-[30px] p-8 hover:border-purple-500
            transition-all duration-300 hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          >

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
            <h2 className="text-2xl font-semibold mt-6">
              {item.title}
            </h2>

            {/* DESC */}
            <p className="text-gray-400 leading-7 mt-4 text-sm">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default WhyWorkWithMe