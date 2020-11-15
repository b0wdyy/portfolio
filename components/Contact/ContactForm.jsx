import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";

import Loader from "../../components/Loader";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "That's a short name?")
    .max(40, "Goddaaaaaamn, that's long!")
    .required("Please fill it in, I would like to know who you are 😊"),
  email: Yup.string()
    .email("Invalid email...")
    .required("Please fill this in."),
});

const ContactForm = () => {
  const BASE_URL = "/api/form";
  const formValues = { name: "", email: "" };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [button, setButton] = useState("Submit ☕️");

  const sendEmail = async (values) => {
    setLoading(true);
    const good = await SignUpSchema.validate(values);

    if (good) {
      Axios.post(BASE_URL, values)
        .then(() => {
          setLoading(false);
          setError(false);
          setButton("Success 👍");
        })
        .catch((e) => {
          setLoading(false);
          setError(true);
          setButton("Something went wrong ⛔️");

          setTimeout(() => {
            setButton("Submit ☕️");
            setError(false);
          }, 4000);
        });
    }
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        sendEmail(values);
      }}
    >
      <div className="contact-flex">
        <Form className="contact__form">
          <h2>You can leave your details here!</h2>
          <p>
            I'll try to reply as fast as I can, but please don't shoot me if it
            takes a bit longer, thanks!
          </p>
          <div className="contact__form__name">
            <label htmlFor="name" className="test">
              Your name:{" "}
            </label>
            <Field name="name" id="name" />
            <p className="contact__form__error">
              <ErrorMessage name="name" />
            </p>
          </div>

          <div className="contact__form__email">
            <label htmlFor="email">Your email: </label>
            <Field name="email" type="email" id="email" />
            <p className="contact__form__error">
              <ErrorMessage name="email" />
            </p>
          </div>

          <button type="submit" className={error ? "error" : ""}>
            {loading ? <Loader /> : button}
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
