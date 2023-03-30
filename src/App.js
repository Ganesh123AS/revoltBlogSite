import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Register from "./pages/register";
import Login from "./pages/login";
import ErrorPage from "./pages/errorPage";
import SinglePage from './pages/singlePage';
import Blog from './pages/blog';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Homepage /> } />
        <Route exact path='/register' element={ <Register /> } />
        <Route exact path='/login' element={ <Login /> } />
        <Route exact path='/singlePage' element={ <SinglePage /> } />
        <Route exact path='/blog' element={ <Blog /> } />
        <Route exact path='*' element={ <ErrorPage /> } />
      </Routes>
    </>
  );
}

export default App;
