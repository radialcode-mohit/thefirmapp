import React from "react";
import { Col, Row } from "react-bootstrap";
import FooterSec from "./FooterSec";
const GetInTouch = () => {
  return (
    <section className="mt-lg-5 pt-lg-5">
      <div className="map_bg">
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>

        <div
          className="mx_12 max_w_950 mx_auto bg_white br_15 get_in_touch_box_shadow"
          data-aos="fade-up"
        >
          <p className="py-5 ff_nunito fw_900 fs_4xl clr_black text-center  letter_sp_point02 mb-0">
            Get in <span className="client_underline">Touch</span>
          </p>
          <Row className=" align-items-center justify-content-center w-100 mx-auto">
            <Col md={5}>
              <div className="ps-4 ps-md-5 pe-4">
                <span className="d-block ff_nunito fw-normal fs_md clr_lightgrey">
                  Name
                </span>
                <input
                  type="text"
                  className="pt-1 pb-2 ff_nunito fw-bold fs_xl clr_black input_btm_border w-100"
                  placeholder="Lorem Ipusum"
                />
              </div>
            </Col>
            <Col md={5} className="mt-5 mt-md-0">
              <div className="ps-4 ps-md-5 pe-4">
                <span className="d-block ff_nunito fw-normal fs_md clr_lightgrey">
                  Email
                </span>
                <input
                  type="email"
                  className="pt-1 pb-2 ff_nunito fw-bold fs_xl clr_black input_btm_border w-100"
                  placeholder="LoremIpusum@mail.com"
                />
              </div>
            </Col>
            <Col md={5} className="mt-5">
              <div className="ps-4 ps-md-5 pe-4">
                <span className="d-block ff_nunito fw-normal fs_md clr_lightgrey">
                  Phone
                </span>
                <input
                  type="number"
                  className="pt-1 pb-2 ff_nunito fw-bold fs_xl clr_black input_btm_border w-100"
                  placeholder="+0 968 856 1524"
                />
              </div>
            </Col>
            <Col md={5} className="mt-5">
              <div className="ps-4 ps-md-5 pe-4">
                <span className="d-block ff_nunito fw-normal fs_md clr_lightgrey">
                  Subject
                </span>

                <div className="pe-5 input_btm_border">
                  {" "}
                  <select className=" w-100 pt-1 pb-2 cursor_pointer styled-select">
                    <option disabled selected hidden>
                      Choose your subject
                    </option>
                    <option value="">Webflow</option>
                    <option value="">Wordpress</option>
                  </select>
                </div>
              </div>
            </Col>
          </Row>
          <div className=" text-center py-5 my-3">
            <div className="d-inline-block  mt-lg-0 bg_yellow br_5 box_shadow_nav_btn transition p_12_46 cursor_poi">
              <a
                href="#"
                className=" ff_nunito fw-bold clr_white letter_sp_point05 "
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterSec />
    </section>
  );
};

export default GetInTouch;
