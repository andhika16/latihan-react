import './Navbar.css';
// import { BrowserRouter, Router, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='my-navbar'>
            <a className="title" href="/">RealEstate</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/properties">Properties</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a className="myBtn" href="/#">Contact us</a></li> 
            </ul>
        </nav> 
     );
}
 
export default Navbar;
