import { useState } from "react"
import Modal from "./Modal";

const About = () => {

    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState("");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 100){
            setShowFirst(true)
        }else{
            setShowFirst(false)
        }

        if (window.scrollY > 280){
            setShowSecond(true)
        } else{
            setShowSecond(false)
        }

        if(window.scrollY > 480){
            setShowThird(true)
        } else {
            setShowThird(false)
        }
    })

  return (
    <>
        <section className="about" id="about">

            <h1 className={!showFirst ? "about-me-title" : "about-me-title show"}>Sobre mí</h1>
            <div className="about-me">
                <p className={!showFirst ? "text-about" : "text-about show"}>
                    Tuve interés en programación hace algunos años pero no fue hasta 2021 que tomé la decisión de meterme de lleno en el desarrollo web. Opté por realizar el curso Full Stack de Nucba, el cual finalicé en 2022.
                </p>
                <p className={!showSecond ? "text-about" : "text-about show"}>
                    Tengo conocimientos en JavaScript, React, Redux, React Router y Firebase, pero me gusta ir sumando nuevos conocimientos.
                    También desarrollo webs de manera freelance utilizando estas tecnologías que, aplicando buenas prácticas de programación, me permiten realizar un diseño responsivo para que la web se adapte a todos los dispositivos.
                </p>

                <div className={!showThird ? "certifications" : "certifications show"}>
                    <h1 className="certifications-title">Certificaciones</h1>
                    <div className="certicate-wrapper">
                        <img onClick={(e) => {
                             setImg(e.target.src);
                             setOpen(true);
                        }} className="certificate-img" src="./assets/certificado-frontend.png" alt="certificado front end" />
                        <img onClick={(e) => {
                             setImg(e.target.src);
                             setOpen(true);
                        }} className="certificate-img" src="./assets/certificado-backend.png" alt="certificado back end" />
                        <img onClick={(e) => {
                             setImg(e.target.src);
                             setOpen(true);
                        }} className="certificate-img" src="./assets/certificado-fullstack.png" alt="certificado fullstack" />
                    </div>

                </div>
            </div>

        </section>
        <Modal open={open} setOpen={setOpen}>
            <img src={img} alt="selected certificate"/>
        </Modal>
    </>
  )
}

export default About