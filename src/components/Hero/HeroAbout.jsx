import Button from "../Buttons/Button"
import {
  FaReact,
  FaWordpress,
  FaCode,
} from "react-icons/fa"

const AboutHero = () => {
  return (
    <div className="min-h-screen bg-gray-800 px-5 md:px-10 py-20 flex flex-col lg:flex-row items-center justify-center gap-16 overflow-hidden">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2">

        {/* SMALL TEXT */}
        <p className="text-purple-500 font-[font3] text-lg mb-4">
          ABOUT ME
        </p>

        {/* HEADING */}
        <h1 className="text-4xl md:text-4xl font-[font1] font-bold leading-tight text-white">
          Passionate About Building
          <span className="text-purple-500">
            {" "}Modern Web Experiences
          </span>
        </h1>

        {/* DESC */}
        <p className="text-gray-300 mt-6 leading-8 text-sm md:text-[15px] max-w-2xl font-[font3]">
          I’m Ishaq Altaf, a frontend developer focused on creating
          modern, responsive, and animated web applications using
          React.js, Tailwind CSS, GSAP, and WordPress.
          I enjoy building smooth user experiences and clean UI designs
          that help businesses grow online.
        </p>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

          {/* CARD 1 */}
          <div className="bg-gray-900 border flex flex-col items-center justify-center  border-purple-500/20 rounded-2xl p-5 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <FaReact className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">
              React.js
            </h3>
            
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-900 border flex flex-col items-center justify-center  border-purple-500/20 rounded-2xl p-5 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <FaWordpress className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">
              WordPress
            </h3>
           
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-900 border  flex flex-col items-center justify-center  border-purple-500/20 rounded-2xl p-5 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <FaCode className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">
              GSAP
            </h3>
            
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-7">
          <Button
            title="Download CV"
            className="hover:bg-purple-600 duration-300 shadow-lg shadow-purple-600/40"
          />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex justify-center">

        <div className="relative w-72 h-72 md:w-[32vw] md:h-[32vw] rounded-full p-2 flex items-center justify-center overflow-hidden">

          {/* ROTATING BORDER */}
          <div className="absolute w-[150%] h-[150%] bg-[conic-gradient(transparent,transparent,transparent,#9333ea)] animate-[spin_10s_linear_infinite]"></div>

          <div className="absolute w-[150%] h-[150%] bg-[conic-gradient(transparent,transparent,transparent,#9333ea)] animate-[spin_10s_linear_infinite] [animation-delay:-5s]"></div>

          {/* IMAGE BOX */}
          <div className="relative w-full h-full bg-gray-900 rounded-full border border-gray-700 flex justify-center overflow-hidden z-10">

            <img
              src="/media/ishaq.jpg.png"
              alt="Ishaq Altaf"
              className="absolute top-8 md:top-12 w-[85%] object-cover mix-blend-lighten"
            />

          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutHero