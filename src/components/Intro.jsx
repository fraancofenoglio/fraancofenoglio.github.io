import { useState } from "react";
import { IMG } from "../utils.js";
import IconsIMG from "./IconsIMG";

const Intro = () => {

    const [showname, setShowname] = useState(false)
    const [showdev, setShowdev] = useState(false)
    const [showfront, setShowfront] = useState(false)
    
    setTimeout(() => {
        setShowname(true)
    }, 1000);
    setTimeout(() => {
        setShowdev(true)
    }, 1500);
    setTimeout(() => {
        setShowfront(true)
    }, 2000);

  return (
    <section className="intro">

        <div className="left-side">

            <div className="name">
                <h2>Hola, soy </h2>
                <h1 style={showname ? {opacity: "1"} : {opacity: "0"}}>Franco Fenoglio</h1>
                <h3 style={showdev ? {opacity: "1"} : {opacity: "0"}}>Desarrollador Web
                     <span className="rotate-vert-center" style={showfront ? {opacity: "1"} : {opacity: "0"}}>
                      Front End
                    </span>
                </h3>

            </div>
            <div  className="skills">
                {
                    IMG.map((img, i) => (
                        <IconsIMG key={i} src={img.src} transtition={img.transition} alt={img.alt} showfront={showfront}></IconsIMG>
                    ))
                }
            </div>
        </div>

        <div className="right-side">
            <div style={showname ? {opacity: "1"} : {opacity: "0"}} className="my-img">
            </div>
            <a className="download-cv" href="./assets/CV-FrancoFenoglio2023.pdf" download="CV-FrancoFenoglio2023"> Descargar CV actualizado</a>
        </div>

    </section>
  )
}

export default Intro