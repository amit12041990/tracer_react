import axios from 'axios';
import React, { useState, useEffect } from 'react';

function EditChild({ data, onFetchCall }) {

  // Destructure and provide default values
  const { name = '', dob = '', gender = '', _id } = data || {};

  const [editedChildData, setEditedChildData] = useState({
    name,
    dob: dob ? data.dob.split('T')[0] :  '', // Format initial DOB correctly
    gender,
    id: _id,
  });

  // Update editedChildData when data prop changes
  useEffect(() => {
    if (data) {
      setEditedChildData({
        name: data.name || '',
        dob: data.dob.split('T')[0]  || '' , 
        gender: data.gender || '',
        id: data._id || '',
      });
    }
  }, [data]);

  // Function to handle input changes and update state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedChildData({
      ...editedChildData,
      [name]: value,
    });
  };

  // Function to submit edited data
  const handleSubmit = async (event) => {
    event.preventDefault();
   

    // Perform any necessary API calls with axios
    try {
      // Example axios call
       await axios.put('http://127.0.0.1:8000/update_child', 
        editedChildData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Trigger the fetch call
      onFetchCall();
      
      // Close the modal using Bootstrap's JavaScript API
      const modalElement = document.getElementById('editChild');
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    } catch (error) {
      console.error('Error updating child data:', error);
    }
  };

  return (
    <div className="modal-dialog modal-dialog-centered" id="editChildModal">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Edit Child</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="add-child-body-wrap">
              <div className="row">
                <div className="col-12 mb-3">
                  <label htmlFor="childName" className="form-label">Child Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="childName"
                    name="name"
                    placeholder="Child Name"
                    value={editedChildData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="dob" className="form-label">DOB</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={editedChildData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select
                    id="gender"
                    className="form-select"
                    name="gender"
                    value={editedChildData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">Update Child</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditChild;
