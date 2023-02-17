import {useState } from "react"
import { projects } from "../utils.js"
import Modal from "./Modal.jsx"
const Projects = () => {

    const initialState = {
        title: "",
        description: "",
        img: "",
        technologies: "",
        github: "",
        deploy: ""
    }

    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const [showproject, setShowproject] = useState(initialState);
    const [showsection, setShowsection] = useState(false)

    window.addEventListener("scroll", () =>{

        if(window.scrollY > 910){

            setShowsection(true)
        } else {
            setShowsection(false)
        }
    })

  return (
    <>
        <section className="projects" id="projects" style={!showsection ? {opacity: "0"} : {opacity: "1"}}>
            <h1>Proyectos</h1>

            <div className="projects-list">
                {
                    projects.map((project, i) => (
                        <div key={i} className="project-resume" onClick={() => {
                            setOpen(true);
                            setShowproject({
                                title: project.title,
                                description: project.description,
                                img: project.img,
                                technologies: project.technologies,
                                github: project.github,
                                deploy: project.deploy
                            });
                            setType("project");
                        }}>
                            <h3>{project.title}</h3>
                            <img src={project.img} alt={project.title} />
                        </div>
                    ))
                }

            </div>

        </section>

        <Modal open={open} setOpen={setOpen} type={type}>
            <div className="project">
                <div className="project-header">
                    <h2>{showproject.title}</h2>
                    <h3>{showproject.technologies}</h3>
                </div>
                <div className="project-content">
                    <div className="project-img">
                        <img src={showproject.img} alt={showproject.title} />
                    </div>
                    <div className="project-description">
                        <p>{showproject.description}</p>
                        <div className="project-links">
                            <a href={showproject.github} target="_blank" rel="noreferrer">
                                {/* <img src="./assets/github-logo-48.png" alt="github" /> */}
                                VER REPOSITORIO
                            </a>

                            <a href={showproject.deploy} target="_blank" rel="noreferrer">VER PÁGINA</a>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </>
  )
}

export default Projects