import * as yup from "yup";
export const formSchema = yup.object({
  fullName: yup.string().max(50).required("Full name is required."),
  email: yup.string().email().max(50).required("Email is required."),
  phone: yup.string().max(10).required("Phone is required."),
  message: yup.string().max(1000).required("Message is required."),
});
