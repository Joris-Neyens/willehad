import MainNav from './MainNav';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <div>
            <MainNav/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}
