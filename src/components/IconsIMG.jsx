const IconsIMG = ({src, alt, showfront, transition}) => {
  return (
    <img src={src} alt={alt} style={showfront ? {opacity: "1", transition: "2s"} : {opacity: "0"}}/>
  )
}

export default IconsIMG