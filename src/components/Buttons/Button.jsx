

const Button = ({title,onclick,className, type="button"}) => {
  return (
    <div>
        <button 
    onclick={onclick}
    type={type}
    className={` bg-purple-800 px-10 py-4 rounded-full  font-[font1] border-0 cursor-pointer ${className}` }
    
    
    >{title}</button></div>
  )
}

export default Button