import Features from '../component/Home/Features'
import Hero from '../component/Home/Hero'
import HowItWorks from '../component/Home/HowItWorks'
import Insights from '../component/Home/Insights'
import Product from '../component/Home/Product'

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks/>
      <Features/>
      <Product/>
      <Insights/>
      
    </div>
  )
}

export default Home
