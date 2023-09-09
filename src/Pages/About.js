import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
        <h1>About Us</h1>
        <p>Welcome to our About Us page!</p>

        <div className="dropdown mt-4">
          <button
            className="btn btn-primary dropdown-toggle"
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
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDropdownSelection(item.content)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Display selected content */}
        {selectedContent && (
          <div className="mt-4">
            <h2>Selected Content</h2>
            <p>{selectedContent}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default About;
