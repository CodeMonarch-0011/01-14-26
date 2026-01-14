import "../../styles/home.css";
import image from "/images/kaley-cuoco-3.webp";

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <span className="legacy-hdr">Cultural Impact & Legacy</span>

      <div className="legacy-main">
        <div className="legacy-main-txt">
          <span></span>

          <div>
            <span>
              Kaley Cuoco’s impact extends beyond individual roles. She
              represents:
            </span>

            <ul>
              <li>Longevity in a fast-moving industry</li>
              <li>The evolution of women-led storytelling</li>
              <li>Comedy grounded in intelligence, not excess</li>
              <li>Career growth without erasing the past</li>
            </ul>
          </div>

          <span>
            She has helped redefine what it means to transition—from child
            performer to adult artist, from actor to producer—without losing
            authenticity. <br /> <br />
            Her legacy is not loud. <br />
            It’s lasting.
          </span>
        </div>

        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
