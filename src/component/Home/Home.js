import React from 'react';
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1924,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1396,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    
                }
            }
        ]
    };
    return (
        <div>
             <Slider className=""  {...settings}>
                           
                           <div className="slide-image sajek" onClick={() => props.handleNameChange('Sajek')} >
                               <h2 className="text-white">Sajek</h2>
                           </div>
                           <div className="slide-image coxbazar" onClick={() => props.handleNameChange("Cox's Bazar")}>
                              <h2 className="text-white">Cox's Bazar</h2>
                           </div >
                           <div className="slide-image sreemongol" onClick={() => props.handleNameChange('Sreemongol')} >
                               <h2 className="text-white">Sreemongol</h2>
                           </div>
                           <div className="slide-image sundorbon" onClick={() => props.handleNameChange('Sundorbon')} >
                              <h2 className="text-white">Sundorbon</h2>
                           </div>
                           <div className="slide-image sylhet" onClick={() => props.handleNameChange('Sylhet')}>
                               <h2 className="text-white">Sylhet</h2>
                           </div>
           </Slider>
        </div>
    );
};

export default Home;