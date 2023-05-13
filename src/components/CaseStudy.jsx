import { Col, Container, Row } from "react-bootstrap";
import sliderimg1 from "../assets/images/png/researchsliderimg.png";
import React, { Component } from "react";
import Slider from "react-slick";
import rightvecttor from "../assets/images/png/rightvector.svg";
import leftvecttor from "../assets/images/png/leftvector.svg";
export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplayspeed: 1000,
    };
    return (
      <section className="py-lg-5">
        <Container className="py-5">
          <div className="max_w_870 mx-auto text-center">
            <p
              className=" ff_nunito fw_900 fs_4xl clr_black letter_sp_point02"
              data-aos="fade-down"
            >
              Our Research & Case{" "}
              <span className=" client_underline">Studies</span>
            </p>
            <p
              className=" ff_lora fw-normal fs_xl clr_black letter_sp_point02 pt-4"
              data-aos="fade-up"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
          <Row className=" justify-content-between py-md-5 align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6} className="mt-5 mt-lg-0" data-aos="flip-up">
              <div>
                <p className=" ff_nunito fw-bold fs_3xl clr_black letter_sp_point05">
                  Lorem Ipsum is simply
                </p>
                <p className=" ff_lora fw-normal clr_black letter_sp_point02 fs_xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took.
                </p>
                <div className=" py-sm-4 pt-3 ">
                  <button className="box_shadow_nav_btn ff_nunito fw-bold fs_xl clr_white letter_sp_point05 br_5 bg_yellow border-0 p_12_30 bg_black_on_hover transition">
                    View More
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={5} data-aos="flip-down">
              <div className=" position-relative">
                <div className="crcle_yellow_slider_sec position-absolute crcle_pos_slider_sec"></div>
                <Slider
                  ref={(c) => (this.slider = c)}
                  {...settings}
                  className="reserch"
                >
                  <div key={1} className="me-5">
                    <div className="br_2 5">
                      <img
                        src={sliderimg1}
                        style={{ width: "100%" }}
                        alt=" sliderimg1 br_2 5 w_100_per"
                      />
                    </div>
                  </div>
                  <div key={2} className="me-5">
                    <div className="br_2 5">
                      <img
                        src={sliderimg1}
                        style={{ width: "100%" }}
                        alt=" sliderimg1 br_2 5 w_100_per"
                      />
                    </div>
                  </div>
                  <div key={3} className="me-5">
                    <div className="br_2 5">
                      <img
                        src={sliderimg1}
                        style={{ width: "100%" }}
                        alt=" sliderimg1 br_2 5 w_100_per"
                      />
                    </div>
                  </div>
                  <div key={4} className="me-5">
                    <div className="br_2 5">
                      <img
                        src={sliderimg1}
                        style={{ width: "100%" }}
                        alt=" sliderimg1 br_2 5 w_100_per"
                      />
                    </div>
                  </div>
                  <div key={5} className="me-5">
                    <div className="br_2 5">
                      <img
                        src={sliderimg1}
                        style={{ width: "100%" }}
                        alt=" sliderimg1 br_2 5 w_100_per"
                      />
                    </div>
                  </div>
                  <div key={6} className="me-5">
                    <div className="br_2 5">
                      <img
                        src={sliderimg1}
                        style={{ width: "100%" }}
                        alt=" sliderimg1 br_2 5 w_100_per"
                      />
                    </div>
                  </div>
                </Slider>
                <div
                  style={{ textAlign: "center" }}
                  className=" position-absolute pos_arrows"
                >
                  <div className="reserch_rght_arrow_white ">
                    <div className="d-flex align-items-center pt_2pxpt_2px">
                      <div
                        className="reserch_rght_arrow_lightyellow   cursor_pointer"
                        onClick={this.previous}
                      >
                        <button className="border-0 bg-transparent  pt-1">
                          <img src={leftvecttor} alt="leftvecttor" />
                        </button>
                      </div>
                      <div
                        className=" reserch_rght_arrow_darkyellow  cursor_pointer"
                        onClick={this.next}
                      >
                        <button className=" border-0 bg-transparent pt-1">
                          <img src={rightvecttor} alt="rightvecttor" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
