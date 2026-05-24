import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

const faqData = [
  {
    question: "What services do you provide?",
    answer:
      "I build responsive websites, React applications, animated landing pages and WordPress business websites.",
  },

  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I’m available for remote work and freelance collaborations worldwide.",
  },

  {
    question: "Which technologies do you use?",
    answer:
      "I mainly work with React.js, Tailwind CSS, GSAP, JavaScript and WordPress.",
  },

  {
    question: "Can you redesign existing websites?",
    answer:
      "Yes, I can redesign outdated websites into modern responsive interfaces.",
  },
]

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-gray-800 px-6 md:px-10 py-20 text-white">

      {/* HEADING */}
      <div className="text-center mb-16">

        <p className="text-purple-500 tracking-[5px] mb-3 font-[font3]">
          FAQ
        </p>

        <h1 className="text-4xl font-bold font-[font1]">
          Frequently Asked Questions
        </h1>

      </div>

      {/* FAQ CONTAINER */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6">

        {faqData.map((item, index) => (

          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-[25px]
            overflow-hidden hover:border-purple-500 transition-all duration-300"
          >

            {/* QUESTION */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between
              text-left px-6 md:px-8 py-6"
            >

              <h2 className="text-xl font-semibold">
                {item.question}
              </h2>

              <div
                className="min-w-10 h-10 rounded-full
                bg-purple-500/10 border border-purple-500/20
                flex items-center justify-center text-purple-500"
              >
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>

            </button>

            {/* ANSWER */}
            <div
              className={`grid transition-all duration-500 ease-in-out
              ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >

              <div className="overflow-hidden">

                <p className="text-gray-400 leading-8 px-6 md:px-8 pb-8">
                  {item.answer}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default FAQ