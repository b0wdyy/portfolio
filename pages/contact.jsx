const { default: ContactForm } = require("../components/Contact/ContactForm");
const { default: MianContact } = require("../components/Contact/MianContact");

const contact = () => {
  return (
    <>
      <MianContact />
      <ContactForm />
    </>
  );
};

export default contact;
