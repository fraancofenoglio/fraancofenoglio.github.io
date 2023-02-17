import { useState } from 'react';
import {HashLink} from 'react-router-hash-link'

const Menu = () => {

  const [openMenu, setOpenmenu] = useState(false);

  return (

    <>
      <div onClick={() => {
        setOpenmenu(!openMenu)
      }} className='menu-button'>
        <img src={!openMenu ? "./assets/menu-regular-72.png" : "./assets/x-regular-72.png"} alt="" />
      </div>

      <div onClick={() => setOpenmenu(false)} className='menu-container' style={openMenu ? {display: "flex"} : {display: "none"}}>

        <HashLink className='about-button' onClick={() => setOpenmenu(false)} to="#about" smooth>
          <h3>Sobre Mí</h3>
        </HashLink>

        <HashLink onClick={() => setOpenmenu(false)} className="projects-button" to="#projects" smooth>
          <h3>Proyectos</h3> 
        </HashLink>

        <HashLink onClick={() => setOpenmenu(false)} className="contact-button" to="#contact" smooth>
          <h3>Contacto</h3>
        </HashLink>

      </div>
    </>

)}

export default Menu