//import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Container from './Components/Container/Container';
import './styles/app.scss';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
// import Music from './Components/Music/Music';
import Contact from './Components/Contact/Contact';
import { useEffect, useState } from 'react';


function App() {
  const [top, returnToTop] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0      
  });  
  returnToTop(true);
  }, []);

  return (
    <>      
      {top &&
      <>      
      <Nav />
      <Contact />
      <Hero />           
      <Container isFlex isHalf>
        <Intro />
      </Container>    
      <Container>
        <Projects />
      </Container>
      <Container>
        <Skills />
      </Container> 
      </>
      }      
    </>
  );
}

export default App;
