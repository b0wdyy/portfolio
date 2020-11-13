import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "That's a short name?")
    .max(40, "Goddaaaaaamn, that's long!")
    .required("Please fill it in, I would like to know who you are 😊"),
  email: Yup.string()
    .email("Invalid email...")
    .required("Please fill this in."),
});

const MianContact = () => {
  const sendEmail = async (values) => {
    const good = await SignUpSchema.validate(values);

    console.log(good);
  };

  return (
    <main>
      <h1>You want to contact me? 🥺</h1>

      <p>
        Yes finally someone that wants to contact me! ... Uhm I mean, let's get
        in touch and talk about what dream you have 💭!
      </p>

      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          sendEmail(values);
        }}
      >
        <Form>
          <Field name="name" id="name" />
          <ErrorMessage name="name" />

          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </main>
  );
};

export default MianContact;
