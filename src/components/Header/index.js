import '../../assets/favicon.png'
import '../../assets/favicon.svg'
import '../../assets/logoipsum-288.svg'
import Nav from '../Nav'
import NavItem from '../NavItem'
import Logo from '../Logo'

const Header = props => {

    const links = [
        <NavItem slug="home" title="Home page" content={<Logo source="logoipsum-288.svg" alt="The logo for the website" />} />,
        <NavItem slug="about" title="About page" content="About" />,
        <NavItem slug="products" title="Products page" content="Products" />,
        <NavItem slug="contact" title="Contact page" content="Contact" />
    ]
    
    return(
        <header className="main-header">
            <Nav links={links} />
        </header>
    )

}

export default Header