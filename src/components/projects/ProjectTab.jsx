import { FaGithub } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

const projects = [
  {
    title: "eCommerce Store",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
    desc: "Modern shopping interface with responsive layouts and clean UI.",
    tech: ["React", "Tailwind", "Redux"],
  },

  {
    title: "Business Website",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    desc: "Professional agency website with responsive sections and animations.",
    tech: ["WordPress", "Elementor", "WooCommerce"],
  },

  {
    title: "GSAP Landing Page",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    desc: "Interactive landing page with smooth scrolling and transitions.",
    tech: ["GSAP", "React", "ScrollTrigger"],
  },

  {
    title: "Expense Tracker",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    desc: "Track expenses and manage transactions with clean dashboard UI.",
    tech: ["React", "Context API", "Tailwind"],
  },

  {
    title: "BMI Calculator",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    desc: "Responsive fitness calculator with simple modern design.",
    tech: ["React", "JavaScript", "CSS"],
  },

  {
    title: "Portfolio UI",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
    desc: "Creative portfolio UI with animations and interactive sections.",
    tech: ["React", "GSAP", "Tailwind"],
  },
]

const AllProjects = () => {
  return (
    <div className="bg-gray-800 px-6 md:px-10 py-20 text-white">

      {/* HEADING */}
      <div className="text-center mb-16">

        <p className="text-purple-500 tracking-[5px] mb-3 font-[font3]">
          ALL PROJECTS
        </p>

        <h1 className="text-4xl font-bold font-[font1]">
          More Creative Works
        </h1>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-gray-700 rounded-[30px]
            overflow-hidden hover:border-purple-500 transition-all duration-300
            hover:-translate-y-2"
          >

            {/* IMAGE */}
            <div className="overflow-hidden h-60">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover
                group-hover:scale-110 transition-all duration-500"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* TITLE */}
              <h2 className="text-2xl font-semibold mb-4">
                {project.title}
              </h2>

              {/* DESC */}
              <p className="text-gray-400 leading-7 text-sm">
                {project.desc}
              </p>

              {/* STACK */}
              <div className="flex flex-wrap gap-3 mt-6">

                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/10 border border-purple-500/20
                    text-purple-400 px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-4 mt-8">

                {/* LIVE */}
                <button
                  className="group/live w-12 h-12 rounded-full bg-purple-600
                  hover:bg-purple-700 transition-all duration-300
                  flex items-center justify-center"
                >
                  <FaArrowUpRightFromSquare
                    className="group-hover/live:rotate-12 transition-all duration-300"
                  />
                </button>

                {/* GITHUB */}
                <button
                  className="group/git w-12 h-12 rounded-full border border-purple-500
                  hover:bg-purple-600 transition-all duration-300
                  flex items-center justify-center"
                >
                  <FaGithub
                    className="group-hover/git:scale-110 transition-all duration-300"
                  />
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default AllProjects