import '../../assets/hero-image.png'
import Buttons from '../Buttons'
import List from '../List'
import Hero from '../Hero'
import PageTitle from '../PageTitle'

const Main = props => {

    const goodThingsAboutReact = [
        "Was first released in 2013",
        "Was originally created by Jordan Walke",
        "Has well over 100K stars on GitHub",
        "Is maintained by Facebook",
        "Powers thousands of enterprise apps, including mobile apps"
    ]
    
    return(
        <main>
            <Hero source={'hero-image.png'} />
            <PageTitle title="Fun Facts About React" />
            <ul class="list-react-facts">
                <List list={goodThingsAboutReact} />
            </ul>
        </main>
    )

}

export default Main