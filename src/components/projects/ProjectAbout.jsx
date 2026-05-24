import { FaGithub } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

const projects = [
  {
    title: "Modern Portfolio",
    desc: "Animated React portfolio with GSAP and Tailwind CSS.",
    image: "https://ishaq-devv.vercel.app/portfolio2.jpg",
    tech: ["React", "GSAP", "Tailwind"],
  },
  {
    title: "eCommerce Store",
    desc: "Responsive eCommerce UI with product filtering and cart system.",
    image: "https://ishaq-devv.vercel.app/portfolio3.jpg",
    tech: ["React", "Redux", "Tailwind"],
  },
  {
    title: "Business Website",
    desc: "Professional WordPress business website for agency clients.",
    image: "https://ishaq-devv.vercel.app/portfolio1.jpg",
    tech: ["WordPress", "Elementor", "WooCommerce"],
  },
]

const ProjectsPreview = () => {
  return (
    <div className="bg-gray-800 px-6 md:px-10 py-20 text-white">

      {/* HEADING */}
      <div className="text-center mb-16">

        <p className="text-purple-500 mb-3 font-[font3]">
          MY WORK
        </p>

        <h1 className="text-4xl font-bold font-[font1]">
          Featured Projects
        </h1>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
          >

            {/* IMAGE */}
            <div className="overflow-hidden h-60">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* TITLE */}
              <h2 className="text-2xl font-semibold mb-3">
                {project.title}
              </h2>

              {/* DESC */}
              <p className="text-gray-400 leading-7 text-sm">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 mt-5">

                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm px-4 py-2 rounded-full"
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-4 mt-7">

                {/* LIVE */}
                <button
                  className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <FaArrowUpRightFromSquare />
                </button>

                {/* GITHUB */}
                <button
                  className="w-12 h-12 rounded-full border border-purple-500 hover:bg-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  <FaGithub />
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default ProjectsPreview