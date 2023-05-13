import React, { useState } from "react";
import arrowimg from "../assets/images/png/toptobtm.png";
const TopToBottom = () => {
  const [first, setfirst] = useState(true);
  const clikontop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 550) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section className=" position-fixed toptobtm_animation arrow_pos cursor_pointer">
      <img
        src={arrowimg}
        alt="arrowimg"
        onClick={() => clikontop()}
        className={first ? "d-none" : "d-block"}
      />
    </section>
  );
};

export default TopToBottom;
