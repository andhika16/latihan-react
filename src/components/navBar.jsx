import React from 'react';


const NavBar = ({totalCounter}) => {
    return (
        <nav
                className="navbar navbar-light bg-light">
                <a className="navbar-brand" href='#'> 
                    Navbar
                     <span className="badge bg-secondary m-2">{ totalCounter }</span>
                </a>
    </nav>
    );
}
 
export default NavBar;