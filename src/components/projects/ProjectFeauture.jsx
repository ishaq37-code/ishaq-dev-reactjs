import { FaGithub } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

const FeaturedProject = () => {
  return (
    <div className="bg-gray-800 px-6 md:px-10 py-20 text-white">

      {/* SECTION HEADING */}
      <div className="mb-16">

        <p className="text-purple-500 tracking-[5px] mb-3 font-[font3]">
          FEATURED PROJECT
        </p>

        <h1 className="text-4xl font-bold font-[font1]">
          Modern Portfolio Website
        </h1>

      </div>

      {/* MAIN CONTAINER */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
        bg-gray-900 border border-gray-700 rounded-[35px]
        overflow-hidden p-6 md:p-10"
      >

        {/* IMAGE SIDE */}
        <div className="overflow-hidden w-140 h-100 rounded-[30px] group">

          <img
            src="https://i.pinimg.com/736x/9d/5b/05/9d5b0545e67c72fec322ce61cb078260.jpg"
            alt="project"
            className="w-full h-full object-cover rounded-[30px]
            group-hover:scale-105 transition-all duration-500"
          />

        </div>

        {/* CONTENT SIDE */}
        <div>

          {/* SMALL LABEL */}
          <p className="text-purple-400 mb-4 tracking-[4px] font-[font3]">
            REACT + GSAP PROJECT
          </p>

          {/* TITLE */}
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Animated Developer Portfolio
            With Modern UI Design
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 leading-8">
            A fully responsive developer portfolio built using
            React.js, Tailwind CSS and GSAP animations.
            The project focuses on smooth scrolling,
            modern interactions and clean UI/UX design.
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-4 mt-8">

            <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-5 py-2 rounded-full">
              React.js
            </span>

            <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-5 py-2 rounded-full">
              Tailwind CSS
            </span>

            <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-5 py-2 rounded-full">
              GSAP
            </span>

          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-5 mt-10">

            {/* LIVE */}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <FaArrowUpRightFromSquare className="group-hover:rotate-12 transition-all duration-300" />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-full border border-purple-500 hover:bg-purple-600 transition-all duration-300 flex items-center justify-center"
            >
              <FaGithub className="group-hover:scale-110 transition-all duration-300" />
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}

export default FeaturedProject