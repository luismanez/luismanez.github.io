import "./Contact.css";
import Logo from "../Presentation/Logo";

const Contact = () => {
  return (
    <footer className="contact_section" id="contact">
      <div className="container">
        <div className="contact_container">    
            <div>Contact me at...</div>
          <div className="contact_social">
            <a
              className="social-links"
              href="https://github.com/luismanez"
              title="GitHub"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-links"
              href="https://twitter.com/luismanez"
              title="Twitter"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-links"
              href="https://www.linkedin.com/in/luismanez/?locale=en_US"
              title="LinkedIn"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div>Copyright © 2022 - LUIS MAÑEZ</div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
