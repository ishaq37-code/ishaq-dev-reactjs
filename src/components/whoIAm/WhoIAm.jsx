import "react-vertical-timeline-component/style.min.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import { FaCode, FaWordpress, FaRocket } from "react-icons/fa"

const AboutTimeline = () => {
  return (
    <div className="bg-gray-800 py-20 px-6 lg:px-32 text-white">

      {/* HEADING */}
      <h2 className="text-4xl lg:text-6xl font-bold text-center mb-20">
        About<span className="text-purple-500"> Me</span>
      </h2>

      <VerticalTimeline lineColor="#a855f7">

        {/* 1 */}
        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(135deg, #1f2937, #111827)",
            color: "#e5e7eb",
            borderRadius: "16px",
            border: "1px solid rgba(168,85,247,0.3)",
            boxShadow: "0 10px 30px rgba(168,85,247,0.15)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
          iconStyle={{
            background: "#a855f7",
            color: "#fff",
          }}
          icon={<FaCode />}
        >
          <h3 className="text-xl font-semibold">
            Started Web Development
          </h3>
          <p className="text-gray-300">
            HTML, CSS and JavaScript se journey start ki.
          </p>
        </VerticalTimelineElement>

        {/* 2 */}
        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(135deg, #1f2937, #0f172a)",
            color: "#e5e7eb",
            borderRadius: "16px",
            border: "1px solid rgba(168,85,247,0.3)",
            boxShadow: "0 10px 30px rgba(168,85,247,0.15)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
          iconStyle={{
            background: "#a855f7",
            color: "#fff",
          }}
          icon={<FaWordpress />}
        >
          <h3 className="text-xl font-semibold">
            WordPress Developer
          </h3>
          <p className="text-gray-300">
            eCommerce aur business websites banaye clients ke liye.
          </p>
        </VerticalTimelineElement>

        {/* 3 */}
        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(135deg, #1f2937, #0f172a)",
            color: "#e5e7eb",
            borderRadius: "16px",
            border: "1px solid rgba(168,85,247,0.3)",
            boxShadow: "0 10px 30px rgba(168,85,247,0.15)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
          iconStyle={{
            background: "#a855f7",
            color: "#fff",
          }}
          icon={<FaCode />}
        >
          <h3 className="text-xl font-semibold">
            React Developer
          </h3>
          <p className="text-gray-300">
            GSAP animations aur modern UI components banaye.
          </p>
        </VerticalTimelineElement>

        {/* 4 */}
        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(135deg, #1f2937, #111827)",
            color: "#e5e7eb",
            borderRadius: "16px",
            border: "1px solid rgba(168,85,247,0.3)",
            boxShadow: "0 10px 30px rgba(168,85,247,0.15)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
          iconStyle={{
            background: "#a855f7",
            color: "#fff",
          }}
          icon={<FaRocket />}
        >
          <h3 className="text-xl font-semibold">
            Full Stack Goal
          </h3>
          <p className="text-gray-300">
            BrandOrbit agency + full stack developer banna hai.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default AboutTimeline