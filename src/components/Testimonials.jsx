import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import main1 from "../assets/images/png/mainslider1.svg";
import main2 from "../assets/images/png/mainslider2.svg";
import main3 from "../assets/images/png/mainslider3.svg";
import main4 from "../assets/images/png/mainslider4.svg";
import main5 from "../assets/images/png/mainslider5.svg";
import Slider from "react-slick";
const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    centerMode: true,
    centerPadding: "10px",
    autoplayspeed: 1000,
  };
  return (
    <section className="bg-black">
      <Container>
        <p className=" ff_nunito fw_900 fs_4xl clr_black letter_sp_point02">
          Our <span className=" client_underline">Testimonials</span>
        </p>
        <Slider {...settings} className="mainslider">
          <div>
            <img src={main1} alt="main1" className="w-100" />
          </div>
          <div>
            <img src={main2} alt="main2" className="w-100" />
          </div>
          <div>
            <img src={main3} alt="main3" className="w-100" />
          </div>
          <div>
            <img src={main4} alt="main4" className="w-100" />
          </div>
          <div>
            <img src={main5} alt="main5" className="w-100" />
          </div>
          <div>
            <img src={main5} alt="main5" className="w-100" />
          </div>
          <div>
            <img src={main5} alt="main5" className="w-100" />
          </div>
          <div>
            <img src={main5} alt="main5" className="w-100" />
          </div>
          <div>
            <img src={main5} alt="main5" className="w-100" />
          </div>
          <div>
            <img src={main5} alt="main5" className="w-100" />
          </div>
          <div>
            <img src={main5} alt="main5" className="w-100" />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
