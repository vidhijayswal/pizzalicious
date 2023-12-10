import React from 'react'
import MashroomPizza from '../assets/MashroomPizza.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MashroomPizza})` }}> </div>
      <div className='aboutBottom'>
        <h1> ABOUT US </h1>
        <p> At Pizzalicious, it’s about more than amazing meals. It’s about shared values that bring us together, values like respect, pride, and a commitment to diversity. Every day we try to make our stores more successful and our food more delicious. At the same time we’re making our operations more sustainable and giving back to the communities we call home.
        The secret to our food? It’s pretty simple. Source fresh, quality ingredients. Prepare dishes with care and passion. Serve them with a warm smile. In other words, we take pride in what we make and how we share it. Even though we’ve grown a lot over the years, our mission is still the same: Always the best food, made especially for you.</p>
        <p>We’re Canada’s favourite pizza chain for a lot of reasons, but the most important one is our people. Before that box ever arrives at your door, a diverse team of talented people make it happen, from the head office to the kitchen counter.
As a company, we're committed to providing an environment that is inclusive and that is free of barriers. This could be any barrier based on age, race, ancestry, place of origin, colour, ethnic origin, citizenship, creed, sex (including pregnancy), gender identity, gender expression, sexual orientation, record of offences, marital status, family status and disability.
So if you’re looking for an exciting position where you can grow and advance with training and support Pizza Pizza delivers. We’re proud of our culture of enthusiasm, integrity, and open communication. So check out the latest job listings. We think you’ll like it here.</p>
     </div>
    </div>
  )
}

export default About
