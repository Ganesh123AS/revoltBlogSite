import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [ input, setInput ] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    try{
      const res = axios.post("http://localhost:5000/register")
    }catch(e){

    }
  }


  return (
    <div className='register-form'>
    <div className='container text-center'>
      <div className="row">
        <div className="col">
        <h1>Login to Continue!</h1>

        <form>
        <div>
          <label className='col-lg-3 mt-5' htmlFor="name">Enter your name:</label>
          <input className='col-lg-6' type="text" placeholder='Enter Your Name' name='username' onChange={handleChange} />
        </div>

        <div>
          <label className='col-lg-3 mt-5' htmlFor="email">Enter your Email:</label>
          <input className='col-lg-6' type="email" placeholder='Enter Your Email' name='email' onChange={handleChange} />
        </div>

        <div>
          <label className='col-lg-3 mt-5' htmlFor="password">Enter your password:</label>
          <input className='col-lg-6' type="password" placeholder='Enter Your Password' name='password' onChange={handleChange} />
        </div>

        <div className='button primary mt-5'>
          <button onClick={handleSubmit}>Register</button>
        </div>

        <div className="mt-5">
        <span className='mt-5'>Do You Already have a account <Link to="/login">Login</Link> </span>
        </div>
        </form>


        </div>
        </div>
    </div>
    </div>
  )
}

export default Register;