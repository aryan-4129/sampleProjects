import { createContext } from "react";

const FormItems = createContext({
  currPage: 1,
  formData: {},
  usersData: [],
  incrementFormPage: () => {},
  decrementFormPage: () => {},
  setFormData: () => {},
  addUsersData: () => {},
});

export default FormItems;
