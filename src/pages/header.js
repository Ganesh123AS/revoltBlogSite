import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg"

const Header = () => {
  return (
    <div className='navbar'>
      <div className="container">

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="links  d-flex justify-content-between gap-3">
          <Link className='link' to="/">
            <p>Art</p>
          </Link>
          <Link className='link' to="/">
            <p>Art</p>
          </Link>
          <Link className='link' to="/">
            <p>Art</p>
          </Link>
          <Link className='link' to="/">
            <p>Art</p>
          </Link>
          <Link className='link' to="/">
            <p>Art</p>
          </Link>
          <p>Sameer</p>
          <p>Logout</p>
          <p className='Blog'><Link to="/blog">Blog</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Header;