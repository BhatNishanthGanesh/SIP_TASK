import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  // State to store the selected content
  const [selectedContent, setSelectedContent] = useState(null);

  // Function to handle the selection of a dropdown item
  const handleDropdownSelection = (content) => {
    setSelectedContent(content);
  };

  // Define the dropdown items with content
  const dropdownItems = [
    {
      title: 'Our History',
      content: 'This is the history of our organization.',
    },
    {
      title: 'Our Team',
      content: 'Meet our talented team members.',
    },
    {
      title: 'Mission and Vision',
      content: 'Our mission is to... Our vision is...',
    },
    {
      title: 'Awards and Recognition',
      content: 'We are proud to have received these awards.',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">About Us</h1>
        <p className="text-center">Welcome to our About Us page!</p>

        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="dropdown">
              <button
                className="btn btn-primary btn-block dropdown-toggle"
                type="button"
                id="aboutDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select an option
              </button>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                {dropdownItems.map((item, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelection(item.content)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Display selected content */}
        {selectedContent && (
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Selected Content</h2>
                  <p className="card-text">{selectedContent}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default About;
