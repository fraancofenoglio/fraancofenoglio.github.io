const GoUp = () => {
  return (
    <div onClick={ () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }} className='go-up'>


        <img src="./assets/go-up-60.png" alt="flecha arriba" />

    </div>
  )
}

export default GoUp