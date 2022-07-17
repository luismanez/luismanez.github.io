import speaker from "../../images/me-speaker.png";
import mvplogo from "../../images/mvp-logo-vertical.png";
import "./AboutMe.css";

const AboutMe = ({}) => {
  return (
    <section className="about_section" id="aboutme">
      <div className="container">
        <div className="about_info">
          <div className="about_text">
            <h1>
              Hello, I´m <span>Luis</span>
            </h1>
            <div style={{ display: "flex"}}>
              <img src={mvplogo} alt="MVP Logo vertical" />
              <p>
                M365 Development MVP. More than 20 years of experience working
                with Microsoft Technologies. Nowadays, very focused in Microsoft
                365 and Azure PaaS. Passionate about technology. Speaker,
                blogger, MS community active member. <br />
                <br />I am currently working remotely for ClearPeople (UK) as a
                Chief Architect, building ATLAS, our Digital Workspace and
                Intranet Platform that connects people to what matters at work.
                On my daily basis, you can find me coding (what I love the
                most), designing the architecture for new features for ATLAS, or
                leading our dev team.
              </p>
            </div>
          </div>
          <div className="about_speaker">
            <img src={speaker} alt="Luis Mañez Presenting" />
          </div>
        </div>
      </div>
      <div className="about_stats">
        <div className="container">
          <div className="about_stats_grid">
            <div className="about_stats_grid_years">
              <div className="about_stats_title">20+</div>
              <div className="about_stats_desc">Years of experience</div>
            </div>
            <div className="about_stats_grid_mvp">
              <div className="about_stats_title">6+</div>
              <div className="about_stats_desc">Years as MVP</div>
            </div>
            <div className="about_stats_grid_customers">
              <div className="about_stats_title">99+</div>
              <div className="about_stats_desc">Happy customers</div>
            </div>
            <div className="about_stats_grid_loc">
              <div className="about_stats_title">1M+</div>
              <div className="about_stats_desc">Lines of code <i className="far fa-laugh-beam"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
