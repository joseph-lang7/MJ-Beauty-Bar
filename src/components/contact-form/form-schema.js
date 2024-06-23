import * as yup from "yup";

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const formSchema = yup.object({
  fullName: yup.string().max(50).required("Full name is required."),
  email: yup
    .string()
    .required("Email is required.")
    .matches(emailRegExp, "Please enter a valid email address.")
    .max(50, "Full name name cannot exceed 50 characters."),
  phone: yup
    .string()
    .required("Phone is required.")
    .max(12, "Phone number cannot exceed 12 digits.")
    .min(8, "Phone number must be at least 8 digits.")
    .matches(phoneRegExp, "Please enter valid phone number i.e 707-123-4567"),

  message: yup
    .string()
    .required("Message is required.")
    .max(1000, "Message can't exceed 1000 characters."),
});
