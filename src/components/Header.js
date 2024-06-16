import React, { useState } from 'react'


function Header({setIsAuthenticated,data}) {
console.log(data)

  const handleLogout = (e) =>{
    e.preventDefault()
    // Clear 'parent' item from localStorage
    localStorage.removeItem('parent')
    setIsAuthenticated(false)



   
    
  
  }
  return (
    <>
      {/* <!-- ======= Header ======= --> */}

      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="container-fluid">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <a href="/child" className="logo d-flex align-items-center">
              <span className="d-none d-lg-block">Tracer</span>
            </a>
            <nav className="header-nav ms-auto">
              <ul className="d-flex align-items-center mb-0">
                <li className="nav-item dropdown">
                  <a className="nav-link nav-icon" href="/parent"> Dashboard </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link nav-icon" href="/auth"> Family </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle"></i> Account
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li>
                      <a className="dropdown-item" href="/change-password">
                        <i className="bi bi-key"></i> Change Password
                      </a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <a className="dropdown-item" onClick={handleLogout}>
                        <i className="bi bi-power" ></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
   
   {/*  <!-- End Header --> */}
    </>
  )
}

export default Header