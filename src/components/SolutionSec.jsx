import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import coachingimg from "../assets/./images/svg/coaching.svg";
import sound from "../assets/./images/svg/sound.svg";
import digitalmar from "../assets/./images/svg/digitalmarketing.svg";
import ff from "../assets/images/png/ff.png";
import yellowcrcle from "../assets/images/png/yellowcrcle.png";
import lghtblck from "../assets/images/png/lghtblcrccle.png";
const SolutionSec = () => {
  return (
    <section className="py-5  overflow_x_hidden">
      <Container className="py-xl-5">
        <Row className=" justify-content-between align-items-center pb-xxl-5">
          <Col xl={7} className=" position-relative" data-aos="fade-right">
            <img
              src={ff}
              alt="ff"
              className=" position-absolute top-50 start-50 translate-middle z_index_2 d-none d-lg-block"
            />
            <div>
              <div className="d-flex flex-column flex-lg-row  align-items-center">
                <Row className="flex-xl-column flex-sm-row">
                  <Col sm={6} xl={12} className=" position-relative animation1">
                    <img
                      src={yellowcrcle}
                      alt="yellowcrcle"
                      className=" position-absolute yelow_crcle_poS1 d-none d-lg-block"
                    />
                    <div className="text-center p-5 bg_white border_yellow_1px box_shaodw_sec4_card br_30">
                      <img
                        src={coachingimg}
                        alt="coachingimg"
                        className="pb-2"
                      />
                      <p className=" ff_nunito fw-bold fs_3xl clr_black letter_sp_point05 pt-4 pb-1">
                        Coaching
                      </p>
                      <p className=" ff_lora fw-normal fs_xl clr_black pt-2">
                        Loren rasion gravida auem is bibenua tase
                      </p>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    xl={12}
                    className="trans_translate position-relative mt-5 mt-sm-0 animation2"
                  >
                    <img
                      src={lghtblck}
                      alt="lghtblck"
                      className=" position-absolute blck_crcle_poS1 d-none d-lg-block"
                    />
                    <img
                      src={lghtblck}
                      alt="lghtblck"
                      className=" position-absolute blck_crcle_poS2 d-none d-lg-block"
                    />
                    <div className="text-center p-5 bg_white border_yellow_1px box_shaodw_sec4_card br_30">
                      <img src={sound} alt="sound" className="pb-2" />
                      <p className=" ff_nunito fw-bold fs_3xl clr_black letter_sp_point05 pt-4 pb-1">
                        SEO
                      </p>
                      <p className=" ff_lora fw-normal fs_xl clr_black pt-2">
                        Loren rasion gravida auem is bibenua tase
                      </p>
                    </div>
                  </Col>
                </Row>
                <div className="trans_translate_x_50 px- 3 p-lg-5 pt-lg-0 pt-xl-5 position-relative animation3">
                  <img
                    src={yellowcrcle}
                    alt="yellowcrcle"
                    className=" position-absolute yelow_crcle_poS2 d-none d-lg-block"
                  />
                  <div className="text-center p-5 bg_white border_yellow_1px box_shaodw_sec4_card br_30 mt-5 mt-lg-0">
                    <img src={digitalmar} alt="digitalmar" className="pb-2" />
                    <p className=" ff_nunito fw-bold fs_3xl clr_black letter_sp_point05 pt-4 pb-1">
                      Digital Partner
                    </p>
                    <p className=" ff_lora fw-normal fs_xl clr_black pt-2">
                      Loren rasion gravida auem is bibenua tase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xl={4}
            className="mt-5 mt-xl-0 text-center text-xl-start"
            data-aos="fade-left"
          >
            <div className=" position-relative">
              <p className=" ff_nunito fw_900 fs_4xl clr_black letter_sp_point02">
                Perfect Solution for Your{" "}
                <span className="client_underline "> Bussiness</span>
              </p>
              <p className=" ff_lora fw-normal fs_xl clr_black letter_sp_point02">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <button className="box_shadow_nav_btn ff_nunito fw-bold fs_xl clr_white letter_sp_point05 br_5 bg_yellow border-0 p_12_30 mt-4">
                Read More
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SolutionSec;
