

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa"

const ContactFrom = () => {

  
  return (
    <div className="w-full min-h-screen  text-white px-6 lg:px-10 py-16">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* HEADING */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-16">
            Lets Work Together
          </h1>

          {/* PHONE */}
          <div className="flex items-center gap-5 mb-12">

            <div className="w-16 h-16 rounded-2xl bg-gray-700 flex items-center justify-center text-3xl text-purple-500">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Phone :
              </h3>

              <p className="text-xl text-gray-300">
                (+92 3193325112)
              </p>
            </div>

          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-5 mb-12">

            <div className="w-16 h-16 rounded-2xl bg-gray-700 flex items-center justify-center text-3xl text-purple-500">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Email :
              </h3>

              <p className="text-xl text-gray-300">
                Ishaqaltaf67@gmail.com
              </p>
            </div>

          </div>

          {/* ADDRESS */}
          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-gray-700 flex items-center justify-center text-3xl text-purple-500">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Address:
              </h3>

              <p className="text-xl text-gray-300">
                Karachi, Pakistan
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* HEADING */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-10 text-center">
            Contact <span className="text-purple-600">Me!</span>
          </h1>

          {/* FORM BOX */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert("Message sent! I will get back to you soon.")
              e.target.reset()
            }}
            className="bg-gray-900 p-8 rounded-3xl"
          >

            {/* INPUT */}
            <input
              type="text"
              name="fullname"
             
              placeholder="Full Name"
              className="w-full h-14 px-5 rounded-xl bg-gray-800 outline-none border border-transparent focus:border-purple-600 mb-5"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              
              placeholder="Email Address"
              className="w-full h-14 px-5 rounded-xl bg-gray-800 outline-none border border-transparent focus:border-purple-600 mb-5"
            />

            {/* PHONE */}
            <input
              type="text"
              name="phone"
              
              placeholder="Phone Number"
              className="w-full h-14 px-5 rounded-xl bg-gray-800 outline-none border border-transparent focus:border-purple-600 mb-5"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              
              placeholder="Your Message"
              rows="7"
              className="w-full p-5 rounded-xl bg-gray-800 outline-none border border-transparent focus:border-purple-600 mb-8 resize-none"
            ></textarea>

            {/* BUTTON */}
            <div className="flex justify-center">

              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 transition-all duration-300 px-14 py-4 rounded-full text-xl font-semibold shadow-[0_0_30px_rgba(168,85,247,0.7)]"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  )
}

export default ContactFrom