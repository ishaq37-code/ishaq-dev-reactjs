import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa"

const skills = [
  {
    name: "HTML5",
    desc: "Semantic structure & modern layouts",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3 / Tailwind",
    desc: "Responsive UI & modern styling system",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    desc: "Logic, DOM, ES6+ & problem solving",
    icon: <FaJs />,
  },
  {
    name: "React.js",
    desc: "Reusable components & SPA development",
    icon: <FaReact />,
  },
  {
    name: "GSAP",
    desc: "Smooth animations & scroll effects",
    icon: <FaJs />,
  },
  {
    name: "WordPress",
    desc: "eCommerce & business websites",
    icon: <FaWordpress />,
  },
]

const Skills = () => {
  return (
    <div className="bg-gray-800 py-20 px-6 lg:px-32 text-white">

      <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16">
        My <span className="text-purple-500">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-700
            hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
            transition-all duration-300 hover:-translate-y-2"
          >

            {/* ICON */}
            <div className="text-4xl text-purple-500 mb-4">
              {skill.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-2">
              {skill.name}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {skill.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Skills