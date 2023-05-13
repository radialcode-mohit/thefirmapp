import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import brandmg from "../assets/images/svg/brand.svg";
import mikeimg from "../assets/images/svg/mike.svg";
import marketimg from "../assets/images/png/market.jpg";
import reportimg from "../assets/images/png/reporting.jpg";
import dataimg from "../assets/images/png/data.jpg";
const ReasonSec = () => {
  const [first, setFirst] = useState(2);
  return (
    <section className="py-5 bg_lightgrey ">
      <Container className="pt-md-5">
        <div className="text-center">
          <p
            className=" ff_nunito  fw_900 fs_4xl clr_black letter_sp_point02"
            data-aos="fade-down"
          >
            Reason to Choose <span className="client_underline"> Us</span>
          </p>
          <p
            className=" ff_lora fw-normal fs_xl clr_black letter_sp_point02 max_w_864 mx-auto"
            data-aos="fade-up"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div className="pt-5 d-flex max_w_1006 justify-content-between  mx-auto scroll overflow_x_scroll">
            <div
              lg={3}
              data-aos="fade-up"
              className="hover_yellow_bg"
              onClick={() => {
                setFirst(1);
              }}
            >
              <div className="d-flex justify-content-between align-items-center cursor_pointer">
                <div className="  ">
                  <div className="position-relative crcle_yellow">
                    <div className="line position-absolute top-50 translate-middle-y line_end_minus"></div>
                  </div>
                </div>
                <p
                  className={
                    first === 1
                      ? "mb-0 ms-4 p_12_15 border_f7f7f7_2px  bg_yellow position-relative br_5"
                      : "mb-0 ms-4 p_12_15 border_f7f7f7_2px bg_white_hover position-relative br_5"
                  }
                >
                  <span
                    className={
                      first === 1
                        ? "text-nowrap ff_nunito  fw-bold fs_xl  clr_white letter_sp_point05  position-relative z_index_5"
                        : "text-nowrap ff_nunito  fw-bold fs_xl  clr_darkestgrey letter_sp_point05  position-relative z_index_5"
                    }
                  >
                    Market Research
                  </span>
                </p>
              </div>
            </div>
            <div
              lg={3}
              data-aos="fade-down"
              className="hover_yellow_bg"
              onClick={() => {
                setFirst(2);
              }}
            >
              <div className="d-flex justify-co ntent-between align-items-center cursor_pointer">
                <div className="  ">
                  <div className="position-relative crcle_yellow">
                    <div className="line position-absolute top-50 translate-middle-y line_end_minus"></div>
                  </div>
                </div>
                <p
                  className={
                    first === 2
                      ? "mb-0 ms-4 p_12_37 border_f7f7f7_2px  bg_yellow position-relative br_5"
                      : "mb-0 ms-4 p_12_37 border_f7f7f7_2px bg_white_hover position-relative br_5"
                  }
                >
                  <span
                    className={
                      first === 2
                        ? "text-nowrap ff_nunito  fw-bold fs_xl  clr_white letter_sp_point05  position-relative z_index_5"
                        : "text-nowrap ff_nunito  fw-bold fs_xl  clr_darkestgrey letter_sp_point05  position-relative z_index_5"
                    }
                  >
                    Branding
                  </span>
                </p>
              </div>
            </div>
            <div
              lg={3}
              data-aos="fade-up"
              onClick={() => {
                setFirst(3);
              }}
              className="hover_yellow_bg"
            >
              <div className="d-flex justify-c ontent-between align-items-center cursor_pointer">
                <div className="  ">
                  <div className="position-relative crcle_yellow">
                    <div className="line position-absolute top-50 translate-middle-y line_end_minus"></div>
                  </div>
                </div>
                <p
                  className={
                    first === 3
                      ? "mb-0 ms-4 p_12_33 border_f7f7f7_2px  bg_yellow position-relative br_5"
                      : "mb-0 ms-4 p_12_33 border_f7f7f7_2px bg_white_hover position-relative br_5"
                  }
                >
                  <span
                    className={
                      first === 3
                        ? "text-nowrap ff_nunito  fw-bold fs_xl  clr_white letter_sp_point05  position-relative z_index_5"
                        : "text-nowrap ff_nunito  fw-bold fs_xl  clr_darkestgrey letter_sp_point05  position-relative z_index_5"
                    }
                  >
                    Reporting
                  </span>
                </p>
              </div>
            </div>
            <div
              lg={3}
              data-aos="fade-down"
              onClick={() => {
                setFirst(4);
              }}
              className="hover_yellow_bg"
            >
              <div className="d-flex justify-co ntent-between align-items-center cursor_pointer">
                <div className="  ">
                  <div className="position-relative crcle_yellow">
                    <div className="line position-absolute top-50 translate-middle-y line_end_minus"></div>
                  </div>
                </div>
                <p
                  className={
                    first === 4
                      ? "mb-0 ms-4 p_12_15 border_f7f7f7_2px  bg_yellow position-relative br_5"
                      : "mb-0 ms-4 p_12_15 border_f7f7f7_2px bg_white_hover position-relative br_5"
                  }
                >
                  <span
                    className={
                      first === 4
                        ? "text-nowrap ff_nunito  fw-bold fs_xl  clr_white letter_sp_point05  position-relative z_index_5"
                        : "text-nowrap ff_nunito  fw-bold fs_xl  clr_darkestgrey letter_sp_point05  position-relative z_index_5"
                    }
                  >
                    Data Analysis
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="py-md-5" data-aos="flip-right">
        <Container className="bg_white br_30 px-sm-5 py-5 mt-5 ">
          <Row className=" justify-content-between align-items-center">
            <Col lg={6}>
              <div className="bg_white br_25 box_shadow_brnad_img p-2">
                <img
                  src={brandmg}
                  alt="brandmg"
                  className={
                    first === 2
                      ? "br_25 w-100 max_w_530 mx-auto  d-block"
                      : "br_25 w-100 max_w_530 mx-auto d-none "
                  }
                />
                <img
                  src={marketimg}
                  alt="marketimg"
                  className={
                    first === 1
                      ? "br_25 w-100 h_w_img mx-auto  d-block"
                      : "br_25 w-100 h_w_img mx-auto d-none "
                  }
                />
                <img
                  src={reportimg}
                  alt="reportimg"
                  className={
                    first === 3
                      ? "br_25 w-100 h_w_img mx-auto  d-block"
                      : "br_25 w-100 h_w_img mx-auto d-none "
                  }
                />
                <img
                  src={dataimg}
                  alt="dataimg"
                  className={
                    first === 4
                      ? "br_25 w-100 h_w_img mx-auto  d-block"
                      : "br_25 w-100 h_w_img mx-auto d-none "
                  }
                />
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <div className="d-flex align-items-start ms-lg-5 pt-5 pt-lg-0">
                  <img src={mikeimg} alt="mikeimg" />
                  <div className="ms-3">
                    <span
                      className={
                        first === 2
                          ? "d-inline-block ff_nunito fw-bold fs_3xl clr_black letter_sp_point05 client_underline"
                          : " ff_nunito fw-bold d-none fs_3xl clr_black letter_sp_point05 client_underline"
                      }
                    >
                      Branding
                    </span>
                    <span
                      className={
                        first === 1
                          ? "d-inline-block ff_nunito fw-bold fs_3xl clr_black letter_sp_point05 client_underline"
                          : " ff_nunito fw-bold d-none fs_3xl clr_black letter_sp_point05 client_underline"
                      }
                    >
                      Market Research
                    </span>
                    <span
                      className={
                        first === 3
                          ? "d-inline-block ff_nunito fw-bold fs_3xl clr_black letter_sp_point05 client_underline"
                          : " ff_nunito fw-bold d-none fs_3xl clr_black letter_sp_point05 client_underline"
                      }
                    >
                      Reporting
                    </span>
                    <span
                      className={
                        first === 4
                          ? "d-inline-block ff_nunito fw-bold fs_3xl clr_black letter_sp_point05 client_underline"
                          : " ff_nunito fw-bold d-none fs_3xl clr_black letter_sp_point05 client_underline"
                      }
                    >
                      Data Analysis
                    </span>
                    <p className=" ff_lora fw-normal mt-3 fs_xl clr_black letter_sp_point02">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type
                    </p>
                    <button className="box_shadow_nav_btn ff_nunito fw-bold fs_xl clr_white letter_sp_point05 br_5 bg_black border-0 p_12_30 mt-4">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ReasonSec;
