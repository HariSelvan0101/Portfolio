import './App.css';
import Header from './componens/Header';
import Hero from './componens/hero';
import Projects from './componens/projects';
import Skills from  './componens/skills'
import Resume from './componens/resume';
import Contact from './componens/contact';
import Footer from './componens/footer';
function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Skills />
     <Projects />
     <Resume />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
