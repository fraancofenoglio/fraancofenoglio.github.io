import React, { useState } from 'react'

const Menu = () => {

  const [openMenu, setOpenmenu] = useState(false);
  // const [animationContact, setAnimationContact] = useState()


  return (

    <>
      <div onClick={() => {
        setOpenmenu(!openMenu)
      }} className='menu-button'>
        <img src="./assets/menu-regular-72.png" alt="" />
      </div>

      <div className='menu-container' style={openMenu ? {display: "flex"} : {display: "none"}}>

        <div onClick={() => {
            setOpenmenu(false)
            window.scroll({
              top: 720,
              left: 0,
              behavior: "smooth"

            })
          }} className='about-button'>
          <h3>Sobre Mí</h3>

        </div>

        <div onClick={() => {
          window.scrollTo({
            top: 1500,
            left: 0,
            behavior: "smooth"

          })
            setOpenmenu(false)
          }} className="projects-button">

            <h3>Proyectos</h3> 

          

        </div>

        <div onClick={() => {
            setOpenmenu(false)
            window.scroll({
              top: 2200,
              left: 0,
              behavior: "smooth"

            })
          }} className="contact-button">
          <h3>Contacto</h3>

        </div>

      </div>
    </>

)}

export default Menu