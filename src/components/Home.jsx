import React from 'react';
import Navbar from './Navbar';
import '../Home.css';
import { Button, Typography } from '@mui/material';
import email_icon from '../images/icons-email.png';
import password_icon from '../images/icons-password.png';



const Home = () => {
  return (
    <div>
        <Navbar/>
      <div className='box'>
        <div className='head'>
           <div className="text">
              <Typography variant='h5'>Welcome to ICTAK Exam Registration Portal</Typography>
            </div>

        <div className="line"></div>
        </div>

            <div className='list'> 
               <Typography variant='h6'>Please login using PAATSHALA credentials and Register for Exist Exam</Typography>
             </div>
             <br /><br />
        <div className="btn-container">
            <Button variant="contained">Login</Button>
            </div>
      </div>
    </div>
  )
}

export default Home