import { BsInstagram } from "react-icons/bs"
import Button from "./Button"
import Typing from "./Typing"
import { FaFacebook } from "react-icons/fa"
import { FaGithub, FaWhatsapp } from "react-icons/fa6"


const Hero = () => {
  return (
  <div className="min-h-screen px-5 md:px-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-[font1] font-bold ">ISHAQ ALTAF</h1>
            <Typing/>
            <p className="text-[15px] mt-4 leading-6 font-[font3] w-full md:w-1/2">I’m Ishaq, a passionate Web Developer with hands-on experience in WordPress, React.js, and frontend development. I specialize in creating clean, responsive, and performance-optimized websites for businesses and startups.</p>
       <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6">
        <Button 
        title="Download Cv"
        className="  duration-300 hover:bg-purple-600 shadow-lg shadow-purple-600/50"
        />
      <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-4">

  {/* Instagram */}
  <div className="border-2 border-purple-700 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-purple-700 transition-all duration-300">
    <BsInstagram className="text-lg md:text-2xl text-purple-700 hover:text-white" />
  </div>

  {/* Facebook */}
  <div className="border-2 border-purple-700 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-purple-700 transition-all duration-300">
    <FaFacebook className="text-lg md:text-2xl text-purple-700 hover:text-white" />
  </div>

  {/* GitHub */}
  <div className="border-2 border-purple-700 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-purple-700 transition-all duration-300">
    <FaGithub className="text-lg md:text-2xl text-purple-700 hover:text-white" />
  </div>

  {/* WhatsApp */}
  <div className="border-2 border-purple-700 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-purple-700 transition-all duration-300">
    <FaWhatsapp className="text-lg md:text-2xl text-purple-700 hover:text-white" />
  </div>

</div>
        </div>

        </div>
<div className="w-full md:w-1/2 flex justify-center ">
 <div className="relative w-70 h-70 mt-3.5 md:w-[32vw] md:h-[32vw] rounded-full p-2 flex items-center justify-center overflow-hidden">

  {/* rotating border */}
  <div className="absolute w-140 h-140 md:w-200 md:h-200 bg-[conic-gradient(transparent,transparent,transparent,#9333ea)] animate-[spin_10s_linear_infinite]"></div>

  <div className="absolute w-140 h-140 md:w-200 md:h-200 bg-[conic-gradient(transparent,transparent,transparent,#9333ea)] animate-[spin_10s_linear_infinite] [animation-delay:-5s]"></div>

  {/* image container */}
  <div className="relative w-full h-full bg-gray-800 rounded-full border border-gray-800 flex justify-center overflow-hidden z-1">

    <img
      src="/media/ishaq.jpg.png"
      alt=""
      className="absolute top-8 md:top-12 w-[85%] object-cover mix-blend-lighten"
    />

  </div>
</div>
</div>
    </div>
  )
}

export default Hero