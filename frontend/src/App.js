import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import IntroContainer from './Components/Intro/IntroContainer';
import Container from './Components/Container/Container';


function App() {
  return (
    <>
      <Nav />
      <Hero /> 
      <Container>
        <IntroContainer />      
      </Container>     
    </>
  );
}

export default App;
