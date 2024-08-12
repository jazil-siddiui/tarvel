import React from "react";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import S1 from '../assets/s1.png';
 
const Cart = () => {
  // Array of card data
  const cards = [
    {
      id: 1,
      image: c1,
      title: "Best Flights",
      description: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
      id: 2,
      image: c2,
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
      id: 3,
      image: c3,
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferred to men it engrossed listening."
    },
    {
      id: 4,
      image: c4,
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers."
    }
  ];

  return (
    <div>
      <div className="text-center pt-60">
        <div className="relative">
          <img src={S1} alt="Image" className="absolute top-0 right-12" />
        </div>
        <div className="">
          <p className="font-bold text-[#5E6282]">CATEGORY</p>
        </div>
        <h1 className="text-3xl font-bold text-[#14183E] container mx-auto">We Offer Best Services</h1>
      </div>

      {/* Cards Container */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-x-11 lg:gap-y-16 gap-y-14 pt-32 mx-auto">
        {/* Map over the cards array */}
        {cards.map((card) => (
          <div
            key={card.id}
            className="container flex flex-col items-center bg-white px-2 py-2 rounded-3xl shadow-md w-[200px] h-[270px] space-x-5"
          >
            <img className="w-full h-[120px] object-contain" src={card.image} alt={card.title} />
            <h1 className="pt-4 text-lg font-bold">{card.title}</h1>
            <p className="pt-4 px-1 text-sm text-[#5E6282]">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      


    </div>
  );
};

export default Cart;
