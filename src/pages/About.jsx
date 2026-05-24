


import Skills from "../components/cards/SkillsCards"
import CTA from "../components/CTA/CTA"
import AboutHero from "../components/Hero/HeroAbout"
import ProjectsPreview from "../components/projects/ProjectAbout"

import AboutTimeline from "../components/whoIAm/WhoIAm"


const About = () => {
  return (
    <div className=" bg-gray-800">

     <AboutHero/>
      <AboutTimeline/>
    <Skills/>
    <ProjectsPreview/>
    <CTA/>
    </div>
  )
}

export default About