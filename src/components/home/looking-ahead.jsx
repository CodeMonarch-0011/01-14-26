import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">Looking Ahead</span>

      <span>
        Kaley Cuoco’s future continues with intention and creative control.
      </span>

      <div>
        <span>What lies ahead includes:</span>
        <ul>
          <li>Expanded production work</li>
          <li>Continued exploration of complex characters</li>
          <li>Genre-defying projects</li>
          <li>Long-term influence behind the camera</li>
          <li>Creative leadership rooted in experience</li>
        </ul>

        <span>
          She isn’t focused on reinvention for its own sake. <br /> <br />
          She’s focused on growth— and letting the work evolve naturally.
        </span>
      </div>

      <div className="looking-ahead-txt">
        Kaley Cuoco’s story is not about staying relevant. <br />
        It’s about staying present.
      </div>
      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
