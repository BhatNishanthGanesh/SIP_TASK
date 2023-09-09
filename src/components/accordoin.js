import React, { useState } from 'react';

function Accordion() {
  // State to manage the active accordion item
  const [activeItem, setActiveItem] = useState(null);

  // Function to toggle the active accordion item
  const toggleAccordion = (itemIndex) => {
    if (activeItem === itemIndex) {
      setActiveItem(null);
    } else {
      setActiveItem(itemIndex);
    }
  };

  // Define accordion items with contact information
  const accordionItems = [
    {
      title: 'General Inquiries',
      content: (
        <div>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
      ),
    },
    {
      title: 'Sales Department',
      content: (
        <div>
          <p>Email: sales@example.com</p>
          <p>Phone: (123) 456-1234</p>
          <p>Address: 456 Sales St, City, Country</p>
        </div>
      ),
    },
    {
      title: 'Support Team',
      content: (
        <div>
          <p>Email: support@example.com</p>
          <p>Phone: (123) 456-5678</p>
          <p>Address: 789 Support St, City, Country</p>
        </div>
      ),
    },
  ];

  return (
    <div>
      {accordionItems.map((item, index) => (
        <div className="accordion" key={index}>
          <div
            className={`accordion-item ${activeItem === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={activeItem === index ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${
                activeItem === index ? 'show' : ''
              }`}
              aria-labelledby={`heading${index}`}
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
