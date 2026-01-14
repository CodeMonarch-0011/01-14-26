import "../../styles/home.css";
import image from "/images/kaley-cuoco-2.webp";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-text">
        <span>Welcome to the World of Kaley Cuoco</span>
        <span>
          Kaley Cuoco is an actress, producer, and modern creative force whose
          career reflects longevity, reinvention, and quiet determination. Known
          globally yet grounded in discipline, Kaley represents a rare balance
          in entertainment: mainstream success paired with personal
          authenticity. <br /> <br />
          Her presence is effortless but earned. <br />
          Playful yet purposeful. <br />
          Familiar, but constantly evolving. <br /> <br />
          Kaley Cuoco exists at the intersection of talent and tenacity—where
          craft meets instinct, and longevity is built through work, not noise.{" "}
          <br /> <br />
          She doesn’t just play characters. <br />
          She commits to them. <br />
        </span>

        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>

      <div className="banner-img">
        <img src={image} />
      </div>
    </section>
  );
}
