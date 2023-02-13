import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

function App() {

  window.addEventListener("scroll", () => {

    console.log(window.scrollY)
  })

  return (
    <>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    
    </>
  );
}

export default App;
