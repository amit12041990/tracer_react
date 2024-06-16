import React, { useState } from 'react';
import Register from '../components/authentication/register';
import Login from '../components/authentication/login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Auth({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleRegistersubmit = async(userData) => {
   
    try {
      const response = await axios.post('http://127.0.0.1:8000/register',userData);
      console.log(response.data)
      if (response.data.message === 'User created successfully') {
        localStorage.clear()
        localStorage.setItem('parent', JSON.stringify(response.data.user_id));
        setIsAuthenticated(true); // Update authentication state in the parent component
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginsubmit = async (userdata) => {
    console.log(userdata);
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', userdata);
     
      if (response.data.message === 'Login successful') {
        localStorage.clear()
        localStorage.setItem('parent', JSON.stringify(response.data.user));
        setIsAuthenticated(true); // Update authentication state in the parent component
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="signin-main">
        <div className="container">
          <div className="signin-wrapper">
            <div className="signin-top-wrap">
              <h1>Register & Login</h1>
            </div>
            <div className="signin-form-wrapper">
              <div className="sign-in-form-inner">
                <div className="sign-in-lft">
                  <div className="sign-in-head">
                    <div className="head-line"></div>
                    <h3>Parents Register Form</h3>
                  </div>
                  <Register onRegister={handleRegistersubmit} />
                </div>
                <div className="sign-in-rht">
                  <div className="sign-in-head">
                    <div className="head-line"></div>
                    <h3>Login Here</h3>
                  </div>
                  <Login onLogin={handleLoginsubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id="footer" className="footer">
          <div className="copyright">
            &copy; Copyright <strong><span>Parental Control</span></strong>. All Rights Reserved
          </div>
        </footer>
      </main>
    </>
  );
}

export default Auth;
