import * as Yup from "yup";

export const setLocalStorage = (time) => {
  const now = new Date();

  const item = {
    value: true,
    expiry: now.getTime() + time,
  };
  localStorage.setItem("seenIntro", JSON.stringify(item));
};

export const getLocalStorage = () => {
  const item = localStorage.getItem("seenIntro");

  if (!item) {
    return null;
  }

  const now = new Date();
  const itemParsed = JSON.parse(item);

  if (now.getTime() > item.expiry) {
    localStorage.removeItem("seenIntro");
    return null;
  }

  return itemParsed.value;
};

export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "That's a short name?")
    .max(40, "Goddaaaaaamn, that's long!")
    .required("Please fill it in, I would like to know who you are 😊"),
  email: Yup.string()
    .email("Invalid email...")
    .required("Please fill this in."),
});
