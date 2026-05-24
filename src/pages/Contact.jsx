
import ContactFrom from "../components/Form/Form"
import FAQ from "../components/Form/FormContact"
import ContactHero from "../components/Hero/HeroContact"
import AvailabilitySection from "../components/other/AvailableSection"
import WhyWorkWithMe from "../components/Why-Work-with-Me/WhyWorkWithMe"


const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <WhyWorkWithMe/>
      <AvailabilitySection/>
      <FAQ/>
      <ContactFrom/>
    </div>
  )
}

export default Contact