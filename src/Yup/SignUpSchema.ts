import * as Yup from "yup";
export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "To short")
    .max(50, "To long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "To short")
    .max(50, "To long")
    .required("Required"),
  email: Yup.string().email("invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Required"),
  role: Yup.string().required("Role is required"),
});