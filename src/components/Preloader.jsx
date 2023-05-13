import React from "react";
import { Container } from "react-bootstrap";
import mainlogo from "../assets/images/png/preloader.gif";
const Preloader = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.querySelector(".none").style.display = "none";
    document.body.classList.remove("overflow_hidden");
  }, 2000);
  return (
    <section>
      <div className="none">
        <div className="text-center d-flex align-items-center justify-content-center start-0 top-0 bg-white w-100 z_index_1000 min-vh-100   position-fixed ">
          <img
            src={mainlogo}
            alt="mainlogo"
            className="d-flex align-items-center justify-content-center "
          />
        </div>
      </div>
    </section>
  );
};

export default Preloader;
