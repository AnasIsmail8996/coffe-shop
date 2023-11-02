import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from './images/sec-7-1.png'
import icon2 from './images/sec-7-2.png'
import icon3 from './images/sec-7-3.png'
import icon4 from './images/sec-7-4.png'
import Ratio from './Ratio';
const CardIcon = () => {
  return (
    <>
    <div className='card-Heading'>
      <h2>What <span> JAVA TIMES  CAFFE  </span>  Give you</h2>
      <p>We created a system that creates real value for our franchise  partners and our customers.</p>
    </div> 
    <div class='card-section'>

    <div className="container">
      <div className="row box-container">
        <div className="col-3 box">
        <img src={icon1} alt="" />
        <h2>RELATIVELY LOW OPERATING COSTS</h2>
        <p>RELATIVELY LOW OPERATING COSTS</p>
        </div>

        <div className="col-3 box">
        <img src={icon2} alt="" />
        <h2>FLEXIBLE BUSINESS MODEL</h2>
        <p>FLEXIBLE BUSINESS MODEL</p>
        </div>

        <div className="col-3 box">
        <img src={icon3} alt="" />
        <h2>POS</h2>
        <p>POS</p>
        </div>

        <div className="col-3 box">
        <img src={icon4} alt="" />
        <h2>MARKETING</h2>
        <p>MARKETING</p>
        </div>
      </div>

    </div>

</div>
<div>
    <Ratio/>
</div>
    </>
  )
}

export default CardIcon;
