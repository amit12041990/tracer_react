import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ChildsTable from '../components/adminDashboard/ChildsTable';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'rsuite';
function AdminDashboard({setIsAuthenticated}) {
  const navigate =useNavigate()
  const [parentId, setParentId] = useState('');
  const [childData, setChildData] = useState(null);
  const [parentData,setParentData]=useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('parent'));

    if (user) {
      if (user?._id) {
        setParentId(user._id);
      } else {
        setParentId(user);
      }
      
    } else {
      console.log('parent not found')

    }
  }, []);

  useEffect(() => {
    if (parentId) {
      retrieveParentdData(parentId)
      retrieveChildData(parentId);
    }
  }, [parentId]);
  const retrieveParentdData = async (parentId) => {
    try {
      //console.log(parentId);
      const response = await axios.get(`http://127.0.0.1:8000/parent/${parentId}`);
      //console.log(response.data);
      setParentData(response.data);
    } catch (error) {
      console.error('Error fetching child data:', error);
      //setError('Failed to fetch child data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const retrieveChildData = async (parentId) => {
    try {
      //console.log(parentId);
      const response = await axios.get(`http://127.0.0.1:8000/parent/get-childs/${parentId}`);
      //console.log(response.data);
      setChildData(response.data);
    } catch (error) {
      console.error('Error fetching child data:', error);
      setError('Failed to fetch child data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const HandleRefresh = () => {
    if (parentId) {
      retrieveChildData(parentId);
    }
  };

  return (
    <>
      <Header setIsAuthenticated={setIsAuthenticated} data={parentData}/>
      {loading ? (
        <Loader/>
      ) : error ? (
        <div>{error}</div>
      ) : childData ? (
        <ChildsTable data={childData} onFetchCall={HandleRefresh} />
      ) : (
        <div>No child data available.</div>
      )}
      <Footer />
      <div className="alert-wrapper">
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <i className="bi bi-check-circle me-1"></i>
          <span className="copied-id">b565fcf8-4587-48d5-325R-458930</span> Copied!
        </div>
      </div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default AdminDashboard;
