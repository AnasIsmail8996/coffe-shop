import React from 'react'
import video from '../components/video/testimonialvideo1.mp4'
const ColorFullPage = () => {
  return (
    <>
    <div className='back-img'>
      
<div className='Text-Heading-H1'>
    <h1>
    What does our investor  think <br /> about <span> Java Times Caffe </span>, after joining our crew?
    </h1>
    <div className='Text-Heading-H2'>
    <p>Help build a healthier community while <br />     building yourself a healthier bank <br /> account!</p>

    </div>
    <button className='btn-contact-us'>Contact us</button>
</div>


<div className='video-section'>
<video width="640" height="360" autoPlay muted>
        <source src={video} type="video/mp4" />
   
      </video>
</div>
    </div>
    </>
  )
}

export default ColorFullPage;
