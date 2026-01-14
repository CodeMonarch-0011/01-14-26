import "../../styles/home.css";
// import { ContactContextFunction } from "../../context/contact.jsx";
// import image from "/images/img-8.webp";

export function PersonalLife() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="personal-life" id="personal-life">
      <span className="personal-life-hdr">Personal Values & Interests</span>
      <div className="personal-life-txt">
        <span>
          Away from the camera, Kaley Cuoco prioritizes grounding influences and
          personal balance. She values routines and interests that keep her
          connected to herself rather than the industry.
        </span>

        <div className="personal-life-text-mid">
          <div className="personal-life-list">
            <span>Her interests include:</span>

            <ul>
              <li>Athletic training and physical discipline</li>
              <li>Animal advocacy and care</li>
              <li>Time spent outdoors</li>
              <li>Creative collaboration without ego</li>
              <li>Personal growth and mental well-being</li>
              <li>Quiet moments away from public attention</li>
            </ul>
          </div>

          {/* <div className="personal-life-img">
            <img src={image} />
          </div> */}
        </div>

        <span>
          She understands the importance of protecting parts of life that fuel
          creativity rather than drain it. <br /> <br />
          Not everything needs to be shared <br />
          to be meaningful.
        </span>

        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>
    </section>
  );
}
