import About from "./About/About";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import Testimonial from "./Testimonial/Testimonial";
import WhatsApp from "./WhatsApp/WhatsApp";


function App() {
  return (
   <>

     <Navbar />
     <Hero />
     <About />
     <Experience />
     <Skills />
     <Portfolio />
     <Testimonial />
     <Contact />
     <Footer />
     <WhatsApp />
    
   </>
  );
}

export default App;