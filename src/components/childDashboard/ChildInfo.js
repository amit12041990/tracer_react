import React from 'react';

function ChildInfo({ name }) {
  return (
    <div className="child-info-container" style={{  color: '#686868', padding: '10px',marginBottom: '10px' }}>
      <div className="child-info-content d-flex align-items-center">
        <i className="bi bi-person-fill fs-4 me-3"></i>
        <h6>Child Name : {name}</h6>
        
      </div>
    </div>
  );
}

export default ChildInfo;
