import '../../assets/favicon.png'
import Header from '../Header'
import Main from '../Main'
import Aside from '../Aside'
import Footer from '../Footer'

const Page = props => {
    return (
        <>
            <Header />

            <div className="layout">
                <Main />
            </div>


            <Footer />
        </>
    );
  }
  
  export default Page;