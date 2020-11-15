const { default: MainAbout } = require("../components/About/MainAbout");
const { default: Projects } = require("../components/About/Projects");
const { default: Quotes } = require("../components/About/Quotes");

const about = () => {
  return (
    <div className="about-circles">
      <MainAbout />
      <Quotes />
      <Projects />
    </div>
  );
};

export default about;
