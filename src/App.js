// import logo from './logo.svg';
import './App.css';
// import CTPImg from './assets/logoq.png';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="">
            <Navbar/>
            <Intro/>
            <Skills/>
            <Projects/>
            <Contact/>
    </div>
  );
}

export default App;
