const IMG = [
    {
        src: "./assets/html5-logo-48.png",
        alt: "HTML"
    },
    {
        src: "./assets/css3-logo-48.png",
        alt: "CSS"
    },
    {
        src: "./assets/javascript-logo-48.png",
        alt: "JS"
    },
    {
        src: "./assets/logo192.png",
        alt: "React"
    },
    {
        src: "./assets/nodejs-logo-48.png",
        alt: "NodeJS"
    },
    {
        src: "./assets/github-logo-48.png",
        alt: "github"
    },
    {
        src: "./assets/redux-logo-48.png",
        alt: "Redux"
    },
    {
        src: "./assets/firebase-logo-48.png",
        alt: "Firebase"
    }
]

const projects = [
    {
        title: "Trineo Viajes",
        description: "Este proyecto es sobre un e-commerce viajes. Se utilizó React, combinado con React Router para el enrutamiento, Redux para el manejo del carrito de compras y la sesión de usuario. A su vez se utilizó Firebase para el registro/inicio de sesión y también una vez que se concreta la compra de un viaje, se genera una orden que contiene los datos de la compra realizada y puede ser visualizada desde el perfil del usuario.",
        img: "./assets/trineoviajes.png",
        technologies: "React, React Router, Redux y Firebase",
        github: "https://github.com/fraancofenoglio/TrineoViajesReact",
        deploy: "https://trineo-viajes-react.vercel.app/",
    },
    {
        title: "Distribuidora Cafaro",
        description: "Este proyecto es una landing page realizada para un familiar, para un futuro deploy en un hosting y dominio. Actualmente se encuentra el deploy hecho en Vercel. Esta landing es sobre una empresa distribuidora de alimentos. Se utilizó React y React Router. ",
        img: "./assets/distribuidoracafaro.png",
        technologies: "React y React Router",
        github: "https://github.com/fraancofenoglio/distribuidoracafaro-react",
        deploy: "https://distribuidoracafaro.vercel.app/"
    },
    {
        title: "Strauss Instruments",
        description: "Este proyecto es la primer landing que hice, la cuál solo se utilizó HTML y CSS puro. Es sobre una tienda de instrumentos musicales",
        img: "./assets/straussinstruments.png",
        technologies: "HTML y CSS",
        github: "https://github.com/fraancofenoglio/Strauss-Instruments",
        deploy: "https://strauss-instruments-ff.vercel.app/"
    }
]

export {IMG, projects}