import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <div className='container'>
            <Navbar />
            <div className='children-container'>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;