import Hero from './Components/Hero';
import Quote from './Components/Quote';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import SkillSlider from './Components/SkillSlider';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import ScrollProgress from './Components/ScrollProgress';
import './App.css';

function App() {
  return (
    <>
    <Hero></Hero>
    <Quote></Quote>
    <SkillSlider></SkillSlider>
    <About></About>
    <Projects></Projects>
    <Skills></Skills>
    <Experience></Experience>
    <Contact></Contact>
    <Footer></Footer>
    <ScrollProgress></ScrollProgress>
    </>
  );
}

export default App;
