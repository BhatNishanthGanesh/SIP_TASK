import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/carousel';
import { CardList } from '../components/cards';
import Accordion from '../components/accordoin'
import Btn from '../components/Btn';


function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <CardList />
      </div>
      <div>
        <Accordion />
      </div>
      <div>
        <Btn />
      </div>
      
    </div>
  );
}

export default Home;
