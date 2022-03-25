import { Next } from "react-bootstrap/esm/PageItem";

export const PersonalInfoValidation = (
  formErrors,
  setFormErrors,
  fullnames,
  phoneNumber,
  email,
  password,
  confirmPassword,
  profilePic,
  next
) => {
  return () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      fullnames === null &&
      phoneNumber === null &&
      email === null &&
      password === null &&
      confirmPassword === null &&
      profilePic === null
    ) {
      setFormErrors({ ...formErrors, error: "Please fill all the fields" });
    } else if (fullnames === null) {
      setFormErrors({ ...formErrors, fullnames: "Please fill this field" });
    } else if (phoneNumber === null) {
      setFormErrors({ ...formErrors, phoneNumber: "Please fill this field" });
    } else if (email === null) {
      setFormErrors({ ...formErrors, email: "Please fill this field" });
    } else if (emailRegex.test(email) === false) {
      setFormErrors({ ...formErrors, email: "Email must be valid" });
    } else if (password === null) {
      setFormErrors({ ...formErrors, password: "Please fill this field" });
    } else if (confirmPassword === null) {
      setFormErrors({
        ...formErrors,
        confirmPassword: "Please fill this field",
      });
    } else if (password !== confirmPassword) {
      setFormErrors({
        ...formErrors,
        error: "Password and confirm password must be equal",
      });
    } else if (profilePic === null) {
      setFormErrors({ ...formErrors, avatar: "Please fill this field" });
    } else {
      next();
    }
  };
};
export const AddressInfoValidation = (Errors, setErrors) => {};
