import React from 'react';

// Card Component
function Card() {
  return (
    <div>
      <div className="card m-3" style={{ "maxWidth": "18rem" }}>
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGsb4SXhBEvyuknZgNgKTHiAuoreWsIlHXQ&usqp=CAU" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is some important text.</p>
          <div className="container">
            <select className='w-100 m-2 bg-success'>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className='w-100 m-2 bg-success'>
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

// CardList Component
function CardList() {
  // Create an array to represent the number of cards you want
  const numberOfCards = 4;

  // Use a loop to render multiple cards
  const cards = Array.from(Array(numberOfCards), (e, i) => (
    <Card key={i} />
  ));

  return (
    <div className="d-flex flex-wrap">
      {cards}
    </div>
  );
}

export { Card, CardList };
