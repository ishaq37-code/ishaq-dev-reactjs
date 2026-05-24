import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"

const CTA = () => {
  return (
    <div className="bg-gray-800 px-6 md:px-10 py-20 text-white">

      {/* CONTAINER */}
      <div
        className="max-w-6xl mx-auto bg-linear-to-r from-purple-600/20 to-purple-900/10
        border border-purple-500/20 rounded-[40px] p-10 md:p-16
        flex flex-col lg:flex-row items-center justify-between gap-10
        overflow-hidden relative"
      >

        {/* GLOW */}
        <div className="absolute w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full top-20 left-20"></div>

        {/* LEFT */}
        <div className="relative z-10">

          <p className="text-purple-400 mb-4 font-[font3] tracking-widest">
            LET’S WORK TOGETHER
          </p>

          <h1 className="text-4xl font-bold leading-tight max-w-2xl">
            Have a Project in Mind?
            <span className="text-purple-500">
              {" "}Let’s Build Something Amazing
            </span>
          </h1>

          <p className="text-gray-300 mt-6 leading-8 max-w-2xl">
            I create modern, responsive and animated web experiences
            using React.js, Tailwind CSS, GSAP and WordPress.
            Let’s turn your ideas into reality.
          </p>

        </div>

        {/* RIGHT BUTTON */}
        <div className="relative z-10">

          <Link to="/contact">

            <button
              className="group bg-purple-600 hover:bg-purple-700
              transition-all duration-300 px-8 py-5 rounded-full
              flex items-center gap-4 text-lg font-semibold
              shadow-lg shadow-purple-600/30"
            >

              Contact Me

              <FaArrowRightLong className="group-hover:translate-x-1 transition-all duration-300" />

            </button>

          </Link>

        </div>

      </div>

    </div>
  )
}

export default CTA