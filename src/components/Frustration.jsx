import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import questionmainimg from "../assets/images/png/frustrationimg.png";
const Frustration = () => {
  return (
    <section className="bg_lightwhite py-5">
      <Container className="py-lg-5">
        <Row className=" flex-column-reverse flex-lg-row align-items-center">
          <Col lg={6} className="pt-5  pt-lg-0" data-aos="fade-up-right">
            <div>
              <p className=" ff_nunito fw_900 fs_4xl clr_black letter_sp_point02 ">
                Frustration of{" "}
                <span className=" position-relative client_underline">
                  Clients
                </span>
              </p>
              <p className=" ff_lora fw-normal fs_xl clr_black letter_sp_point02 pt-2 pe-xl-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="ps-xxl-5 ps-3 pt-xxl-4">
                <p className="question_mark  fs_xl ps-2 ff_lora fw-normal fs-xl clr_black letter_sp_point02">
                  Loren rasion gravida auem is bibenua tase
                </p>
                <p className="question_mark fs_xl ps-2  ff_lora fw-normal fs-xl clr_black letter_sp_point02">
                  Lorem Ipsum is simply dummy text of the.
                </p>
                <p className="question_mark fs_xl ps-2  ff_lora fw-normal fs-xl clr_black letter_sp_point02">
                  Printing and typesetting industry. Lorem Ipsum
                </p>
                <p className="question_mark fs_xl ps-2  ff_lora fw-normal fs-xl clr_black letter_sp_point02 mb-0 pe-5">
                  When an unknown printer took a galley of type and scrambled it
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-up-left">
            <img
              src={questionmainimg}
              alt="questionmainimg"
              className="w-100 max_ w_580"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Frustration;
