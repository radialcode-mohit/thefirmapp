import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import main1 from "../assets/images/png/mainslider1.svg";
import main2 from "../assets/images/png/mainslider2.svg";
import main3 from "../assets/images/png/mainslider3.svg";
import main4 from "../assets/images/png/mainslider4.svg";
import main5 from "../assets/images/png/mainslider5.svg";
import quotes from "../assets/images/png/quotes.svg";
import crcles from "../assets/images/png/crcles.svg";
import Slider from "react-slick";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-5 my-md-5">
      <Container>
        <p className=" text-center ff_nunito fw_900 fs_4xl clr_black letter_sp_point02">
          Our <span className=" client_underline">Testimonials</span>
        </p>
        <div className="max_w_890 mx-auto">
          <Slider {...settings} className="mainslider mt-5 mb-4">
            <div>
              <div className=" position-relative">
                <img src={main1} alt="main1" className="w-100" />
                <img
                  src={quotes}
                  alt="quotes"
                  className=" position-absolute qutoes_pos"
                />
                <img
                  src={crcles}
                  alt="crcles"
                  className="position-absolute crcles_pos"
                />
              </div>
            </div>
            <div>
              <div className=" position-relative">
                <img src={main2} alt="main2" className="w-100" />
                <img
                  src={quotes}
                  alt="quotes"
                  className=" position-absolute qutoes_pos"
                />
                <img
                  src={crcles}
                  alt="crcles"
                  className="position-absolute crcles_pos"
                />
              </div>
            </div>
            <div>
              <div className=" position-relative">
                <img src={main3} alt="main3" className="w-100" />
                <img
                  src={quotes}
                  alt="quotes"
                  className=" position-absolute qutoes_pos"
                />
                <img
                  src={crcles}
                  alt="crcles"
                  className="position-absolute crcles_pos"
                />
              </div>
            </div>
            <div>
              <div className=" position-relative">
                <img src={main4} alt="main4" className="w-100" />
                <img
                  src={quotes}
                  alt="quotes"
                  className=" position-absolute qutoes_pos"
                />
                <img
                  src={crcles}
                  alt="crcles"
                  className="position-absolute crcles_pos"
                />
              </div>
            </div>
            <div>
              <div className=" position-relative">
                <img src={main5} alt="main5" className="w-100" />
                <img
                  src={quotes}
                  alt="quotes"
                  className=" position-absolute qutoes_pos"
                />
                <img
                  src={crcles}
                  alt="crcles"
                  className="position-absolute crcles_pos"
                />
              </div>
            </div>
            <div>
              <div className=" position-relative">
                <img src={main5} alt="main5" className="w-100" />
                <img
                  src={quotes}
                  alt="quotes"
                  className=" position-absolute qutoes_pos"
                />
                <img
                  src={crcles}
                  alt="crcles"
                  className="position-absolute crcles_pos"
                />
              </div>
            </div>
            <div>
              <div className=" position-relative">
                <img src={main5} alt="main5" className="w-100" />
                <img
                  src={quotes}
                  alt="quotes"
                  className=" position-absolute qutoes_pos"
                />
                <img
                  src={crcles}
                  alt="crcles"
                  className="position-absolute crcles_pos"
                />
              </div>
            </div>
          </Slider>
          <p className=" ff_lora fw-normal fs_xl clr_black text-center pt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took type scrambled it
            to make a type specimen book. It has survived not only five
            centuries,
          </p>
          <p className=" ff_nunito fw-bold fs_2xl text-center">
            Jenny Wilson |{" "}
            <span className="ff_lora fw-normal fs_lg clr_black">
              {" "}
              Digital Agency
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
