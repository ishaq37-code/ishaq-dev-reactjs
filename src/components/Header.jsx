import { useState } from "react"

import { CgClose } from "react-icons/cg"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"


const Header = () => {

const [open, setopen] = useState(false)

    return (
        <div>
    <div className="flex items-center justify-between px-10 py-4 bg-gray-700">
      <div className="flex items-center">
       
        <h1 className="text-5xl font-[font1]">ISHAQ.</h1>
      </div>

<div className="items-center gap-7 hidden md:flex">
   <Link className="font-[font3] text-xl font-medium" to='/'>Home</Link>
   <Link className="font-[font3] text-xl font-medium" to='/about'>About</Link>
   <Link className="font-[font3] text-xl font-medium" to='/project'>Projects</Link>
   <Link className="font-[font3] text-xl font-medium" to='/contact'>Contact ME</Link>
</div>
<div className="md:hidden">

<FaBars onClick={()=>{
    setopen(!open)
}}/>
</div>

    </div>
  
    <div
  className={`fixed top-0 flex flex-col  px-10 gap-6 py-30 z-10 bg-gray-600 w-full h-screen transition-all duration-500 ${
    open
      ? "right-0 opacity-100"
      : "-right-full opacity-0"
  }`}
>   
    <CgClose className=" absolute top-5  text-4xl   text-amber-50 font-bold right-5 bg-purple-800 p-2 flex items-center justify-center rounded-full" onClick={()=>{
        setopen(!open)
    }} />
    <div className=" flex flex-col   gap-6">
    
    <Link className="font-[font3] text-xl font-medium" to='/'    onClick={() => setopen(false)}>Home</Link>
   <Link className="font-[font3] text-xl font-medium" to='/about'   onClick={() => setopen(false)}>About</Link>
   <Link className="font-[font3] text-xl font-medium" to='/project'   onClick={() => setopen(false)}>Projects</Link>
   <Link className="font-[font3] text-xl font-medium" to='/contact'   onClick={() => setopen(false)}>Contact ME</Link>

    </div>
    <button className=" bg-purple-800 px-10 py-4 rounded-full mt-10 font-[font1] border-0 cursor-pointer">Download Cv</button>
    </div>

  </div>
  )
}

export default Header