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

  // Define accordion items
  const accordionItems = [
    {
      title: 'Accordion Item 1',
      content: 'Content for Accordion Item 1',
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for Accordion Item 2',
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for Accordion Item 3',
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
