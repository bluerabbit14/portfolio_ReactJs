import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import About from './Components/About';
import Project from './Components/Project';
import Skill from './Components/Skill';
import VerticallScroll from './Components/VerticallScroll';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Project></Project>
    <About></About>
    <Skill></Skill>
    <VerticallScroll></VerticallScroll>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
