
const Button = ({button, className}) => {
  return (
    <button title={button.title} destination={button.slug} className={className}>    
          {button.content}              
    </button>
  )
}

export default Button