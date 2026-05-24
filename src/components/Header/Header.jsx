import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { CgClose } from "react-icons/cg"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  const [open, setOpen] = useState(false)

  const mobileMenuRef = useRef(null)
  const linksRef = useRef([])
  const firstRender = useRef(true)

  // 🔥 BLOCK FIRST RENDER BUG
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    if (!mobileMenuRef.current) return

    if (open) {
      // OPEN MENU
      gsap.to(mobileMenuRef.current, {
        x: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })

      // STAGGER LINKS
      gsap.fromTo(
        linksRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          delay: 0.2,
          ease: "power3.out",
        }
      )
    } else {
      // CLOSE MENU
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      })
    }
  }, [open])

  // 🔥 BODY SCROLL LOCK
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  return (
    <div>
      {/* DESKTOP HEADER */}
      <div className="flex items-center justify-between px-10 py-4 bg-gray-900">
        
        {/* LOGO */}
        <h1 className="text-5xl font-[font1] text-white">
          ISHAQ.
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-7">
          <Link className="text-white hover:text-purple-500 text-xl" to="/">
            Home
          </Link>
          <Link className="text-white hover:text-purple-500 text-xl" to="/about">
            About
          </Link>
          <Link className="text-white hover:text-purple-500 text-xl" to="/project">
            Projects
          </Link>
          <Link className="text-white hover:text-purple-500 text-xl" to="/contact">
            Contact ME
          </Link>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          <FaBars
            className="text-3xl text-white cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 flex flex-col px-10 gap-6 py-20 z-50 bg-[#111827] w-full h-screen translate-x-full opacity-0"
      >
        {/* CLOSE BUTTON */}
        <CgClose
          className="absolute top-5 right-5 text-4xl text-white cursor-pointer bg-purple-800 p-2 rounded-full"
          onClick={() => setOpen(false)}
        />

        {/* LINKS */}
        <div className="flex flex-col gap-8 mt-10">
          <Link
            ref={(el) => (linksRef.current[0] = el)}
            className="text-3xl text-white"
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            ref={(el) => (linksRef.current[1] = el)}
            className="text-3xl text-white"
            to="/about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            ref={(el) => (linksRef.current[2] = el)}
            className="text-3xl text-white"
            to="/project"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>

          <Link
            ref={(el) => (linksRef.current[3] = el)}
            className="text-3xl text-white"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact ME
          </Link>
        </div>

        {/* BUTTON */}
        <button className="bg-purple-800 px-10 py-4 rounded-full mt-10 text-white text-xl hover:scale-105 transition">
          Download CV
        </button>
      </div>
    </div>
  )
}

export default Header