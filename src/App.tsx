import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Presentation from './components/Presentation/Presentation';
import Skills from './components/Skills/Skills';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Presentation />
      <AboutMe />
      <Skills /> 
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
