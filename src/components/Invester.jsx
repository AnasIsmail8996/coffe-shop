import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'; // Import your custom CSS
import img1 from './images/1677500534.investor_2.jpg'
import img2 from './images/1677500609.investor_4.png'
import img3 from './images/1677500680.investor_5.jpg'
import img4 from './images/1677500940.investor_1.jpg'
import img5 from './images/1677757997.1677500873.investor_3.jpg'
import img6 from './images/1677989930.josé_armando_sáenz_esqueda.jpg'
import img7 from './images/authorImage-1681154339723.jfif'
import img8 from './images/1677758485.imgpsh_fullsize_anim.png'



const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-person-div">
          <img className="slider-img" src={img1} alt="Image 1" />
          <p>Sol invested in java Times Caffe saltilo 400
          <div className="spanitem">
            <span>$500</span>
            <span>25 days ago</span>
          </div>
          </p>
        </div>
      
        <div className="slider-person-div">
          <img className="slider-img" src={img2} alt="Image 1" />
          <p>Sol invested in java Times Caffe saltilo 400
          <div className="spanitem">
            <span>$2550</span>
            <span>5 days ago</span>
          </div>
          </p>
        </div>
        <div className="slider-person-div">
          <img className="slider-img" src={img3} alt="Image 1" />
          <p>Sol invested in java Times Caffe saltilo 400
          <div className="spanitem">
            <span>$4550</span>
            <span>45 days ago</span>
          </div>
          </p>
        </div>
        <div className="slider-person-div">
          <img className="slider-img" src={img4} alt="Image 1" />
          <p>Sol invested in java Times Caffe saltilo 400
          <div className="spanitem">
            <span>$400</span>
            <span>31 days ago</span>
          </div>
          </p>
        </div>
        <div className="slider-person-div">
          <img className="slider-img" src={img5} alt="Image 1" />
          <p>Sol invested in java Times Caffe saltilo 400
          
          <div className="spanitem">
            <span>$400</span>
            <span>31 days ago</span>
          </div>
          </p>  
        </div>
        <div className="slider-person-div">
          <img className="slider-img" src={img6} alt="Image 1" />
          <p>Sol invested in java Times Caffe saltilo 400

          <div className="spanitem">
            <span>$400</span>
            <span>31 days ago</span>
          </div>
          </p>
        </div>
        <div className="slider-person-div">
          <img className="slider-img" src={img7} alt="Image 1" />
          <p>Sol invested in java Times Caffe saltilo 400

          <div className="spanitem">
            <span>$400</span>
            <span>31 days ago</span>
          </div>
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
