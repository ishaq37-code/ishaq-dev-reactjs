

const Heading = ({heading01,heading02,className}) => {
  return (
    <div>
        <h1 className={`text-4xl font-[font1] text-center capitalize text-amber-50 ${className}`}>{heading01}<span className="text-purple-800  capitalize ml-1 ">{heading02}</span></h1>
    </div>
  )
}

export default Heading