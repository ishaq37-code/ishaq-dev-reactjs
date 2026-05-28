import gsap from "gsap";
import { useEffect, useRef } from "react";


const Typing = () => {

     const words = ["Frontend", "Backend", "WordPress", "React.js"]; 
     const textRef= useRef(null)

    useEffect(() => {
      let index=0
       const animate=()=>{
         const el= textRef.current;
        
       gsap.to(el,{
        opacity:0,
        duration:0.1,
        onComplete:()=>{
            index= (index+1) % words.length
            el.textContent=words[index]
        
        gsap.fromTo(
            el,
            {opacity:0, x:10},
            {opacity:1, x:0, duration:1}
        );
        
        }


       });

       }

         const interval= setInterval(animate, 1600)
         return ()=> clearInterval(interval)
    }, [])
  return (
    
     




    <div>
        <h1 className="text-4xl font-[font1] capitalize  "> I am <span ref={textRef} className="text-purple-800">Frontend</span> Developer</h1>
    </div>
  )
}

export default Typing