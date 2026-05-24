import {
  FaCode,
  FaBriefcase,
  FaLaptopCode,
  FaLayerGroup,
} from "react-icons/fa"

const stats = [
  {
    number: "2+",
    title: "Years Experience",
    icon: <FaBriefcase />,
  },

  {
    number: "15+",
    title: "Projects Completed",
    icon: <FaLaptopCode />,
  },

  {
    number: "10+",
    title: "Technologies",
    icon: <FaCode />,
  },

  {
    number: "100%",
    title: "Responsive Design",
    icon: <FaLayerGroup />,
  },
]

const StatsSection = () => {
  return (
    <div className="bg-gray-800 px-6 md:px-10 py-20 text-white">

      {/* HEADING */}
      <div className="text-center mb-16">

        <p className="text-purple-500 tracking-[5px] mb-3 font-[font3]">
          MY JOURNEY
        </p>

        <h1 className="text-4xl font-bold font-[font1]">
          Experience & Achievements
        </h1>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-gray-700 rounded-[30px]
            p-8 text-center hover:border-purple-500
            transition-all duration-300 hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          >

            {/* ICON */}
            <div
              className="w-18 h-18 rounded-full bg-purple-500/10
              border border-purple-500/20 text-purple-500
              flex items-center justify-center text-3xl mx-auto
              group-hover:scale-110 transition-all duration-300"
            >
              {item.icon}
            </div>

            {/* NUMBER */}
            <h2 className="text-5xl font-bold mt-6 text-white">
              {item.number}
            </h2>

            {/* TITLE */}
            <p className="text-gray-400 mt-3 text-lg">
              {item.title}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default StatsSection