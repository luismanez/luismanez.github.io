import ChiefArchitect from "./ChiefArchitect";
import ChiefTecnologyOfficer from "./ChiefTecnologyOfficer";
import "./Experience.css";
import SharePointDeveloper from "./SharePointDeveloper";
import SoftwareArchitect from "./SoftwareArchitect";
import SoftwareEngineer from "./SoftwareEngineer";
import TechnicalLead from "./TechnicalLead";

const Experience = ({}) => {
  return (
    <section className="experience_section" id="experience">
      <div className="container">        
        <SoftwareEngineer />
        <TechnicalLead />
        <SoftwareArchitect />
        <ChiefTecnologyOfficer />
        <SharePointDeveloper />
        <ChiefArchitect />
      </div>
    </section>
  );
};

export default Experience;
