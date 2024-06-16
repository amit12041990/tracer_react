import React, { useState, useEffect, useMemo } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AddChild from './AddChild';
import EditChild from './EditChild';
import { useNavigate } from 'react-router-dom';
import DeleteChild from './DeleteChild';

function ChildsTable({ data = { children: [] }, onFetchCall }) {
  const navigate = useNavigate();

  const childs_array = useMemo(() => {
    if (!Array.isArray(data.children)) return [];
    return [...data.children].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }, [data.children]);

  function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState([]);
  const [copiedServiceCode, setCopiedServiceCode] = useState(null);
  const [editChild, setEditChild] = useState(null);

  useEffect(() => {
    setFilteredData(childs_array);
  }, [childs_array]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredResults = childs_array.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setFilteredData(filteredResults);
    setCurrentPage(1);
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (child) => {
    setEditChild(child);
  };

  const handleNavigate = (child) => {
    navigate(`/child-dashboard`, { state: { childData: child } });
  };

  return (
    <>
      <main id="main" className="main dashboard-add-child">
        <section id="dashboard-main-sec">
          <div className="container">
            <div className="dashboard-main-wrapper">
              <div className="dashboard-top-wrap">
                <div className="family-top-wrap add-child-top-wrap d-flex justify-content-between">
                  <div className="search-wrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                  <div className="add-child-btn-wrap text-center">
                    <button className="btn add-child-btn" data-bs-target="#addChild" data-bs-toggle="modal">
                      <i className="bi bi-person-fill" style={{ marginRight: '8px' }}></i>
                      Add Child
                    </button>
                  </div>
                </div>
              </div>
              <div className="dashboard-content-wrap">
                <div className="table-wrapper add-child-table-wrapper">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Service Code</th>
                        <th>Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((child, index) => (
                        <tr key={index}>
                          <td>{child.name}</td>
                          <td>{calculateAge(child.dob)}</td>
                          <td>{child.gender}</td>
                          <td>
                            <span className="child-id">{child.service_code}</span>
                            <CopyToClipboard text={child.service_code} onCopy={() => setCopiedServiceCode(child.service_code)}>
                              <button className="btn action-btn id-copy-btn">
                                <i className="bi bi-clipboard-fill" title="Copy ID"></i>
                              </button>
                            </CopyToClipboard>
                            {copiedServiceCode === child.service_code && <span style={{ color: 'green' }}>Copied!</span>}
                          </td>
                          <td>
                            <div className="dropdown">
                              <button className="btn action-btn dropdown-toggle" type="button" id={`exploreDropdown-${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                                Explore
                              </button>
                              <ul className="dropdown-menu" aria-labelledby={`exploreDropdown-${index}`}>
                                <li><button className="dropdown-item" onClick={() => handleEdit(child)} data-bs-toggle="modal" data-bs-target="#editChild"><i className="bi bi-pencil-fill"></i> Edit</button></li>
                                <li><button className="dropdown-item" onClick={() => handleEdit(child)} data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="bi bi-trash-fill"></i> Delete</button></li>
                                <li><button className="dropdown-item" onClick={() => handleNavigate(child)}><i className="bi bi-laptop-fill"></i> Child Dashboard</button></li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-end">
                      {Array.from({ length: Math.ceil(filteredData.length / dataPerPage) }).map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                          <button onClick={() => paginate(index + 1)} className="page-link">
                            {index + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="modal fade" id="addChild" tabIndex="-1" aria-labelledby="addChildModal" aria-hidden="true">
        <AddChild onFetchCall={onFetchCall} />
      </div>

      <div className="modal fade" id="editChild" tabIndex="-1" aria-labelledby="addChildModal" aria-hidden="true">
        <EditChild data={editChild} onFetchCall={onFetchCall} />
      </div>

      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="addChildModal" aria-hidden="true">
        <DeleteChild data={editChild} onFetchCall={onFetchCall} />
      </div>
    </>
  );
}

export default ChildsTable;
