import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";
import VisibilitySensor from "react-visibility-sensor";

const Skills = ({}) => {
  return (
    <section className="skills_section" id="skills">
      <div className="container">
        <div className="skills_section_grid">
          <VisibilitySensor>
            {({ isVisible }: { isVisible: boolean }) => {
              const percentage = isVisible ? 98 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text="Microsoft 365"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: "10px",
                    pathColor: 'rgb(0, 207, 230)'
                  })}
                />
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }: { isVisible: boolean }) => {
              const percentage = isVisible ? 90 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text="Azure"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: "10px",
                    pathColor: 'rgb(0, 207, 230)'
                  })}
                />
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }: { isVisible: boolean }) => {
              const percentage = isVisible ? 95 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text="SW Architecture"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: "10px",
                    pathColor: 'rgb(0, 207, 230)'
                  })}
                />
              );
            }}
          </VisibilitySensor>          

          <VisibilitySensor>
            {({ isVisible }: { isVisible: boolean }) => {
              const percentage = isVisible ? 92 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text=".NET 6"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: "10px",
                    pathColor: 'rgb(0, 207, 230)'
                  })}
                />
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }: { isVisible: boolean }) => {
              const percentage = isVisible ? 85 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text="TypeScript"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: "10px",
                    pathColor: 'rgb(0, 207, 230)'
                  })}
                />
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }: { isVisible: boolean }) => {
              const percentage = isVisible ? 82 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text="HTML / CSS"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: "10px",
                    pathColor: 'rgb(0, 207, 230)'
                  })}
                />
              );
            }}
          </VisibilitySensor>          
        </div>
      </div>
    </section>
  );
};

export default Skills;
