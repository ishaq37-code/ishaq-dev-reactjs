

const Cards = ({ year,
  title,
  company,
  description,}) => {
  return (
    <div
      className="
        bg-[#2b3245]
        rounded-2xl
        p-6
        w-full 
        
       
        hover:scale-105
        transition-all
        duration-300
      "
    >
      {/* Year */}
      <span className="text-purple-800 text-sm font-medium">
        {year}
      </span>

      {/* Title */}
      <h2 className="text-white text-2xl capitalize font-bold">
        {title}
      </h2>

      {/* Company */}
      <p className="text-gray-300 text-sm">
        {company}
      </p>

      {/* Description */}
      <p className="text-white leading-7 text-sm">
        {description}
      </p>
    </div>
  )
}

export default Cards