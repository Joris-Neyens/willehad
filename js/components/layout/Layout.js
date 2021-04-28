import Menu from './Menu';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <div>
            <Menu/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}
