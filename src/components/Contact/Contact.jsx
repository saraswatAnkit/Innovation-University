import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import whit_arrow from '../../assets/white-arrow.png'

function Contact() {

  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a494996-0ee3-4710-bb1b-2e9b7c8150c9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if(data.success){
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error",data);
      setResult(data.message);
    }
  }

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@Codyankit.com</li>
          <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li><img src={location_icon} alt="" />21 Machestic velle, Mathura <br />UP, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your Mobile Number' required />
          <label>Write your message here</label>
          <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={whit_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
