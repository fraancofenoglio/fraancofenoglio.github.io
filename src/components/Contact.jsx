import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const [showsection, setShowsection] = useState(false);
    const [value, setValue] = useState("Enviar");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    window.addEventListener("scroll", () =>{

        if(window.scrollY > 1485){

            setShowsection(true)
        } else {
            setShowsection(false)
        }
    })

    useEffect(() => {
        if(value === "Enviado!"){
            setTimeout(() => {
                setValue("Enviar")
            }, 4000);
        }
      
    }, [value])
    

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_b2myntb", "template_7602ila", form.current, "7NqG_0L9oXGAZ--p5");

        setValue("Enviado!");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

    }

  return (
    <>
    <section className="contact" style={!showsection ? {opacity: "0"} : {opacity: "1"}}>
        <h1 className="contact-title">Contacto</h1>
        <div className="social-wrapper">
            <div className="social">
                <h3>Para contactarse conmigo y hablar sobre un empleo o proyecto:</h3>
                <div className="social-item">
                    <img src="./assets/linkedin-square-logo-48.png" alt="linkedin" />
                    <a href="https://www.linkedin.com/in/francofenoglio/" target="_blank" rel="noreferrer">linkedin/in/francofenoglio</a>
                </div>
                <div className="social-item">
                    <img src="./assets/github-logo-48.png" alt="github" />
                    <a href="https://github.com/fraancofenoglio" target="_blank" rel="noreferrer">github.com/fraancofenoglio</a>
                </div>
                <div className="social-item">
                    <img src="./assets/envelope-regular-48.png" alt="email" />
                    <a href="mailto:francofeno26@gmail.com">francofeno26@gmail.com</a>
                </div>

            </div>
            <div>
                <form ref={form} className="form-contact" onSubmit={handleSubmit}>
                    <h3>También podés escribirme por acá:</h3>
                    <label htmlFor="name" >Nombre:</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" name="from_name" id="name" placeholder=" Tu nombre" min={"1"} max={"15"} required value={name}/>
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email_id" id="email" placeholder=" Tu email" required value={email}/>
                    <label htmlFor="subject">Asunto:</label>
                    <input onChange={(e) => setSubject(e.target.value)} type="text" name="subject" id="subject" placeholder=" Asunto" min={"1"} max={"30"}required value={subject}/>
                    <label htmlFor="message">Deja tu mensaje:</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} name="message" id="message" cols="30" rows="5" placeholder=" Tu mensaje..." required min={"1"} value={message}></textarea>
                    <input type="submit" value={value} />
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact