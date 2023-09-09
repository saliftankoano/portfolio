// import logo from './logo.svg';
import './App.css';
// import CTPImg from './assets/logoq.png';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="">
            <Navbar/>
            <Intro/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
    </div>
  );
}

export default App;
