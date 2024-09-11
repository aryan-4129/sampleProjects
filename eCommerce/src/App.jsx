import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Items from "./components/Items";

const App = () => {
  const [category, setcategory] = useState("");
  return (
    <>
      <Navbar category={category} setcategory={setcategory} />
      <Items category={category} />
    </>
  );
};

export default App;
