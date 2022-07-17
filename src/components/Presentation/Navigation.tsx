import Logo from "./Logo";
import "./Presentation.css";

const Navigation = ({}) => {
  return (
    <div className="container">
      <nav className="nav_checkbox">
        <Logo />
        <input type="checkbox" id="tab-nav" className="tab-nav" title="nav" placeholder="nav checkbox" />
        <label htmlFor="tab-nav" className="label">
          <i className="fas fa-bars"></i>
        </label>
        <ul className="content_nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="https://mvp.microsoft.com/en-us/PublicProfile/5002617?fullName=Luis%20Ma%C3%B1ez">MVP</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a className="social-links" href="https://github.com/luismanez" title="GitHub" target="_blank"><i className="fab fa-github"></i></a>
            <a className="social-links" href="https://twitter.com/luismanez" title="Twitter" target="_blank"><i className="fab fa-twitter"></i></a>
            <a className="social-links" href="https://www.linkedin.com/in/luismanez/?locale=en_US" title="LinkedIn" target="_blank"><i className="fab fa-linkedin"></i></a>
          </li>
        </ul>        
      </nav>
    </div>
  );
};

export default Navigation;
