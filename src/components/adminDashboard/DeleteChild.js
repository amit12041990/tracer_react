import axios from 'axios';
import React,{useState,useEffect} from 'react'

function DeleteChild({data,onFetchCall}) {
  const { name = '', dob = '', gender = '', _id } = data || {};

  const [editedChildData, setEditedChildData] = useState({
   
    id: _id,
  });

  // Update editedChildData when data prop changes
  useEffect(() => {
    if (data) {
      setEditedChildData({
        
        id: data._id || '',
      });
    }
  }, [data]);

  const handleDelete=async (e)=>{
    e.preventDefault()
     // Close the modal using Bootstrap's JavaScript API
    const modalElement = document.getElementById('deleteModal');
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);

    console.log(editedChildData)
    try {
      const response = await axios.get(`http://127.0.0.1:8000/child/delete_child/${editedChildData.id}`)
      onFetchCall()
      if (modalInstance) {
        modalInstance.hide();
      }
    } catch (error) {
      console.log(error)
    }
    
    
  }


  return (
   <>
     <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addChildModal">Delete Record</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={handleDelete}>
            <div className="modal-body">
              <h5 className="delete-title mb-4 text-center">Are you sure you want to delete this record?</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-grid">
                    <button type="button" data-bs-dismiss="modal" className="btn btn-outline">Cancel</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
   </>
  )
}

export default DeleteChild