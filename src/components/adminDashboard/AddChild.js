import axios from 'axios';
import React, { useState, useEffect } from 'react';

function AddChild({ onFetchCall }) {
  const [parent_id, setParentId] = useState('');
  const [childData, setChildData] = useState({
    name: '',
    gender: '',
    dob: '',
  });

  useEffect(() => {
    const getParentId = async () => {
      const user = JSON.parse(localStorage.getItem('parent'));
      if (user) {
        setParentId(user._id);
      } else {
        console.log('Parent not found in localStorage');
      }
    };

    getParentId();
  }, []);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setChildData({
      ...childData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddChild(childData);
  };

  const handleAddChild = async (childData) => {
    const child_data_include_PID = { ...childData, parent_id: parent_id };
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/add_child/',
        child_data_include_PID,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('child added:', response.data);
      document.getElementById('closeAddChildModal').click(); // Dismiss the modal
      onFetchCall(); // Call the parent callback to update the data
    } catch (error) {
      console.log('Error adding child:', error);
    }
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addChildModal">
              Add Child
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="add-child-body-wrap">
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="childName" className="form-label">
                      Child Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="childName"
                      name="name"
                      value={childData.name}
                      onChange={onInputChange}
                      placeholder="Child Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="dob" className="form-label">
                      DOB
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={childData.dob}
                      onChange={onInputChange}
                      id="dob"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      id="gender"
                      className="form-select"
                      name="gender"
                      value={childData.gender}
                      onChange={onInputChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                id="submitAddChild"
              >
                Add Child
              </button>
              <button
                id="closeAddChildModal"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ display: 'none' }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddChild;
