import List from '../List'

const Nav = ({links, children}) => {

    return(
        <nav className="main-navigation">
            <ul>
                <List list={links} />
            </ul>
        </nav>
    )

}

export default Nav