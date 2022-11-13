import '../assets/favicon.png'
import '../assets/favicon.svg'
import '../assets/logoipsum-288.svg'

const Hero = props => {
    
    return(
        <div className="main-header">
            <img src={props.source} />
        </div>
    )

}

export default Hero