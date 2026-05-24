import {
  FaUser,
  FaBirthdayCake,
  FaVenusMars,
  FaHeart,
  FaBriefcase,
  FaGlobe,
  FaCity,
  FaPhone,
  FaEnvelope,
  FaLanguage,
} from "react-icons/fa";

const data = [
  { icon: FaUser, label: "Name", value: "Ishaq" },
  { icon: FaBirthdayCake, label: "Age", value: "21" },
  { icon: FaVenusMars, label: "Gender", value: "Male" },
  { icon: FaHeart, label: "Status", value: "Single" },
  { icon: FaBriefcase, label: "Experience", value: "2+ Year" },
  { icon: FaGlobe, label: "Nationality", value: "Pakistan" },
  { icon: FaCity, label: "City", value: "Karachi, Pakistan" },
  { icon: FaBriefcase, label: "Fulltime", value: "Available" },
  { icon: FaBriefcase, label: "Freelance", value: "Available" },
  { icon: FaPhone, label: "Phone", value: "(+92) 319-3325112" },
  { icon: FaEnvelope, label: "Email", value: "ishaqaltaf67@gmail.com" },
  { icon: FaLanguage, label: "Language", value: "English, Urdu" },
];

const AboutMe = () => {
  return (
    <div className="h-100 overflow-y-auto p-6 rounded-xl custom-scrollbar ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-purple-900/10 hover:bg-purple-900/20 transition"
            >
              <Icon className="text-purple-400 text-lg" />
              <div>
                <p className="text-purple-300 text-sm">{item.label}</p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;