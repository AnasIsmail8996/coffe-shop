import React from 'react'
import logo from './images/logo.webp';
import Form from 'react-bootstrap/Form';
import Coffepage from './Coffepage';



const CardRow = () => {
  return (
    <>
    <div className='First-card'>
      <img src={logo} alt="" />
      <h2><span> Calculate </span> <br />   Your Cost</h2>
      <p>Yearly Growth</p>
      <button>Contact us</button>
    </div>
       {/* details */}
    <div className=' Second-Card'>
        <h2>Result</h2>
        <p>  Year Of Investment:  <span>Year 01 </span></p>
       <p className='line-text'></p><hr  className='simple-line'/>

    <div className=' Second-Card-two'>
       <p>  Investment:  <span>$5000 </span></p>
       <p className='line-text-two'></p><hr  className='simple-line-two'/>
    </div>

    <div className='Second-Card-there'>
       <p>  Share Price:  <span>$200 </span></p>
       <p className='line-text-there'></p><hr  className='simple-line-there'/>
    </div>
   
   

    <div className='Second-Card-four'>
       <p>  Investor Shares:  <span>175 </span></p>
       <p className='line-text-four'></p><hr  className='simple-line-four'/>
    </div>

    <div className='Second-Card-five'>
       <p> Profit:
<span>$600   </span></p>
       <p className='line-text-five'></p><hr  className='simple-line-five'/>
    </div>
    

    <div className='Second-Card-six'>
       <p> Exit:

<span>$4100  </span></p>
       <p className='line-text-six'></p><hr  className='simple-line-six'/>
    </div>
    <p className='last-text'>No hidden charges in our service and no extra charge for our great services, Enjoy from the first day</p>
    </div>

    <div className='card-third'>
<div  className='first-row'>
    <p>Currency</p>
    <p className='first-row-two'>M X N</p>
</div>
<div className='Second-row'>
    <p className='Second-row-para'>How much money:</p>
<Form.Range style={{ width: '75%', color:'red' }} />
<p  className='Second-row-price'>$5000</p>  
<p  className='Second-row-price-two'>$100,00,00</p>  
</div>
   <div className='price-ratio'>
   <p className='price-ratio-range'>$50..-10...</p>
   </div>
    <div className='year'>
        <p>Years :</p>
        <select className='Selected' id='move-dropdown'>
  <option  value="option1">1 Year</option>
  <option  value="option2">2 Year</option>
  <option    value="option3">3 Year</option>
  <option    value="option3">5 Year</option>
  <option    value="option3">6   Year</option>
</select>
    </div>
    <div className='btn-Culculate'> <button>Culculate</button></div>
    <div className='btn-java-times'><button>Java Times Guarantee</button></div>
    <Coffepage/>
    </div>
    
    </>
  )
}

export default CardRow;
