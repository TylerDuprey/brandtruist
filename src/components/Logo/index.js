
const Logo = ({source, alt = "Webpage image placeholder"}) => {
  return (
    <figure className="logo">
        <img src={source} alt={alt} />
    </figure>
  )
}

export default Logo
