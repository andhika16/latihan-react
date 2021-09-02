import {Link} from 'react-router-dom';
import '../index.css'


const Heading = () => {
    function handleHamburger ()  {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    return ( 
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="nav-logo">BlogDev.</Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/create-blog" className="nav-link">Buat Cerita</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={() => handleHamburger()}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
            </header>
     );
}
 
export default Heading;