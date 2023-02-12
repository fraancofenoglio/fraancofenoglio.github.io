const Modal = ({open, setOpen, children, type}) => {
  return (
    <div className={`modal-container ${open && "modal-open"}`} onClick={() => setOpen(false)}>
        <button style={type === "project" ? {left: "45%"} : {left: "27%"}} onClick={() => setOpen(false)}>
          <img  src="./assets/x-regular-60.png" alt="" />
        </button>
        <div className='modal-message' onClick={(e) => e.stopPropagation()}>
            {children}
        </div>

    </div>
  )
}

export default Modal