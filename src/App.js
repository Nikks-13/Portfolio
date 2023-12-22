import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { darkTheme } from './utils/Theme';
import Education from './components/Education';
import Skills from './components/Skills';
import Hero from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import { BrowserRouter as Router } from 'react-router-dom';

 const Body =styled.div`
 background-color:${({theme})=> theme.bg};
 width: 100%;
 height: 100%;
 overflow-x:hidden;
 `;
 const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 99%, 0 100%);

`

function App() {
  
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
          <Education />
        <Project openModal={openModal} setOpenModal={setOpenModal} />
         <Contact/>
        </Wrapper>
      <Footer/>
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Body>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
