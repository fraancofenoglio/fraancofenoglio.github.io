import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import GoUp from "./components/GoUp";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Projects from "./components/Projects";

function App() {

  const [show, setShow] = useState(false)


 window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
      setShow(true)
    } else {
      setShow(false)
    }
  })

  return (
    <>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
      {show ? <GoUp/> : ""}
      <Menu></Menu>

    
    </>
  );
}

export default App;
