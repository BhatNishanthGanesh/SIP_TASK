import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function CustomPage() {
  const [formData, setFormData] = useState({
    // Define your form fields and their initial values here
    name: '',
    email: '',
    // Add more fields as needed
  });

  const [showFormModal, setShowFormModal] = useState(false);

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
    // Handle form submission here, e.g., send data to an API
    // Reset the form and close the modal afterward
    setFormData({
      name: '',
      email: '',
      // Reset other fields as needed
    });
    setShowFormModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Custom Page</h1>
        <button className="btn btn-primary" onClick={handleShowFormModal}>
          Open Modal
        </button>

        {/* Modal */}
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
                  {/* Add more form fields here */}
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
      </div>
    </div>
  );
}

export default CustomPage;
