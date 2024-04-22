import React from 'react'
import '../Signup.css';

import user_icon from '../images/icons-student.png';
import email_icon from '../images/icons-email.png';
import password_icon from '../images/icons-password.png';
import Navbar from './Navbar';

const Signup = () => {
  return (
    <div>
    <Navbar/>
    
    <div className='container'>
        <div className='header'>
           <div className="text">Sign Up</div>
           <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt=".." />
                <input type="text" name="" placeholder="Name" />
            </div>
            <div className="input">
                <img src={email_icon} alt=".." />
                <input type="email" name="" placeholder="Email" />
            </div>
            <div className="input">
                <img src={password_icon} alt=".." />
                <input type="password" name="" placeholder="Password" />
            </div>
        </div>
        <div className="login-redirect">Already Registered? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
        </div>
    </div>
    </div>
  )
}

export default Signup