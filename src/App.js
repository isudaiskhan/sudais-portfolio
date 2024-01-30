import About from "./About/About";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import ScrollButton from "./ScrollButton/ScrollButton";
import Skills from "./Skills/Skills";
import Testimonial from "./Testimonial/Testimonial";

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
     <ScrollButton />
    
   </>
  );
}

export default App;
