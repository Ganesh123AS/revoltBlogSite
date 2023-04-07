import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authContext/authContext';
import logo from "../img/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <>
    <div className="navbar">
      <div className="container">

        <div className="logo">
          <Link to="/">
            {/* <img src={logo} alt="image-logo" /> */}
            <h2>Logo</h2>
          </Link>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link className='link' to="/">
                <h6>Home</h6>
              </Link>
            </li>
            <li>
              <Link className='link' to="/category">
                <h6>Category</h6>
              </Link>
            </li>
            <li>
              <Link className='link' to="/about">
                <h6>About</h6>
              </Link>
            </li>
            <li>
              <Link className='link' to="/contact">
                <h6>Contact</h6>
              </Link>
            </li>
          </ul>
        </div>

        <div className='links nav-contact'>
          <ul>
            <li><p>  <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '32px' }} /> </p></li>
            <li><p>  <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '32px' }} /> </p></li>
            <li><p>  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '32px' }} /> </p></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;