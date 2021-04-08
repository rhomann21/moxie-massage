import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    });

    window.addEventListener('resize', showButton);

    return (
    <>
       <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                M <img src='https://hosting.photobucket.com/images/i/rhomann21/star.png?width=285&height=175&crop=fill'/>  M
             </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/Bios' className='nav-links' onClick={closeMobileMenu}>
                        Our Therapists
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/yoga' className='nav-links' onClick={closeMobileMenu}>
                        Yoga
                    </Link>
                </li>
            </ul>
          {/*} {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
        </div>
       </nav>
    </>

    )
}

export default Navbar