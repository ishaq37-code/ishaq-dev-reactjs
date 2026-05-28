import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa"

import { FaArrowUpLong } from "react-icons/fa6"

import { Link } from "react-router-dom"

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-700 px-6 md:px-10 py-14 text-white">

      {/* TOP */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">

        {/* LEFT */}
        <div className="max-w-md">

          <h1 className="text-4xl font-[font1] font-bold mb-5">
            ISHAQ<span className="text-purple-500">.</span>
          </h1>

          <p className="text-gray-400 leading-7 font-[font3]">
            Frontend Developer passionate about building
            modern, responsive and animated web experiences
            using React.js, Tailwind CSS and GSAP.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4 mt-8">

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group border border-purple-600 w-11 h-11 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
              <FaInstagram className="text-xl text-purple-500 group-hover:text-white" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group border border-purple-600 w-11 h-11 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
              <FaFacebook className="text-xl text-purple-500 group-hover:text-white" />
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group border border-purple-600 w-11 h-11 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
              <FaGithub className="text-xl text-purple-500 group-hover:text-white" />
            </a>

            <a href="https://wa.me/923193325112" target="_blank" rel="noopener noreferrer" className="group border border-purple-600 w-11 h-11 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
              <FaWhatsapp className="text-xl text-purple-500 group-hover:text-white" />
            </a>

          </div>

        </div>

        {/* CENTER */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4 text-gray-400 font-[font3]">

            <Link
              className="hover:text-purple-500 transition-all duration-300"
              to="/"
            >
              Home
            </Link>

            <Link
              className="hover:text-purple-500 transition-all duration-300"
              to="/about"
            >
              About
            </Link>

            <Link
              className="hover:text-purple-500 transition-all duration-300"
              to="/project"
            >
              Projects
            </Link>

            <Link
              className="hover:text-purple-500 transition-all duration-300"
              to="/contact"
            >
              Contact
            </Link>

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Contact Info
          </h2>

          <div className="flex flex-col gap-4 text-gray-400 font-[font3]">

            <p>
              Karachi, Pakistan
            </p>

            <p>
              ishaqaltaf67@gmail.com
            </p>

            <p>
              +92 3193325112
            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-5">

        <p className="text-gray-500 text-sm text-center">
          © 2026 Ishaq Altaf. All Rights Reserved.
        </p>

        {/* SCROLL TOP */}
        <button
          onClick={scrollTop}
          className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg shadow-purple-600/30"
        >
          <FaArrowUpLong className="text-white text-xl" />
        </button>

      </div>

    </footer>
  )
}

export default Footer