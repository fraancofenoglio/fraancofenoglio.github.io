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
    },
    {
        title: "Reloj Web",
        description: "Se trata de un proyecto simple sobre un reloj web que tiene la posibilidad de elegir un tema.",
        img: "./assets/relojweb.png",
        technologies: "React, JavaScript",
        github: "https://github.com/fraancofenoglio/reloj-web",
        deploy: "https://reloj-web.vercel.app/"
    },
    {
        title: "Calculadora Web",
        description: "Se trata de una simple calculadora con operaciones básicas como suma, resta, multiplicación y división.",
        img: "./assets/calculadora.png",
        technologies: "React, JavaScript",
        github: "https://github.com/fraancofenoglio/calculadora-basica",
        deploy: "https://calculadora-ff.vercel.app/"
    },
    {
        title: "Tempify",
        description: "Este proyecto es una app que muestra datos del tiempo actual como temperaturas máxima y mínima, nubosidad, presión, viento, etc. Consume la API de OpenWeatherMap",
        img: "./assets/tiempify2.png",
        technologies: "React, JavaScript",
        github: "https://github.com/fraancofenoglio/Tiempify",
        deploy: "https://tempify-ff.vercel.app/"
    },

]

export {IMG, projects}