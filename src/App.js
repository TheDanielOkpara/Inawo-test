import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ImageText from "./components/ImageText"
import Navbar from "./components/Navbar"
import Screenshot from "./components/Screenshot"
import Services from "./components/Services"
import Wish from "./components/Wish"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageText />

      <Screenshot />

      <Services />
      <Wish />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
