import React from "react";
import Logo from "../assets/Logo.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Playbutton from '../assets/play-button.png'
import Cart from "./Cart";
import Top from "./Top";


const Page = () => {
  // useEffect(() => {
  //   AOS.init({
  //     // You can customize options here
  //     duration: 1000, // Duration of animation in milliseconds
  //   });
  // }, []);

  return (
    <div>


      <div className="absolute top-0 right-1.5">
        <img src={Img1} alt="" />
      </div>

      <div className="absolute top-32 h-14 right-8">
        <img src={Img2} alt="" />
      </div>

      <div className="absolute top-28 h-14 right-[90px]">
        <img src={Img3} alt="" />
      </div>

    
      {/* Navbar */}

      <div className="navbar flex justify-around mt-11 relative z-10">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="items flex space-x-16 mt-3">
          <div>Destinations</div>
          <div>Hotels</div>
          <div>Flights</div>
          <div>Bookings</div>
          <div>Login</div>
          <button className="outline outline-1 rounded-sm p-1 px-2">
            Sign Up
          </button>
          <select name="cars" id="cars">
            <option value="volvo">EN</option>
            <option value="saab">FR</option>
            <option value="saab">IT</option>
          </select>
        </div>
      </div>


      {/* // Main section */}

<div className="container ml-36 mt-32 sm:row lg:normal mx-auto">
    <div className="h2 text-xl">
        <h2 className='text-[#DF6951]'>Best Destinations around the world</h2>
    </div>

    <div className="text-[#181E4B] font-bold text-5xl w-80 pt-5 sm:row lg:normal">
        <h1>Travel, <span className='border-b-4 border-red-400'> enjoy </span>
and live a new
and full life</h1>
    
    </div>
    <div className="text-xl w-2/4 pt-5 text-[#5e6282] sm:row lg:normal" >Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</div>
<div className="button flex">
    <div className="button pt-5"><button className='bg-[#f1a501] text-[#fff] rounded-lg px-5 py-3'>Find out more</button></div>
    <div className="logo">

    <img src={Playbutton} alt="" />

    </div>
    <div className='pt-8 marker:text-[#686d77]'><p>Play Demo</p></div>
    </div>
    <Cart />
    <Top />
    </div>

    {/* main section closed */}

   

  
  



    </div>
  );
};

export default Page
