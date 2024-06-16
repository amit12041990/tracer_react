import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Auth from './pages/Auth';
import ChildDashboard from './pages/ChildDashboard';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Retrieve the authentication state from localStorage on initial load
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    // Store the authentication state in localStorage whenever it changes
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  console.log('isAuthenticated:', isAuthenticated);

  return (
    <Router>
      {/* Pass 'amit' as a prop named 'data' to Header */}
     
      <Routes>
        <Route path="/auth" element={isAuthenticated ? <Navigate to="/home" /> : <Auth setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={isAuthenticated ? <AdminDashboard setIsAuthenticated={setIsAuthenticated}   /> : <Navigate to="/auth" />} />
        <Route path="/child-dashboard" element={isAuthenticated ? <ChildDashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/auth" />} />
        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </Router>
  );
}

export default App;
