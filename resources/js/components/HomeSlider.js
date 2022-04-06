import React, { Component } from "react";
import Slider from "react-slick";

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>      
        <Slider {...settings}>
          <div>
            <h4>Some Title</h4>
            <img 
              style={{ width: '100%', height: '40rem', objectFit: 'cover', alignSelf: 'center' }}
              src="https://www.fezamutfak.com/news/istanbul_ev_tadilat_ve_dekorasyonu_yapan_firmalar.jpg?w=&h=" alt="test img"
            />
          </div>
          <div>
            <h4>Some Title</h4>
            <img 
              style={{ width: '100%', height: '40rem', objectFit: 'cover', alignSelf: 'center' }}
              src="https://www.fezamutfak.com/news/istanbul_ev_tadilat_ve_dekorasyonu_yapan_firmalar.jpg?w=&h=" alt="test img"
            />
          </div>
          <div>
            <h4>Some Title</h4>
            <img 
              style={{ width: '100%', height: '40rem', objectFit: 'cover', alignSelf: 'center' }}
              src="https://www.fezamutfak.com/news/istanbul_ev_tadilat_ve_dekorasyonu_yapan_firmalar.jpg?w=&h=" alt="test img"
            />
          </div>
          <div>
            <h4>Some Title</h4>
            <img 
              style={{ width: '100%', height: '40rem', objectFit: 'cover', alignSelf: 'center' }}
              src="https://www.fezamutfak.com/news/istanbul_ev_tadilat_ve_dekorasyonu_yapan_firmalar.jpg?w=&h=" alt="test img"
            />
          </div>         
        </Slider>
      </div>
    );
  }
}