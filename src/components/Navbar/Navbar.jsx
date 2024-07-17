import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import logo from '../../assets/logo2.png'
import menuIcon from "../../assets/menu-icon.png"
import crossIcon from "../../assets/cross_icon.png"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css'

function Navbar() {
  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 70 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo-name">
      <img src={logo} className='logo' alt=""  />
      <strong>INNOVATION</strong>
      </div>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500} >Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} >About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-260}>Contact us</Link></button></li>
      </ul>
      <img src={mobileMenu? crossIcon : menuIcon} className='menu-icon' alt="" onClick={()=>toggleMenu()} />
    </nav>
  )
}

export default Navbar
