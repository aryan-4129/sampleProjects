import React, { useState } from "react";
import Form1 from "./components/form1";
import Form2 from "./components/form2";
import Form3 from "./components/form3";
import FormItems from "./store/FormItems-store";
import "./App.css";
import FormResults from "./components/FormResults";

const App = () => {
  const [currPage, setcurrPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [usersData, setusersData] = useState([]);

  const incrementFormPage = () => {
    const newPage = currPage + 1;
    setcurrPage(newPage);
    console.log("in increment function", currPage);
  };

  const decrementFormPage = () => {
    const newPage = currPage - 1;
    setcurrPage(newPage);
    console.log("in decrement fincu", currPage.page);
  };

  const addUsersData = () => {
    const newUsersData = [...usersData, formData];
    setusersData(newUsersData);
    console.log(formData);
    console.log(usersData);
    setcurrPage(1);
    setFormData("");
  };

  return (
    <FormItems.Provider
      value={{
        currPage,
        formData,
        usersData,
        incrementFormPage,
        decrementFormPage,
        setFormData,
        addUsersData,
      }}
    >
      <center>
        <h1 className="heading">Multi Page Form</h1>
        <span className="span">
          {currPage !== 3 ? `Step : ${currPage}` : "Final Step"}
        </span>
        {currPage === 1 && <Form1 />}
        {currPage === 2 && <Form2 />}
        {currPage === 3 && <Form3 />}
        {usersData.length !== 0 && <FormResults />}
      </center>
    </FormItems.Provider>
  );
};

export default App;
