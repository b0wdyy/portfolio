import nodemailer from "nodemailer";
require("dotenv").config();

export default async (req, res) => {
  const { name, email } = await req.body;

  const transporterOptions = {
    service: "gmail",
    auth: {
      user:
        process.env.NODE_ENV === "production"
          ? process.env.NODEMAILER_MAIL
          : "",
      pass:
        process.env.NODE_ENV === "production"
          ? process.env.NODEMAILER_PASS
          : "",
    },
  };

  const transporter = nodemailer.createTransport(transporterOptions);

  const mailOptions = {
    from: email,
    to: "vandaelbodhi@hotmail.com, bowdyvandael@gmail.com",
    subject: "New email from bowdy.be",
    text: `Hey Bodhi, je hebt een nieuwe interactie op je site. ${name} met email ${email} heeft laten weten dat hij/zij contact met je wilt opnemen! Vergeet niet terug te sturen makker.`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.statusCode = 400;
      res.json({
        err:
          "There has been an error. Please try again or contact me: bowdyvandael@gmail.com",
      });
    } else {
      res.statusCode = 200;
      res.json({ msg: "Bodhi is notified and will contact you!" });
    }
  });
};
