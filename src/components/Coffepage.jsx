import React from 'react'
import shop from './images/jtcstore.jpg';

const Coffepage = () => {
  return (
      <>
      <div className='color-side'>
        <h2>A <span> Modern </span>  Store <br /> <span> Design</span></h2>
        <p>Beautiful ambiance <br /> with luxury space. ISO certified</p>
        
      <div className='img-shop'>
        <img src={shop} alt="" />
      </div>
      <div className='btn-contact'>
        <button>Contact us</button>

      </div>

      </div>
      
        </>
  )
}

export default Coffepage;
