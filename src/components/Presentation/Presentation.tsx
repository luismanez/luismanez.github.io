import Navigation from "./Navigation";
import "./Presentation.css";
import me from "../../images/me-rounded.png";
import mvp from "../../images/mvp-logo.png";

const Presentation = ({}) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <section className="content_section">
        <div className="hello">
          <div>
            <img src={me} alt="Luis Mañez - SW Engineer" />
          </div>
          <h1>Luis Mañez</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="mvp-logo">
          <img src={mvp} alt="MS MVP Logo" />
        </div>
      </section>
    </div>
  );
};

export default Presentation;
