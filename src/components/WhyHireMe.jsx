import { useState, useEffect, useRef } from "react"
import gsap from "gsap"

import Heading from "./Heading"
import Cards from "./whyHireCards/ExperincedCards"
import SkillCard from "./whyHireCards/SkillsCards"
import AboutMe from "./whyHireCards/AboutMe"

import { FaFigma, FaHtml5, FaJava, FaReact, FaWordpress } from "react-icons/fa"
import { FaCss } from "react-icons/fa6"

const WhyHireMe = () => {
  const [Buttonss, setButtonss] = useState("Experince")

  const buttons = ["Experince", "Skills", "Eduacation", "About Me"]

  const contentRef = useRef(null)

  // 🔥 TAB CHANGE ANIMATION
  useEffect(() => {
    if (!contentRef.current) return

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 25, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" }
    )
  }, [Buttonss])

  return (
    <div className="flex-col flex lg:flex-row p-10 gap-5 mt-10">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2">
        <Heading heading01="Why hire me" className="text-left" />

        <p className="text-sm sm:text-base leading-7 mt-4 text-gray-300">
          You should hire me because I focus on delivering clean, modern, and user-friendly digital solutions that help businesses grow.
          I understand client requirements clearly, design with purpose, and build websites that are fast, responsive, and conversion-focused.
        </p>

        {/* BUTTONS */}
        <div className="flex-col mb-5 gap-5 mt-5 items-stretch flex">
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`bg-gray-600 border-2 border-gray-500 rounded-xl font-medium text-2xl cursor-pointer flex items-center justify-center w-80 h-15 tracking-[2px]
                ${Buttonss === btn ? "border-purple-800 text-purple-800" : "text-gray-100"}`}
              
              onClick={(e) => {
                setButtonss(btn)

                // 🔥 button press animation
                gsap.fromTo(
                  e.currentTarget,
                  { scale: 1 },
                  { scale: 0.92, duration: 0.1, yoyo: true, repeat: 1 }
                )
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div ref={contentRef} className="w-full lg:w-1/2">

        {/* EXPERIENCE */}
        {Buttonss === "Experince" && (
          <div>
            <Heading heading01="my" heading02="Experince" className="text-left mb-5" />
            <p>Hands-on experience in web development, eCommerce, and UI design.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
              <Cards year="2022–2023" title="Frontend Developer" company="ABC Corp" description="Created responsive UI using HTML, CSS, and JavaScript." />
              <Cards year="2024–2025" title="eCommerce Specialist" company="Freelance" description="Built WooCommerce and Shopify online stores." />
              <Cards year="2023–2024" title="UI Designer" company="Freelance" description="Designed clean and modern interfaces in Figma." />
              <Cards year="2025–Present" title="Web Developer" company="Remote" description="Working on modern, performance-focused web projects." />
            </div>
          </div>
        )}

        {/* SKILLS */}
        {Buttonss === "Skills" && (
          <div>
            <Heading heading01="my" heading02="Skills" className="text-left mb-5" />
            <p>Hands-on experience in web development, eCommerce, and UI design.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              <SkillCard icon={FaHtml5} label="HTML" />
              <SkillCard icon={FaCss} label="CSS" />
              <SkillCard icon={FaWordpress} label="WordPress" />
              <SkillCard icon={FaReact} label="React" />
              <SkillCard icon={FaFigma} label="Figma" />
              <SkillCard icon={FaJava} label="JavaScript" />
            </div>
          </div>
        )}

        {/* EDUCATION */}
        {Buttonss === "Eduacation" && (
          <div>
            <Heading heading01="my" heading02="Education" className="text-left mb-5" />
            <p>My academic and professional learning journey.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 w-full h-100 overflow-auto custom-scrollbar overflow-x-hidden">
              <Cards year="2010–2020" title="Matric (Computer Science)" company="Matcless Grammar School" description="Completed basic school education." />
              <Cards year="2024–2025" title="Intermediate (Commerce)" company="Pak Shipowner College" description="Studied commerce and business subjects." />
              <Cards year="2023–2024" title="UI Designer" company="Freelance" description="Designed UI in Figma." />
              <Cards year="2023" title="WordPress Development" company="SkyTech Institute" description="Learned WordPress development." />
              <Cards year="2024" title="Frontend Development" company="Online Course" description="HTML, CSS, JavaScript, responsive design." />
              <Cards year="2025" title="Shopify Design" company="Online Training" description="Shopify store setup and customization." />
              <Cards year="2026–Present" title="Software Engineering" company="Online Training" description="Learning advanced development." />
            </div>
          </div>
        )}

        {/* ABOUT */}
        {Buttonss === "About Me" && (
          <div>
            <Heading heading01="About" heading02="Me" className="text-left mb-5" />
            <p>Short introduction about my skills and experience.</p>

            <AboutMe />
          </div>
        )}

      </div>
    </div>
  )
}

export default WhyHireMe