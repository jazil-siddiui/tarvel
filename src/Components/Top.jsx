import React from 'react';
import Card1 from '../assets/card1.jpg';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import V1 from '../assets/v1.png';
import Card from './card';
import Content1 from '../assets/content1.png'
import Content2 from '../assets/content2.png'
import Content3 from '../assets/content3.png'

const Top = () => {
  return (
    <div>
      {/* Header */}
      <div className="text-center pt-32">
        <div>
          <p className="font-bold text-[#5E6282]">Top Selling</p>
        </div>
        <h1 className="text-3xl font-bold text-[#14183E]">Top Destinations</h1>
      </div>

      {/* Cards */}
      <div className="container flex gap-20 justify-center pt-16 m-auto">
        <Card
          image={Card1}
          title="London, UK"
          price="$5,42k"
          duration="10 Days Trip"
          durationIcon={V1}
        />
        <Card
          image={Card2}
          title="Rome, Italty"
          price="$4,99k"
          duration="7 Days Trip"
          durationIcon={V1}
        />
        <Card
          image={Card3}
          title="Full Europe"
          price="$6,20k"
          duration="12 Days Trip"
          durationIcon={V1}
        />
      </div>

      {/* 3rd portion */}

      <div className=" container bg-red-600 ">
        <div className='text-[#5E6282]'><h2>Easy and Fast</h2></div>
        <div className='text-[#14183E] font-bold text-3xl'><h1>Book your next trip 
        in 3 easy steps</h1></div>  


      
      




        
      
      </div>


    </div>
  );
};

export default Top;
