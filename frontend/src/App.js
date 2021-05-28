import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Container from './Components/Container/Container';
import './styles/app.scss';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <>      
      <Nav />
      <Hero /> 
      <Projects />
      <Container>
        <Intro />
      </Container>    
      <Container>
        <Skills />
      </Container> 
    </>
  );
}

export default App;
