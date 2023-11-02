import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Photos1 from './images/image-1679508689158.jpg';
import Photos2 from './images/1677757997.1677500873.investor_3.jpg';
import Photos3 from './images/curve-arrow.png';
import Photos4 from './images/image-1698021865423.jpg';
import Photos5 from './images/image-1683057490654.jpg';
import Photos6 from './images/image-1683658112264.jpg';
import Photos7 from './images/image-1686879346998.jpg';
import Photos8 from './images/image-1680918882832.jpg';
import Photos9 from './images/image-1697815338646.jpg';
import Photos10 from './images/image-1698033057378.jpg';
import Photos11 from './images/1677500534.investor_2.jpg';
import Photos12 from './images/1677500680.investor_5.jpg';
import Photos13 from './images/1677989930.josé_armando_sáenz_esqueda.jpg';
import Photos14 from './images/image-1695941959909.jpg';
import Contact from './Contact';

const JavaTimesSlider = () => {

    const responsive = {
        // superLargeDesktop: {},
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <div className='java-time-H'>
        <h2><span>JAVA TIMES</span>  Blog</h2>
    </div>
   

<Carousel responsive={responsive} className='caraousel-parent'>
<div>
<div className='card-carousel'>
    <img src={Photos1} alt="" className='card-carousel-img' />
    <div className='text-slider'>
      <p >A que edad invierten los mexicanos en acciones y por que
       invertir en el proyecto Java Times Caffe es una gran oportunidad</p>
   
      <p className='para'>

       ¡Atención amantes del café e inversores! Hay una nueva cafetería que abrirá en Saltillo
        400 Blvd en Plaza Saltillo 400 y queremos que formen parte de ella. Ya sea que seas de Torreón,
      </p>
      <div className='img-name-icon'>
       <img className='img-small' src={Photos2} alt="" />
      <p className='name'> Martha Dalia </p>
      <span className='days'> 5 months ago</span>
      </div>
      <div className='icon'>
        <img src={Photos3} alt="" />
      </div>
    </div>
  </div>
</div>

  <div>
  <div className='card-carousel'>
    <img src={Photos4} alt="" className='card-carousel-img' />
    <div className='text-slider'>
      <p >A que edad invierten los mexicanos en acciones y por que
       invertir en el proyecto Java Times Caffe es una gran oportunidad</p>
   
      <p className='para'>

       ¡Atención amantes del café e inversores! Hay una nueva cafetería que abrirá en Saltillo
        400 Blvd en Plaza Saltillo 400 y queremos que formen parte de ella. Ya sea que seas de Torreón,
      </p>
      <div className='img-name-icon'>
       <img className='img-small' src={Photos13} alt="" />
      <p className='name'> Martha Dalia </p>
      <span className='days'> 5 months ago</span>
      </div>
      <div className='icon'>
        <img src={Photos3} alt="" />
      </div>
    </div>
  </div>
  </div>

  <div className='card-carousel'>
    <img src={Photos5} alt="" className='card-carousel-img' />
    <div className='text-slider'>
      <p >A que edad invierten los mexicanos en acciones y por que
       invertir en el proyecto Java Times Caffe es una gran oportunidad</p>
   
      <p className='para'>

       ¡Atención amantes del café e inversores! Hay una nueva cafetería que abrirá en Saltillo
        400 Blvd en Plaza Saltillo 400 y queremos que formen parte de ella. Ya sea que seas de Torreón,
      </p>
      <div className='img-name-icon'>
       <img className='img-small' src={Photos11} alt="" />
      <p className='name'> Martha Dalia </p>
      <span className='days'> 5 months ago</span>
      </div>
      <div className='icon'>
        <img src={Photos3} alt="" />
      </div>
    </div>
  </div>




  <div className='card-carousel'>
    <img src={Photos6} alt="" className='card-carousel-img' />
    <div className='text-slider'>
      <p >A que edad invierten los mexicanos en acciones y por que
       invertir en el proyecto Java Times Caffe es una gran oportunidad</p>
   
      <p className='para'>

       ¡Atención amantes del café e inversores! Hay una nueva cafetería que abrirá en Saltillo
        400 Blvd en Plaza Saltillo 400 y queremos que formen parte de ella. Ya sea que seas de Torreón,
      </p>
      <div className='img-name-icon'>
       <img className='img-small' src={Photos14} alt="" />
      <p className='name'> Martha Dalia </p>
      <span className='days'> 5 months ago</span>
      </div>
      <div className='icon'>
        <img src={Photos3} alt="" />
      </div>
    </div>
  </div>




  <div>
  <div className='card-carousel'>
    <img src={Photos8} alt="" className='card-carousel-img' />
    <div className='text-slider'>
      <p >A que edad invierten los mexicanos en acciones y por que
       invertir en el proyecto Java Times Caffe es una gran oportunidad</p>
   
      <p className='para'>

       ¡Atención amantes del café e inversores! Hay una nueva cafetería que abrirá en Saltillo
        400 Blvd en Plaza Saltillo 400 y queremos que formen parte de ella. Ya sea que seas de Torreón,
      </p>
      <div className='img-name-icon'>
       <img className='img-small' src={Photos12} alt="" />
      <p className='name'> Martha Dalia </p>
      <span className='days'> 5 months ago</span>
      </div>
      <div className='icon'>
        <img src={Photos3} alt="" />
      </div>
    </div>
  </div>

  </div>


  <div >
  <div className='card-carousel'>
    <img src={Photos7} alt="" className='card-carousel-img' />
    <div className='text-slider'>
      <p >A que edad invierten los mexicanos en acciones y por que
       invertir en el proyecto Java Times Caffe es una gran oportunidad</p>
   
      <p className='para'>

       ¡Atención amantes del café e inversores! Hay una nueva cafetería que abrirá en Saltillo
        400 Blvd en Plaza Saltillo 400 y queremos que formen parte de ella. Ya sea que seas de Torreón,
      </p>
      <div className='img-name-icon'>
       <img className='img-small' src={Photos13} alt="" />
      <p className='name'> Martha Dalia </p>
      <span className='days'> 5 months ago</span>
      </div>
      <div className='icon'>
        <img src={Photos3} alt="" />
      </div>
    </div>
  </div>

  </div>

  <div >
  <div className='card-carousel'>
    <img src={Photos9} alt="" className='card-carousel-img' />
    <div className='text-slider'>
      <p >A que edad invierten los mexicanos en acciones y por que
       invertir en el proyecto Java Times Caffe es una gran oportunidad</p>
   
      <p className='para'>

       ¡Atención amantes del café e inversores! Hay una nueva cafetería que abrirá en Saltillo
        400 Blvd en Plaza Saltillo 400 y queremos que formen parte de ella. Ya sea que seas de Torreón,
      </p>
      <div className='img-name-icon'>
       <img className='img-small' src={Photos11} alt="" />
      <p className='name'> Martha Dalia </p>
      <span className='days'> 5 months ago</span>
      </div>
      <div className='icon'>
        <img src={Photos3} alt="" />
      </div>
    </div>
  </div>  
  </div>
  
 
 
  <div className='card-carousel'>
    <img src={Photos10} alt="" className='card-carousel-img' />
    <div className='text-slider'>
      <p >A que edad invierten los mexicanos en acciones y por que
       invertir en el proyecto Java Times Caffe es una gran oportunidad</p>
   
      <p className='para'>

       ¡Atención amantes del café e inversores! Hay una nueva cafetería que abrirá en Saltillo
        400 Blvd en Plaza Saltillo 400 y queremos que formen parte de ella. Ya sea que seas de Torreón,
      </p>
      <div className='img-name-icon'>
       <img className='img-small' src={Photos11} alt="" />
      <p className='name'> Martha Dalia </p>
      <span className='days'> 5 months ago</span>
      </div>
      <div className='icon'>
        <img src={Photos3} alt="" />
      </div>
    </div>
  </div>
  

</Carousel>;
<div>
  <Contact/>
</div>
    </>
  )
}

export default JavaTimesSlider;
