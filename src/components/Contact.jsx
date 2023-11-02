import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <div className='contact-text'>
    <h2><span> Contact </span>     Us!</h2>
    <p>Submit The Form <br /> Below To Get Started:</p>
    </div>



<div className='form-size-Cnt'>

<div className="row">
      <div className="col-lg-6">
        <h3>Name</h3>
        <input required type="text" id="name" placeholder="Type Name" value="" />
      </div>
      <div className="col-lg-6">
        <h3>Email</h3>
        <input type="email" id="email" placeholder="Type Email" value="" />
      </div>
      <div className="col-lg-12">
        <h3>Phone</h3>
        <input type="number" id="email" placeholder="+52" value="" />
      </div>
    </div> 
    <div className="col-lg-12">
        <h3>Message</h3>
       <textarea name="text" id="" cols="10" rows="4"></textarea>
      </div>
      <div className='btn-submit'>

      <button >Submit</button>
      </div>
</div>
<div>
    <Footer/>
</div>
    </>
  )
}

export default Contact;
