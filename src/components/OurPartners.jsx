import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import slider1img from "../assets/images/png/window1.svg";
import slider2img from "../assets/images/png/google2.svg";
import slider3img from "../assets/images/png/firefox.svg";
import slider4img from "../assets/images/png/safari.svg";
import Slider from "react-slick";
const OurPartners = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="bg- black py-5 overflow_x_hidden scroll">
      <Container>
        <p
          className="text-center ff_nunito fw_900 fs_4xl clr_black"
          data-aos="fade-right"
        >
          Our <span className="client_underline">Partner</span>
        </p>
        <Slider {...settings} className="mt-5 ourpartners">
          <div data-aos="fade-up" className="h-100 hover_bg_change">
            <div className="bg_grey transition ms-4 br_20 p_28_88 h-100">
              <img
                src={slider1img}
                alt="slider1img"
                className="max_w_64 mx-auto w-100 greyscle transition"
              />
            </div>
          </div>
          <div data-aos="fade-down" className="h-100 hover_bg_change">
            <div className="bg_grey transition ms-4 br_20 p_28_88 h-100">
              <img
                src={slider2img}
                alt="slider2img"
                className="min_w_6 4 w-100 greyscle transition"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="h-100 hover_bg_change">
            <div className="bg_grey transition ms_4 ms-4 br_20 p_28_88 h-100">
              <img
                src={slider3img}
                alt="slider3img"
                className="min_w_6 4 w-100 greyscle transition"
              />
            </div>
          </div>

          <div data-aos="fade-down" className="h-100 hover_bg_change">
            <div className="bg_grey transition ms-4 br_20 p_28_88 h-100">
              <img
                src={slider4img}
                alt="slider4img"
                className="min_w_6 4 w-100 greyscle transition"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="h-100 hover_bg_change">
            <div className="bg_grey transition ms-4 br_20 p_28_88 h-100">
              <img
                src={slider4img}
                alt="slider4img"
                className="min_w_6 4 w-100 greyscle transition"
              />
            </div>
          </div>
          <div data-aos="fade-down" className="h-100 hover_bg_change">
            <div className="bg_grey transition ms-4 br_20 p_28_88 h-100">
              <img
                src={slider3img}
                alt="slider3img"
                className="min_w_6 4 w-100 greyscle transition"
              />
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default OurPartners;
