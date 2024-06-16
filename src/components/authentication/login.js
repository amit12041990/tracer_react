import React,{useState} from 'react'

function Login({onLogin}) {
 const [userData,setUserData] =useState({
  email:'',
  password:''
 })

 const handleChange = (e) =>{
  const {name,value}=e.target
  setUserData({
    ...userData,
    [name]:value
  })
 }

 const handleSubmit = (e) =>{
e.preventDefault()
onLogin(userData)
 }
  return (
<>
<div className="sign-in-form-wrapper login-form-wrapper">
                  <form onSubmit={handleSubmit}>
                    <div className="default-input-label-wrap">
                      <label for="email" className="form-label">Email</label>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope"></i></span>
                        <input type="email" className="form-control" value={userData.email} onChange={handleChange} placeholder="Enter Your Email" aria-label="Email" aria-describedby="basic-addon1" id="email" name="email" required />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <div className="default-input-label-wrap">
                      <label for="password" className="form-label">Password</label>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3"><i className="bi bi-shield-lock"></i></span>
                        <input type="password" className="form-control" value={userData.password} onChange={handleChange} placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon3" name="password" id="password" required />                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <div className="submit-btn-wrap">
                    <button className="btn btn-primary" type="submit">Login</button>  
                   {/*    <a className="btn btn-primary" href="./dashboard.html">Login</a> */}
                    </div>
                  </form>
                </div>
</>
  )
}

export default Login