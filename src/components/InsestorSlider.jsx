
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import Photo1 from './images/1677500680.investor_5.jpg';
import Photo2 from './images/bt1.png';
import Photo3 from './images/bt2.png';
import Photo4 from './images/1677500534.investor_2.jpg';
import Photo5 from './images/1677757997.1677500873.investor_3.jpg';
 import JavaTimesSlider from "./JavaTimesSlider";

const InsestorSlider = () => {

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
  return (
    <>
    <div className='slider-parent'>
      <h2> Our<span>INVESTORS</span></h2><br />
      <p>Willing to take risks to win with us!</p>
    </div>



    <div className="slider-container-two">
      <Slider {...settings}>
       <div className="parent">
          <img className="slider-img-two" src={Photo1} alt="Image 1" />

       <div className="text-img">
<img src={Photo2} alt="" />
       </div>
    <div className="text-parent">
    <p className="investor-title">MARTHA DALIA RAMOS SANVICENTE</p>
    <p className="investor-details">I decided to invest in Java because since I've known coffee, I haven't known another place with that quality in the region, but beyond that, 
        you can see and feel the passion for coffee and without that it's the main ingredient of any company. 
        In addition, it is combined with innovation, creativity, but above all the spirit of collective consciousness.
         I had never heard of a project like this and I am happy to be part of a system that is revolutionizing minds and offering quality</p>
   <div className="text-img-two">
    <img  src={Photo3} alt="" />

   </div>
    </div>
       </div>
        
     
       <div className="parent">
          <img className="slider-img-two" src={Photo4} alt="Image 1" />

       <div className="text-img">
<img src={Photo2} alt="" />
       </div>
    <div className="text-parent">
    <p className="investor-title">MARTHA DALIA RAMOS SANVICENTE</p>
    <p className="investor-details">I decided to invest in Java because since I've known coffee, I haven't known another place with that quality in the region, but beyond that, 
        you can see and feel the passion for coffee and without that it's the main ingredient of any company. 
        In addition, it is combined with innovation, creativity, but above all the spirit of collective consciousness.
         I had never heard of a project like this and I am happy to be part of a system that is revolutionizing minds and offering quality</p>
   <div className="text-img-two">
    <img  src={Photo3} alt="" />

   </div>
    </div>
       </div>
        
       <div className="parent">
          <img className="slider-img-two" src={Photo5} alt="Image 1" />

       <div className="text-img">
<img src={Photo2} alt="" />
       </div>
    <div className="text-parent">
    <p className="investor-title">MARTHA DALIA RAMOS SANVICENTE</p>
    <p className="investor-details">I decided to invest in Java because since I've known coffee, I haven't known another place with that quality in the region, but beyond that, 
        you can see and feel the passion for coffee and without that it's the main ingredient of any company. 
        In addition, it is combined with innovation, creativity, but above all the spirit of collective consciousness.
         I had never heard of a project like this and I am happy to be part of a system that is revolutionizing minds and offering quality</p>
   <div className="text-img-two">
    <img  src={Photo3} alt="" />

   </div>
    </div>
       </div>
        
       
       
      </Slider>
    </div>
<div>
  < JavaTimesSlider/> 
</div>

    </>
  )
}

export default InsestorSlider;
