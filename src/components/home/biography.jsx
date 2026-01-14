import "../../styles/home.css";
import image from "/images/kaley-cuoco-1.webp";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">Biography</span>

      <div className="biography-txt">
        <div>
          Kaley Cuoco was born and raised in the United States, growing up in an
          environment that valued dedication, focus, and self-discipline. From
          an early age, she was immersed in structured routines that demanded
          consistency and resilience—traits that would later define her
          professional life.
        </div>

        <div className="biography-txt-img">
          <img src={image} />
        </div>

        <div>
          <span>Her formative years were shaped by:</span>
          <ul>
            <li>Competitive athletics and training</li>
            <li>A strong work ethic developed early</li>
            <li>Creative curiosity and performance instinct</li>
            <li>Discipline learned through repetition and practice</li>
            <li>Comfort with independence at a young age</li>
          </ul>
        </div>
        <div>
          Before acting became her primary focus, Kaley understood something
          essential: progress comes from showing up every day, even when no one
          is watching. <br /> <br />
          That mindset never left her.
        </div>
      </div>
    </section>
  );
}
