

const SkillCard = ({ icon:Icon, label }) => {
  return (
    <div className="relative group w-40 h-40 bg-[#2b3245] rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer">

      {/* Icon */}
     <div className="w-20 h-20 text-6xl flex items-center justify-center rounded-full text-white group-hover:text-purple-400 transition-colors duration-300">
      {Icon && <Icon />}
    </div>

      {/* Hover Label */}
      <div
        className="
          absolute bottom-0
          w-full
          bg-black/70
          text-white
          text-center
          py-2
          translate-y-full
          group-hover:translate-y-0
          transition-all
          duration-300
          text-sm
          tracking-wide
        "
      >
        {label}
      </div>

    </div>
  );
};

export default SkillCard;