const { default: MainAbout } = require("../components/About/MainAbout");
const { default: Projects } = require("../components/About/Projects");
const { default: Quotes } = require("../components/About/Quotes");

const about = () => {
  return (
    <>
      <MainAbout />
      <Quotes />
      <Projects />
    </>
  );
};

export default about;
