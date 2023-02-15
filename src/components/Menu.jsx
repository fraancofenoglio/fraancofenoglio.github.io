import React, { useState } from 'react'

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

        <div onClick={() => {

            if (window.innerWidth < 500) {
              window.scroll({top: 900, left: 0, behavior: "smooth"});
            }else if(window.innerWidth < 800){
              window.scroll({top: 1000, left: 0, behavior: "smooth"});
            }else {
              window.scroll({top: 720, left: 0, behavior: "smooth"});
            }

            setOpenmenu(false);
          }} className='about-button'
          >
          <h3>Sobre Mí</h3>

        </div>

        <div onClick={() => {
        setOpenmenu(false);

        if (window.innerWidth < 500) {
          window.scrollTo({top: 1800, left: 0, behavior: "smooth"});
        }else if(window.innerWidth < 800){
          window.scrollTo({top: 2000, left: 0, behavior: "smooth"});
        }else {
          window.scrollTo({top: 1500, left: 0, behavior: "smooth"});
        }

          }} className="projects-button">

          <h3>Proyectos</h3> 

        </div>

        <div onClick={() => {
            setOpenmenu(false);

            if (window.innerWidth < 500) {
              window.scroll({top: 2350, left: 0, behavior: "smooth"});
            }else if(window.innerWidth < 800){
              window.scroll({top: 2650, left: 0, behavior: "smooth"});
            } else {
              window.scroll({top: 2200, left: 0, behavior: "smooth"});
            }

          }} className="contact-button">
          <h3>Contacto</h3>

        </div>

      </div>
    </>

)}

export default Menu