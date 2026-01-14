import "../../styles/ui.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Footer() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <span>Kaley Cuoco</span>
          {/* <button onClick={openContactPopup}>Get in Touch</button> */}
        </div>

        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#about">About</a>

          <a href="#early-career">Early Career</a>
          <a href="#rise">Rise</a>
          <a href="#legacy">Legacy</a>

          <a href="#personal-life">Personal Life</a>
        </nav>

        <div className="footer-icons">
          <span
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/gymjymm387?igsh=aWhkejhpZWxyMXI3")
            }
          >
            <FaInstagram />
          </span>

          <span
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/share/1AAG6uNWH8/?mibextid=wwXIfr")
            }
          >
            <FaFacebook />
          </span>
        </div>
      </div>

      <div className="copyrights">Copyright 2025 @ All Rights Reserved</div>
    </section>
  );
}
