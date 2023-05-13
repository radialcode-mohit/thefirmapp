import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../assets/images/png/blog1.svg";
import blog2 from "../assets/images/png/blog2.svg";
import blog3 from "../assets/images/png/blog3.svg";
import alex1 from "../assets/images/png/alex1.svg";
import alex2 from "../assets/images/png/alex2.svg";
import alex3 from "../assets/images/png/alex3.svg";
import watch from "../assets/images/png/watch.svg";
const OurBlogs = () => {
  return (
    <section className="bg_darkgrey  py-5">
      <p className=" ff_nunito fw_900 fs_4xl clr_black text-center mb-0 ">
        Our <span className="client_underline"> Blogs</span>
      </p>
      <Container>
        <Row className=" justify-content-between py-4 py-md-5">
          <Col
            lg={4}
            data-aos="zoom-in"
            sm={6}
            className="mt-4 mt-sm-0 trans_translate_on_hover transition"
          >
            <div className="px-md-4">
              <div className="bg_white border_yellow_box_shadow transition br_15 p-2 ">
                <img src={blog1} alt="blog1" className="w-100 br_15" />
                <p className=" ff_nunito fw-bold fs_2xl clr_black ps-2 pt-4">
                  Lorem Ipsum is{" "}
                </p>
                <p className=" ff_lora ff-normal fs_lg clr_black border_1px_fdfdfd pb-4 ps-2">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
                <div className="d-flex justify-content-between align-items-center px-lg-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={alex1} alt="alex1" />
                    <span className=" ff_nunito fw-normal fs_md clr_black  ms-1 ps-1">
                      Alex Liones
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <img src={watch} alt="watch" />
                    <p className=" ff_nunito fw-normal mb-0 fs_xsm clr_lightestgrey ms-1 ">
                      28,Aug 2020, 09:48:00
                    </p>
                  </div>
                </div>
                <div className="text-center py-4">
                  <button className="box_shadow_nav_btn ff_nunito fw-bold fs_xl clr_white letter_sp_point05 br_5 bg_black border-0 p_12_30 ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            data-aos="zoom-in-up"
            sm={6}
            className="mt-4 mt-sm-0 trans_translate_on_hover transition"
          >
            <div className="px-md-4">
              <div className="bg_white border_yellow_box_shadow transition br_15 p-2 ">
                <img src={blog1} alt="blog1" className="w-100 br_15" />
                <p className=" ff_nunito fw-bold fs_2xl clr_black ps-2 pt-4">
                  Lorem Ipsum is{" "}
                </p>
                <p className=" ff_lora ff-normal fs_lg clr_black border_1px_fdfdfd pb-4 ps-2">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
                <div className="d-flex justify-content-between align-items-center px-lg-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={alex1} alt="alex1" />
                    <span className=" ff_nunito fw-normal fs_md clr_black  ms-1 ps-1">
                      Alex Liones
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <img src={watch} alt="watch" />
                    <p className=" ff_nunito fw-normal mb-0 fs_xsm clr_lightestgrey ms-1 ">
                      28,Aug 2020, 09:48:00
                    </p>
                  </div>
                </div>
                <div className="text-center py-4">
                  <button className="box_shadow_nav_btn ff_nunito fw-bold fs_xl clr_white letter_sp_point05 br_5 bg_black border-0 p_12_30 ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            data-aos="zoom-in-down"
            sm={6}
            className="mt-4 mt-md-5 mt-lg-0 trans_translate_on_hover transition"
          >
            <div className="px-md-4">
              <div className="bg_white border_yellow_box_shadow transition br_15 p-2 ">
                <img src={blog1} alt="blog1" className="w-100 br_15" />
                <p className=" ff_nunito fw-bold fs_2xl clr_black ps-2 pt-4">
                  Lorem Ipsum is{" "}
                </p>
                <p className=" ff_lora ff-normal fs_lg clr_black border_1px_fdfdfd pb-4 ps-2">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
                <div className="d-flex justify-content-between align-items-center px-lg-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={alex1} alt="alex1" />
                    <span className=" ff_nunito fw-normal fs_md clr_black  ms-1 ps-1">
                      Alex Liones
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <img src={watch} alt="watch" />
                    <p className=" ff_nunito fw-normal mb-0 fs_xsm clr_lightestgrey ms-1 ">
                      28,Aug 2020, 09:48:00
                    </p>
                  </div>
                </div>
                <div className="text-center py-4">
                  <button className="box_shadow_nav_btn ff_nunito fw-bold fs_xl clr_white letter_sp_point05 br_5 bg_black border-0 p_12_30 ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center pb-5 ">
          {" "}
          <button className="box_shadow_nav_btn ff_nunito fw-bold fs_xl clr_white letter_sp_point05 br_5 bg_yellow border-0 p_12_30 bg_black_on_hover transition">
            View More
          </button>
        </div>
      </Container>
    </section>
  );
};

export default OurBlogs;
