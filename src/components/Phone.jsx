import React from 'react'
import img1 from '../components/images/1678285724.43_copy_2.png';
import img2 from '../components/images/stores-funded-icon.png';
import img3 from '../components/images/stores-price-icon.png';
import img4 from '../components/images/total-shares-icon.png';

const Phone = () => {
  return (
    <>
    <div className='Phone-img'>
        <img  src={img1}  alt=''/>
        <div className='card-info'>
       <p>2,338,800</p>
<img  className='card-img' src={img2} alt="" />
         <p className='text-two'>Total  Stores  Funded</p>
        </div>
        
        {/* card two */}

      
        <div className='card-info-two'>
       <p>20</p>
<img  className='card-img-two' src={img3} alt="" />
         <p className='text-There'> Stores Prices    </p>
        </div>


        <div className='card-info-there'>
       <p>120,000,000</p>
<img  className='card-img-there' src={img4} alt="" />
         <p className='text-Four'> Total Shere    </p>
        </div>


          </div>




    </>
  )
}

export default Phone;
