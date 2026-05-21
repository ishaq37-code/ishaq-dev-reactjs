import { FaShopify, FaWordpress } from "react-icons/fa"
import Hero from "../components/hero"
import ServicesCards from "../components/ServicesCards"
import { FaStore } from "react-icons/fa6"
import { FiFigma } from "react-icons/fi"
import { CgIfDesign, CgWebsite } from "react-icons/cg"
import Heading from "../components/Heading"
import WhyHireMe from "../components/WhyHireMe"



const Home = () => {
  return (
    <div>
      <Hero/>
        <div  className=" mt-10">
          <Heading
          heading01='My '
          heading02='Services'
          />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">

      <ServicesCards heading='Wordpress'
      icons={FaWordpress}
      paragaph="Custom, fast, and easy-to-manage WordPress websites."
      />
      <ServicesCards 
      icons={FaStore}
      heading='Ecommerce'
      paragaph="Conversion-focused online stores with smooth UX."
      />
      <ServicesCards
      icons={FaShopify}
      heading='Shopify'
      paragaph="Custom, fast, and easy-to-manage WordPress websites."
      />
      <ServicesCards 
      icons={FiFigma}
      heading='figma'
      paragaph="Clean and modern UI/UX designs in Figma."
      />
       <ServicesCards 
      icons={CgWebsite}
      heading='Web Designer'
      paragaph="Modern designs optimized for all devices."
      />
       <ServicesCards 
      icons={CgIfDesign}
      heading='UI desin'
      paragaph="User-focused layouts with strong visual balance."
      />

      </div>
      </div>
      <WhyHireMe/>
    </div>
  )
}

export default Home