import { Routes, Route } from 'react-router-dom';
import Register from "./pages/register";
import Login from "./pages/login";
import Home from './pages/home';
import ErrorPage from "./pages/errorPage";
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Single from './pages/single';
import Admin from './admin/admin';
import Blog from './admin/blog';
import "./style.css";
import Role from './admin/role';
// import Header from './components/header';

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/contact" element={ <Contact /> } />
          <Route exact path="/admin/blog" element={ <Blog /> } />
          <Route exact path="*" element={ <ErrorPage /> } />
      </Routes>
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/admin" element={ <Admin /> } />
        <Route exact path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer />
    </>
  )
};


export default App;
