import "./App.css";
import Header from "./Pages/Home/Header"
import Hero from "./Pages/Home/Hero";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import ClickSpark from "./Component/clickspark";
import Button from "./Pages/Project/Button";

function App() {

  return (
    <>
    <ClickSpark 
    sparkColor='#D08700' 
    sparkSize={10} 
    sparkRadius={15} 
    sparkCount={8} 
    duration={400} >
      <section id="home">
        <Header/>
        <Hero />
      </section>
    
      <section id="about">
        <About />
      </section>

      <section id="project">
        <Project />
      </section>
      <Button/>
    </ClickSpark>
    </>
  );
}

export default App;
