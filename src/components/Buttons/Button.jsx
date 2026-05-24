

const Button = ({title,onClick,className, type="button"}) => {
  return (
    <div>
        <button 
         onClick={onClick}
         type={type}
           className={` bg-purple-800 px-10 py-4 rounded-full  font-[font1] border-0 cursor-pointer ${className}` }>{title}</button>
    </div>
  )
}

export default Button