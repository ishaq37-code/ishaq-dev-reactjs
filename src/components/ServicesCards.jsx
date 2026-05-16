import { FaArrowRight,  } from "react-icons/fa"


const ServicesCards = ({heading,paragaph, icons: Icon}) => {
  return (
   <div className="group p-5  border-4 border-gray-500 hover:border-purple-800 transition-all duration-300 rounded-xl shadow-md flex flex-col gap-3 bg-gray-600">

  <div className=" flex items-center justify-between">

    {/* ICON */}
    <div className="w-20 h-20 text-6xl flex items-center justify-center rounded-full text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
      {Icon && <Icon />}
    </div>

    {/* ARROW */}
    <FaArrowRight 
      className="w-12 h-12 p-2 bg-purple-800 text-2xl flex items-center  justify-center rounded-full text-white group-hover:bg-white group-hover:text-purple-800 transition-all duration-300 "
    />

  </div>

  <h1 className="text-2xl font-[font1] capitalize  font-bold">
    {heading}
  </h1>

  <p className="text-sm font-[font3] text-gray-200">
    {paragaph}
  </p>

</div>
  )
}

export default ServicesCards