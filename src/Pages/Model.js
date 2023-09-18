import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function CustomPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [showFormModal, setShowFormModal] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  
  const handleShowFormModal = () => {
    setShowFormModal(true);
  };

  const handleCloseFormModal = () => {
    setShowFormModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: '',
      email: '',
    });
    setShowFormModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Custom Page</h1>
        <button className="btn btn-primary m-3" onClick={handleShowFormModal}>
          Open Modal
        </button>

        <div className={`modal ${showFormModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showFormModal ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Your Information</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseFormModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleCloseFormModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {submittedData.map((data, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Entered Data</h5>
                  <p className="card-text">Name: {data.name}</p>
                  <p className="card-text">Email: {data.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomPage;
