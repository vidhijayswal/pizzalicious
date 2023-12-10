import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizzaBGImage.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'> 
      <h1>
        Pizzalicious
      </h1>
      <p> Pizza that makes you smile :)</p>
      <Link to="/menu"> 
      <button> ORDER NOW </button>
      </Link>
      
       </div>
    </div>
  )
}

export default Home;
