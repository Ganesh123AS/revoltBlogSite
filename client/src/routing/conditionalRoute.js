import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import ErrorPage from '../pages/errorPage';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Blog from '../pages/blog';

const ConditionalRoute = () => {
  if (path === "/login") {
    return (<AdminScreen />)
  } else {
    return (<UserScreen />)
  } 
}

const UserScreen = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/blog" element={ <Blog /> } />
            <Route exact path="/about" element={ <About /> } />
            <Route exact path="/contact" element={ <Contact /> } />
        </Routes>
    )
};

const AdminScreen = () => {
    return (
        <Routes>
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/register" element={ <Register /> } />
            <Route exact path="*" element={ <ErrorPage /> } />
        </Routes>
    )
};

export default ConditionalRoute;