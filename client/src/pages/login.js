import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authContext/authContext';

const Login = () => {
  const { currentUser, login } = useContext(AuthContext);

  const [ inputs, setInputs ] = useState({
    username: "",
    password: "",
  });

  const [ err, setErr ] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await login(inputs)
      navigate("/admin")
    }catch(err){
      setErr(err.response.data)
    }
  };

  return (
    <div className='auth'>
        <h1>Login to Continue!</h1>

        <form>
          <label htmlFor="name">Enter your name:</label>
          <input onChange={handleChange} name='username' type="text" placeholder='Enter Your Name' />
      
          <label htmlFor="password">Enter your password:</label>
          <input onChange={handleChange} name='password' type="password" placeholder='Enter Your Password' />
       

          <button onClick={handleSubmit}>Login</button>
          {err && <p> {err} </p>}
    
        <span>Create a new account <Link to="/register">Register</Link> </span>

        </form>


        </div>
  )
}

export default Login;