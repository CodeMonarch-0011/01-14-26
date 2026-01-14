import "../../styles/home.css";
import image from "/images/kaley-cuoco-4.webp";

export function Rise() {
  return (
    <section className="rise">
      <span className="rise-hdr">Rise in Television & Film</span>
      <div className="rise-main">
        <div className="rise-txt">
          Kaley Cuoco’s rise unfolded steadily, built on consistency rather than
          spectacle. She became a familiar presence in homes around the world
          through television, where her ability to balance comedy,
          vulnerability, and timing made her unforgettable.
          <div>
            <span>Her breakthrough roles resonated because they offered:</span>

            <ul>
              <li>Relatable humor without caricature</li>
              <li>Emotional accessibility</li>
              <li>Strong chemistry with ensemble casts</li>
              <li>A grounded presence within heightened storytelling</li>
            </ul>
          </div>
        </div>

        <div className="rise-main-img">
          <img src={image} />
        </div>
      </div>

      <div className="rise-main-extra">
        As her visibility grew, so did her range. Kaley avoided being defined by
        a single tone or genre, choosing instead to expand her craft—moving
        fluidly between comedy, drama, voice work, and later, production. <br />{" "}
        <br />
        She didn’t outgrow her early success. <br />
        She built on it.
      </div>
    </section>
  );
}
