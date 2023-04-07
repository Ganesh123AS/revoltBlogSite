import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [ inputs, setInputs ] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  })

  const [ err, setErr ] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.post("http://localhost:5000/register", inputs)
      navigate("/login")
    }catch(err){
      setErr(err.response.data)
    }
  }


  return (
    <div className='auth'>
        <h1>Register to Continue!</h1>
        
        <form>
          <label htmlFor="name">Enter your name:</label>
          <input type="text" placeholder='Enter Your Name' name='username' onChange={handleChange} />
     
          <label htmlFor="email">Enter your Email:</label>
          <input type="email" placeholder='Enter Your Email' name='email' onChange={handleChange} />
     
          <label htmlFor="password">Enter your password:</label>
          <input type="password" placeholder='Enter Your Password' name='password' onChange={handleChange} />

          <label htmlFor="role">Enter your Role:</label>
          <input type="role" placeholder='Enter Your Role' name='role' onChange={handleChange} />
     
          <button onClick={handleSubmit}>Register</button>
          {err && <p> {err} </p>}
     

        <span>Do You Already have a account <Link to="/login">Login</Link> </span>

        </form>
        </div>
  )
}

export default Register;