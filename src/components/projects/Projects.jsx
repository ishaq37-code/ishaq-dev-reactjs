import { useEffect, useRef, useState } from "react"

import gsap from "gsap"

import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
} from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

const LatestProject = () => {

  const projects = [
    {
      id: "01",
      title: "Frontend Project",
      description:
        "Modern responsive frontend website using HTML CSS and JavaScript with clean UI design.",
      tech: "HTML, CSS, JS",
      image: "https://ishaq-devv.vercel.app/portfolio2.jpg",
    },

    {
      id: "02",
      title: "React Portfolio",
      description:
        "Animated portfolio website built with React Tailwind CSS and GSAP animations.",
      tech: "React, Tailwind, GSAP",
      image: "https://ishaq-devv.vercel.app/portfolio3.jpg",
    },

    {
      id: "03",
      title: "ECommerce Store",
      description:
        "Full responsive ecommerce landing page with premium modern user interface.",
      tech: "React, API, Tailwind",
      image: "https://ishaq-devv.vercel.app/portfolio1.jpg",
    },
  ]

  const [current, setCurrent] = useState(0)

  // 🔥 REFS
  const imageRef = useRef(null)

  // 🔥 CONTENT REFS
  const numberRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const techRef = useRef(null)
  const lineRef = useRef(null)
  const btnsRef = useRef(null)

  // 🔥 STAGGER CONTENT ANIMATION
  useEffect(() => {

    const tl = gsap.timeline()

    tl.fromTo(
      [
        numberRef.current,
        titleRef.current,
        descRef.current,
        techRef.current,
        lineRef.current,
        btnsRef.current,
      ],
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
      }
    )

  }, [current])

  // 🔥 NEXT PROJECT
  const nextProject = () => {

    // IMAGE OUT
    gsap.to(imageRef.current, {
      x: -300,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",

      onComplete: () => {

        setCurrent((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        )

        // IMAGE IN
        gsap.fromTo(
          imageRef.current,
          {
            x: 300,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          }
        )

      },
    })
  }

  // 🔥 PREV PROJECT
  const prevProject = () => {

    // IMAGE OUT
    gsap.to(imageRef.current, {
      x: 300,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",

      onComplete: () => {

        setCurrent((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1
        )

        // IMAGE IN
        gsap.fromTo(
          imageRef.current,
          {
            x: -300,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          }
        )

      },
    })
  }

  return (
    <div className="w-full min-h-screen text-white px-6 lg:px-10 py-16 overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Latest <span className="text-purple-800">Project</span>
        </h1>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-8">

          {/* NUMBER */}
          <h2
            ref={numberRef}
            className="text-7xl font-extrabold text-transparent stroke-text"
          >
            {projects[current].id}
          </h2>

          {/* TITLE */}
          <h3
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold"
          >
            {projects[current].title}
          </h3>

          {/* DESC */}
          <p
            ref={descRef}
            className="text-gray-300 leading-8 max-w-xl text-lg"
          >
            {projects[current].description}
          </p>

          {/* TECH */}
          <p
            ref={techRef}
            className="text-purple-800 text-2xl font-medium"
          >
            {projects[current].tech}
          </p>

          {/* LINE */}
          <div
            ref={lineRef}
            className="w-40 h-px bg-gray-600"
          ></div>

          {/* BUTTONS */}
          <div
            ref={btnsRef}
            className="flex items-center gap-5"
          >

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-4xl hover:bg-purple-800 hover:text-black transition-all duration-300"
            >
              <FaArrowUpRightFromSquare />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-4xl hover:bg-purple-800 hover:text-black transition-all duration-300"
            >
              <FaGithub />
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-8">

          {/* IMAGE */}
          <div className="w-full max-w-180 h-90 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-lg relative">

            <img
              ref={imageRef}
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-full object-cover absolute inset-0"
            />

          </div>

          {/* ARROWS */}
          <div className="flex items-center gap-4">

            <button
              onClick={prevProject}
              className="w-20 h-16 border border-purple-800 rounded-xl flex items-center justify-center text-4xl text-purple-800 hover:bg-purple-800 hover:text-black transition-all duration-300"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextProject}
              className="w-20 h-16 border border-purple-800 rounded-xl flex items-center justify-center text-4xl text-purple-800 hover:bg-purple-800 hover:text-black transition-all duration-300"
            >
              <FaArrowRight />
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default LatestProject