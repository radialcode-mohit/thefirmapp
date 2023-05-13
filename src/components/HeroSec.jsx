import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroimg from "../assets/images/png/herosecimg.png";
import crcleimg from "../assets/images/svg/c.svg";
const HeroSec = () => {
  return (
    <section className="bg_hero">
      <Container className="container 2">
        <Row className="flex-column-reverse flex-lg-row py-5 py-xxl-0 ">
          <Col
            lg={6}
            xxl={6}
            className="text-center text-lg-start pt-4 pt-lg-0 py_1920_min"
          >
            <div>
              <div className="pt-xxl-5 d_none_1920"></div>
              <div className="pt-xxl-5 d_none _1920"></div>
              <div className="pt-xxl-5"></div>
              <div className="pt-xxl-5"></div>
              <h1 className=" ff_nunito fw_900  fs_48 letter_sp_point02 d-block clr_black ">
                Get Bussiness{" "}
                <span className=" d-block">
                  Solutions with <span className="fs_5xl"> TheFirm.</span>
                </span>
              </h1>
              <p className="w_430 letter_sp_point02 line_h17 6 ff_lora fw-normal fs_xl clr_black py-3 pt-sm-4 mx_auto_992">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
              <div className=" cursor_poi   mt-sm-5 mt-lg-3 mt-xl-5">
                <span className=" bg_yellow br_5 box_shadow_nav_btn transition p10_22">
                  <a
                    href="#"
                    className=" ff_nunito fw-bold clr_white letter_sp_point05 "
                  >
                    Get in Touch
                  </a>
                </span>
              </div>
              <div className="pb-xxl-5"></div>
              <div className="pb-xxl-5"></div>
              <div className="pb-xxl-5 d_none_1920"></div>
              <div className="pb-xxl-2 d_none_1920"></div>
            </div>
          </Col>
          <Col
            lg={6}
            xxl={7}
            className="position_absolute pe-xl-0 z_index_minus_1 py_1920_min"
          >
            {/* <div className="pt-xxl-5 d_none_1920"></div>
            <div className="pt-xxl-5 d_none_1920"></div>
            <div className="pt-xxl-5"></div>
            <div className="pt-xxl-5"></div> */}
            <div className="">
              <div className="">
                <img
                  src={heroimg}
                  alt="heroimg"
                  className="max_w _841 w-100  rounded-5"
                />
                <img
                  src={crcleimg}
                  className=" position-absolute start-0 top_30 "
                  alt="crcleimg"
                />
              </div>
            </div>
            {/* <div className="pb-xxl-5"></div>
            <div className="pb-xxl-5"></div>
            <div className="pb-xxl-5 d_none_1920"></div>
            <div className="pb-xxl-5 d_none_1920"></div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSec;
