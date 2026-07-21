import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

const LandingPage = () => {
  return (
    <div className="bg-[#030712] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default LandingPage