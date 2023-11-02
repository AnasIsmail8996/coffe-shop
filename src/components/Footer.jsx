import React from 'react'
import {  FaMapMarker, FaPhone , FaEnvelope } from 'react-icons/fa';
import icon1 from './images/1678451258.1677768837.imgpsh_fullsize_anim_(5).png'
import icon2 from './images/1677758464.imgpsh_fullsize_anim_(2).png'
import icon3 from './images/1677758485.imgpsh_fullsize_anim.png'
import icon4 from './images/1677758509.imgpsh_fullsize_anim_(1).png'
const Footer = () => {
  return (
    <>
<div className='footer-img'></div>
    <div className="col-md-3">
      <div className="footer-fr pb-3">
        <p className="h5 footer-heading">CONTACT US</p>
        <p className="footer-desc">Hello there! At Java Times Caffé, we highly value professionalism and fun equally, and we take great pride in providing exceptional service to our customers. If you need to get in touch with us, please feel free to check out our website or social media pages for contact information. Alternatively, you can also drop us an email if you prefer. We are eager to assist you and ensure that you have an unforgettable experience at Java Times Caffé!</p>
        <ul>
          <li><i className="map-marker" aria-hidden="true"><FaMapMarker/> </i><span>Calle Francisco Zarco 524 Ote,  Colonia Centro Gomes Palacio Durango CODIGO POSTAL 35000</span></li>
          <li><i className="phone" aria-hidden="true"><FaPhone/> </i><span>+52(871) 1161608</span></li>
          <li><i className="envelope" aria-hidden="true"><FaEnvelope/> </i><span>inversion@javatimescaffe.com</span></li>
        </ul>
        <img  src="https://fundraiser.pluton.ltd/public/assets/images/1678451258.1677747888.1677505670.logo_(1).webp" alt="" className="pt-1" />
      </div>
    </div>  
    




    <div className="col-md-3-two">
      <div className="footer-fr pb-3">
        <p className="h5 footer-heading-two">OUR MISSION</p>
        <p className="footer-desc-two">Our mission is to establish ourselves as the top Blockchain Technology provider for the specialty coffee industry.
         We are committed to delivering products of the highest quality and providing exceptional customer service. 
         We are dedicated to offering the best opportunities to our employees and showcasing our expertise to each customer we serve. 
        Our goal is to make a positive impact on the industry by demonstrating the value of Blockchain Technology one customer at a time.</p>
       
       
        <p className="h5 footer-heading-two">OUR VISION</p>
        <p className="footer-desc-two">Our plan is to open 300 new branches by inviting young people over 18 years old, employees, friends, suppliers, coffee growers, and basically everyone in Mexico to invest. We want everyone to be part of this project so that together we can face the big challenges and make wealth distribution more equitable in Mexico, at least. 
            After that, we will see where else we can expand.</p>
      </div>
    </div>  

<div className='col-there'>
<p className="h5 footer-heading-there">NEWSLETTER</p>
        <p className="footer-desc-there">Our goal is to provide ease to all Mexicans through the purchase of shares in the Java Times Caffé 300-store
         project, offering a simple way for people of all ages to earn money and become part of the coffee industry.
         In addition, we are focused on creating artificial intelligence systems in the future to further enhance the experience of our 
         customers and collaborators.</p> 
</div>

<div className='btn-input'>
<input type="text" placeholder='Your@gmail.com'  />
<button className='Get-started-btn'>Get Started</button>
</div>

<div className='icon-section-path'>
        <p>POWERED BY</p>
        <p className='icon-text'>Startup Networks Sapi de CV</p>
            <img src={icon1} alt=""  className='icon-flag'/>
</div>
        <div className='icon-section-path-two'>
            <p>FOLLOW US</p>
            <img src={icon2} alt=""   className='icon-small'/>
            <img src={icon3} alt="" className='icon-small' />
            <img src={icon4} alt=""  className='icon-small'/>
            <img src={icon2} alt="" className='icon-small' />
        </div>
    </>
  )
}

export default Footer;
