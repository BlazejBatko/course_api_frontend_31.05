//import React, { Component } from "react";
import { Button } from './Button';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
//import { NavLink } from 'react-router-dom';

//import { Navbar, Nav } from 'react-bootstrap';

// export class Navigation extends Component{

    function Navbar(){
        const [click, setClick] = useState(false);
        const [button, setButton] = useState(true);

        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        const showButton = () => {
            if(window.innerWidth <= 960){
                setButton(false)
            } else {
                setButton(true)
            }
        };

        useEffect(() => {
            showButton();
        }, []);

        window.addEventListener('resize', showButton);

        return (
            <>
            <nav className="navbar">
                <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Course
                     <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                <li className ='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className ='nav-item'>
                    <Link to='/studenci' className='nav-links' onClick={closeMobileMenu}>
                        Studenci
                    </Link>
                </li>
                <li className ='nav-item'>
                    <Link to='/kursy' className='nav-links' onClick={closeMobileMenu}>
                        Kursy
                    </Link>
                </li> 
                <li>
                    <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>                           
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </div>
        </nav>
    </>
)
 }

    export default Navbar

//     render(){
//         return(
//             <Navbar bg="dark" expand="lg">
//                 <Navbar.Toggle aria-controls="basicnavbar-nav"/>
//                 <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav>
//                     <NavLink className="d-inline p-2 bg-dark text-white" to="/">
//                         Home
//                     </NavLink>
//                     <NavLink className="d-inline p-2 bg-dark text-white" to="/kursy">
//                         Kursy
//                     </NavLink>
//                     <NavLink className="d-inline p-2 bg-dark text-white" to="/studenci">
//                         Studenci
//                     </NavLink>
                    
//                 </Nav>


//                 </Navbar.Collapse>
//             </Navbar>
//         )
//     }
    
// }
