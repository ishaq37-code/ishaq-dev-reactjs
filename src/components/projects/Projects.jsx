import { useState } from "react"

import {
  FaArrowUp,
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
} from "react-icons/fa"

const LatestProject = () => {

  // 🔥 PROJECT DATA
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

  
  const nextProject = () => {
    setCurrent((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    )
  }

 
  const prevProject = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    )
  }

  return (
    <section className="w-full min-h-screen text-white px-6 lg:px-20 py-16 overflow-hidden">

     
      <div className="text-center mb-16">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Latest <span className="text-purple-800">Project</span>
        </h1>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      
        <div className="space-y-8">

         
          <h2 className="text-7xl font-extrabold text-transparent stroke-text">
            {projects[current].id}
          </h2>

       
          <h3 className="text-4xl lg:text-5xl font-bold">
            {projects[current].title}
          </h3>

         
          <p className="text-gray-300 leading-8 max-w-xl text-lg">
            {projects[current].description}
          </p>

        
          <p className="text-purple-800 text-2xl font-medium">
            {projects[current].tech}
          </p>

          
          <div className="w-40 h-px bg-gray-600"></div>

          
          <div className="flex items-center gap-5">

          
            <button className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-4xl hover:bg-purple-800 hover:text-black transition-all duration-300">
              <FaArrowUp />
            </button>

            <button className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-4xl hover:bg-purple-800 hover:text-black transition-all duration-300">
              <FaGithub />
            </button>

          </div>
        </div>

        
        <div className="flex flex-col items-end gap-8">

         
          <div className="w-full max-w-180 h-90 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-lg">

            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-full object-cover duration-500"
            />

          </div>

           
          <div className="flex items-center gap-4">

           
            <button
              onClick={prevProject}
              className="w-20 h-16 border border-purple-800 rounded-xl flex items-center justify-center text-4xl text-purple-800-400 hover:bg-purple-800 hover:text-black transition-all duration-300"
            >
              <FaArrowLeft />
            </button>

           
            <button
              onClick={nextProject}
             className="w-20 h-16 border border-purple-800 rounded-xl flex items-center justify-center text-4xl text-purple-800-400 hover:bg-purple-800 hover:text-black transition-all duration-300"
            >
              <FaArrowRight />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestProject