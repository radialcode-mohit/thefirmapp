import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets//images/svg/logo.svg";
import cross from "../assets/images/png/close.png";
const MyNav = () => {
  const [first, setFirst] = useState(true);

  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }

  return (
    <nav className="pt-4 pb-3 " data-aos="fade-down">
      <Container className="container_max_1280">
        <div className="d-flex align-items-center justify-content-between">
          <a href="#">
            <img src={logo} alt="logo" className="w_xsm_80per" />
          </a>
          <a
            href="#"
            className="nav_icon_container"
            onClick={() => {
              setFirst(false);
            }}
          >
            <span className="navicon"></span>
            <span className="navicon mt-2"></span>
            <span className="navicon mt-2"></span>
          </a>
          <ul
            className={
              first
                ? "left_100 mobile_ul_max ps-0 mb-0 d-flex align-items-center flex-column flex-lg-row align-items-center justify-content-center"
                : "left_0 mobile_ul_max ps-0 mb-0 d-flex align-items-center flex-column flex-lg-row align-items-center justify-content-center"
            }
          >
            <li
              className="mt-5 mt-lg-0 me-lg-4 me-xl-5 "
              onClick={() => {
                setFirst(true);
              }}
            >
              <a
                href="#"
                className="ff_nunito position-relative  hover_underline fw-bold clr_black letter_sp_point05 "
              >
                Home
              </a>
            </li>
            <li
              className="me-lg-4 mt-5 mt-lg-0  me-xl-5 "
              onClick={() => {
                setFirst(true);
              }}
            >
              <a
                href="#"
                className="ff_nunito position-relative  hover_underline fw-bold clr_black letter_sp_point05 "
              >
                Solutions
              </a>
            </li>
            <li
              className="me-lg-4 mt-5 mt-lg-0  me-xl-5 "
              onClick={() => {
                setFirst(true);
              }}
            >
              <a
                href="#"
                className="ff_nunito position-relative  hover_underline fw-bold clr_black letter_sp_point05 "
              >
                Cases
              </a>
            </li>
            <li
              className="me-lg-4 mt-5 mt-lg-0  me-xl-5 "
              onClick={() => {
                setFirst(true);
              }}
            >
              <a
                href="#"
                className="ff_nunito position-relative  hover_underline fw-bold clr_black letter_sp_point05 "
              >
                About Us
              </a>
            </li>
            <li
              className="me-lg-4 mt-5 mt-lg-0  me-xl-5 "
              onClick={() => {
                setFirst(true);
              }}
            >
              <a
                href="#"
                className="ff_nunito position-relative  hover_underline fw-bold clr_black letter_sp_point05 "
              >
                Blog
              </a>
            </li>
            <li
              className="me-lg-4 mt-5 mt-lg-0  me-xl-5 "
              onClick={() => {
                setFirst(true);
              }}
            >
              <a
                href="#"
                className="ff_nunito position-relative  hover_underline fw-bold clr_black letter_sp_point05 "
              >
                Contact Us
              </a>
            </li>
            <li
              className=" mt-5 mt-lg-0 bg_yellow br_5 box_shadow_nav_btn transition p10_22 cursor_poi"
              onClick={() => {
                setFirst(true);
              }}
            >
              <a
                href="#"
                className=" ff_nunito fw-bold clr_white letter_sp_point05 "
              >
                Get in Touch
              </a>
            </li>
            <img
              src={cross}
              alt="cross"
              onClick={() => {
                setFirst(true);
              }}
              className=" position-absolute cross_pos d-lg-none"
            />
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
