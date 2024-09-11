import React from "react";

const Navbar = ({ category, setcategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Clothig Store
        </a>
      </div>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(evt) => {
          setcategory(evt.target.value);
          console.log(category);
        }}
      >
        <option defaultValue={""}>Choose category to search</option>
        <option value="electronics">Electronics</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
      </select>
    </nav>
  );
};

export default Navbar;
