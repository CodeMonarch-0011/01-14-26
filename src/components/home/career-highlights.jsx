import "../../styles/home.css";
import { Data } from "../../static-contents/career-highlights";

// eslint-disable-next-line react/prop-types
function FilmWorkListCard({ hdr, cnt, list }) {
  function handleList() {
    if (!list && Array.isArray(list)) {
      return <></>;
    }

    return (
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          list.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
      </ul>
    );
  }

  return (
    <div className="film-work-list-card">
      <div className="film-work-list-card-hdr">
        <div className="pointer" aria-hidden />
        <span>{hdr}</span>
      </div>

      <div className="film-work-list-card-txt">
        <span>{cnt}</span>
        {handleList()}
      </div>
    </div>
  );
}

export function FilmWork() {
  return (
    <section className="film-work" id="film-work">
      <span className="film-work-hdr">Career Highlights & Contributions</span>

      <div className="film-work-cnt">
        <div className="film-work-cnt-main">
          <div className="film-work-list">
            {Data.map((dt, i) => (
              <FilmWorkListCard
                key={i}
                hdr={dt.hdr}
                cnt={dt.content}
                list={dt.list}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
