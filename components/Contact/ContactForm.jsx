import React, { useRef, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Axios from "axios";

import Loader from "../../components/Loader";
import { SignUpSchema } from "../../utils/utils";
import Image from "next/image";

const ContactForm = () => {
  const BASE_URL = "/api/form";
  const formValues = { name: "", email: "" };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [button, setButton] = useState("Submit ☕️");
  const [open, setOpen] = useState(false);

  const linkedin = useRef();
  const instagram = useRef();

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

  const menuOpen = () => {
    if (!open) {
      linkedin.current.classList.add("open");
      instagram.current.classList.add("open");
    } else {
      linkedin.current.classList.remove("open");
      instagram.current.classList.remove("open");
    }

    setOpen(!open);
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

          <div className="social-wrapper">
            <div onClick={menuOpen}>
              <Image
                src="/svg/profile.svg"
                width={30}
                height={30}
                unoptimized={true}
              />
            </div>
            <div ref={linkedin}>
              <a href="https://www.linkedin.com/in/bodhi-vandael/">
                <Image
                  src="/svg/linkedin.svg"
                  width={30}
                  height={30}
                  unoptimized={true}
                />
              </a>
            </div>
            <div ref={instagram}>
              <a href="https://www.instagram.com/bowdsterr/">
                <Image
                  src="/svg/instagram.svg"
                  width={30}
                  height={30}
                  unoptimized={true}
                />
              </a>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
