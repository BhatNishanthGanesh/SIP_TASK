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
        <h4 className='m-3'>Cards Section</h4>
        <CardList />
      </div>
      <div>
        <h4 className='m-3'>Accordin Section</h4>
        <Accordion />
      </div>
      <div>
        <h4 className='m-3'>Collection of buttons</h4>
        <Btn />
      </div>
      
    </div>
  );
}

export default Home;
