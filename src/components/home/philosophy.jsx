import "../../styles/home.css";
import image from "/images/kaley-cuoco-.webp";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <span className="philosophy-hdr">Philosophy</span>

      <div className="philosophy-main">
        <div className="philosophy-list">
          <span>
            <em>“Earn your strength. Protect your peace.”</em>
          </span>

          <div>
            <span>
              Kaley Cuoco’s philosophy is reflected in the way she works:
            </span>
            <ul>
              <li>Stay prepared</li>
              <li>Respect the process</li>
              <li>Don’t underestimate consistency</li>
              <li>Let growth happen naturally</li>
              <li>Protect joy in the work</li>
            </ul>
          </div>

          <span>
            She believes longevity is built through: <br />
            Showing up. <br />
            Staying curious. <br />
            And never assuming you’ve arrived.
          </span>
        </div>
        <div className="philosophy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
