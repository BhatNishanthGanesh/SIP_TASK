import React from 'react';

// Card Component
function Card({ imageIndex }) {
  // Array of image URLs
  const imageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpycSH_l07iSmV8Q4DmTn1ra940jcuA-fLTA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxiLckWzC63PkxgI460wn1FSLQJgigZtpHGQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqexLqBrpxybO-bFoJrj3UM_MOA_Hd3TnLA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_5GHW4cuFyufs7-9S29yzuMivM0RLSmCFw&usqp=CAU",
  ];
  const cardTitles = [
    "Somasa",
    "Pani puri",
    "Gobi manchuri",
    "Pizza",
  ];

  const cardTexts = [
    "Sweet snack.",
    "Spicy snack.",
    "Favorite chat.",
    "Best.",
  ];
  

  return (
    <div>
      <div className="card m-3" style={{ "maxWidth": "18rem" }}>
        <img className="card-img-top" height={200} src={imageUrls[imageIndex]} alt="Error" />
        <div className="card-body">
          <h5 className="card-title">{cardTitles[imageIndex]}</h5>
          <p className="card-text">{cardTexts[imageIndex]}</p>
          <div className="container">
            <select className='w-100 m-2 '>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className='w-100 m-2'>
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

  const numberOfCards = 4;

  const cards = Array.from(Array(numberOfCards), (e, i) => (
    <Card key={i} imageIndex={i} />
  ));

  return (
    <div className="d-flex  flex-wrap">
      {cards}
    </div>
  );
}

export { Card, CardList };
