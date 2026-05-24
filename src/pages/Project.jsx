import ProjectsHero from "../components/Hero/HeroProject"
import StatsSection from "../components/other/StatsSection"
import FeaturedProject from "../components/projects/ProjectFeauture"
import AllProjects from "../components/projects/ProjectTab"


const Project = () => {
  return (
    <div>
     <ProjectsHero/>
     <FeaturedProject/>
     <AllProjects/>
     <StatsSection/>
    </div>
  )
}

export default Project