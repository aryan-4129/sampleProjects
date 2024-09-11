import React, { useContext, useRef, useState } from "react";
import css from "./Form.module.css";
import FormItems from "../store/FormItems-store";
import { FaAsterisk } from "react-icons/fa";

const Form1 = () => {
  const { incrementFormPage, setFormData, formData } = useContext(FormItems);

  const firstNameRef = useRef();
  const dobRef = useRef();
  const genderRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();

  const onSubmit = (evt) => {
    if (
      firstNameRef.current.value === "" ||
      dobRef.current.value === "" ||
      genderRef.current.value === "" ||
      contactRef.current.value === ""
    ) {
      return alert("Fill all the star mark details");
    }

    evt.preventDefault();
    console.log(formData);

    incrementFormPage();
  };
  return (
    <>
      <h2 className={css.heading}>Personal Details</h2>
      <form className={`${css.formContainer} row`}>
        {/* first name input */}
        <div className="col-6 mb-3">
          <label htmlFor="firstName" className={css.label}>
            First Name : <FaAsterisk className={css.star} />
          </label>
          <input
            type="text"
            className={css.input}
            id="firstName"
            ref={firstNameRef}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>

        {/* last name input */}
        <div className="col-6 mb-3">
          <label htmlFor="lastName" className={css.label}>
            Last Name :
          </label>
          <input
            type="text"
            className={css.input}
            id="lastName"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>

        {/* dob input */}
        <div className="col-6 mb-3">
          <label htmlFor="dob" className={css.label}>
            Date Of Birth : <FaAsterisk className={css.star} />
          </label>
          <input
            type="date"
            className={css.input}
            id="dob"
            ref={dobRef}
            onChange={(e) =>
              setFormData({ ...formData, dateofBirth: e.target.value })
            }
          />
        </div>

        {/* gender input */}
        <div className="col-6 mb-3">
          <label htmlFor="gender" className={css.label}>
            Gender : <FaAsterisk className={css.star} />
          </label>
          <input
            id="gender"
            ref={genderRef}
            className={`  ${css.select}`}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          ></input>
        </div>

        {/* contact input */}
        <div className="mb-3">
          <label htmlFor="contact" className={css.label}>
            Contact No : <FaAsterisk className={css.star} />
          </label>
          <input
            type="text"
            className={css.input}
            id="contact"
            ref={contactRef}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          {/*  email input */}
          <label htmlFor="email" className={css.label}>
            Email : <FaAsterisk className={css.star} />
          </label>
          <input
            type="email"
            className={css.input}
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        {/* button */}
        <div className={css.buttonContainer}>
          <button
            type="submit"
            className={`btn btn-primary`}
            onClick={(evt) => onSubmit(evt)}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Form1;
