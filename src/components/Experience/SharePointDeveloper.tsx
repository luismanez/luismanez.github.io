const SharePointDeveloper = ({}) => {
  return (
    <div className="container_experience spdev_border">
      <div className="experience_item">
        <div className="experience_item_period">2012 - 2015 (Content and Code, UK)</div>
        <div className="experience_item_heading spdev">SharePoint Developer</div>
        <div className="experience_item_content">
          <p>
            During my time in Content and Code, I worked mainly as a SharePoint
            and Azure developer, building custom solutions for SharePoint Online
            (I also did some stuff for On Premises, but we moved fast to Online
            projects). The good part of working with SP Online, is that it also
            means a lot of stuff in Azure, so I coded quite a few .NET code,
            mainly for custom APIs that called SP API and extended it, and a
            bunch of webjobs that integrated data from non-MS systems (SAP,
            SalesForce) into SharePoint and custom Azure web apps. SP Online
            also gave me the opportunity to start coding front-end stuff, so I
            learn a bunch of JavaScript and KnockoutJS.
          </p>
          <p>
            I also did Technical lead tasks, helping other developers in the
            Team, and some Pre-sales work, helping the sales team with technical
            estimates, and explaining technical designs to clients.
          </p>
          <p>
            During this time, I started to collaborate heavily in the MS
            community, being a usual Key contributor in the OfficeDev PnP
            Program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SharePointDeveloper;
