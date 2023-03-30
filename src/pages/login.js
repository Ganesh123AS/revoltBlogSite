import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-form'>
    <div className='container text-center'>
      <div className="row">
        <div className="col">
        <h1>Login to Continue!</h1>

        <form>
        <div>
          <label className='col-lg-3 mt-5' htmlFor="name">Enter your name:</label>
          <input className='col-lg-6' type="text" placeholder='Enter Your Name' />
        </div>

        <div>
          <label className='col-lg-3 mt-5' htmlFor="password">Enter your password:</label>
          <input className='col-lg-6' type="password" placeholder='Enter Your Password' />
        </div>

        <div className='button primary mt-5'>
          <button>Login</button>
        </div>

        <div className="mt-5">
        <span className='mt-5'>Create a new account <Link to="/register">Register</Link> </span>
        </div>
        </form>


        </div>
        </div>
    </div>
    </div>
  )
}

export default Login;