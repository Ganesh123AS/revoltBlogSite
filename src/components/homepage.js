import React from 'react';
import Header from "../pages/header";
import Footer from "../pages/footer";
import "../pages/style.css";
import Main from '../pages/main';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Homepage;