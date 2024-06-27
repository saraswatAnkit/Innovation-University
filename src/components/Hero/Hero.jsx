import React, { useEffect, useState } from 'react'
import './Hero.css'
import HeroImage from './HeroImages.js'

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

 useEffect(()=>{
  const intervalId = setInterval(()=>{
    setCurrentIndex(prevIndex => (prevIndex === HeroImage.length -1 ? 0 : prevIndex + 1))
  },3500)
  return () => clearInterval(intervalId)
 })

  return (
    <div className='hero container' style={{
    backgroundImage: `linear-gradient(rgba(8,0,58,0.5),rgba(8,0,58,0.5)),url(${HeroImage[currentIndex]})`}}>
      <div className='hero-text'>
    <h1>We Ensure Better Education For A Better World</h1>
    <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
    <button className='btn'>Explore More</button>
      </div>
    </div>
  )
}

export default Hero
