import React, { useContext, useRef } from "react";
import { FaAsterisk } from "react-icons/fa";
import css from "./Form.module.css";
import FormItems from "../store/FormItems-store";

const form2 = () => {
  const { incrementFormPage, decrementFormPage, setFormData, formData } =
    useContext(FormItems);

  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();

  const onSubmit = (evt) => {
    console.log("from submit in  ", evt);

    if (
      addressRef.current.value === "" ||
      cityRef.current.value === "" ||
      stateRef.current.value === ""
    ) {
      return alert("Fill all the star mark details");
    }

    evt.preventDefault();

    console.log(formData);
    incrementFormPage();
  };
  return (
    <>
      <h2 className={css.heading}>Address Details</h2>
      <div>
        <form className={`${css.formContainer} row`}>
          <div className="col-6 mb-3">
            <label htmlFor="houseNo" className={css.label}>
              House No :
            </label>
            <input
              type="text"
              className={css.input}
              id="houseNo"
              onChange={(e) =>
                setFormData({ ...formData, houseNo: e.target.value })
              }
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="landmark" className={css.label}>
              Landmark :
            </label>
            <input
              type="text"
              className={css.input}
              id="landmark"
              onChange={(e) =>
                setFormData({ ...formData, landmark: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className={css.label}>
              Address : <FaAsterisk className={css.star} />
            </label>
            <input
              type="text"
              className={css.input}
              id="address"
              ref={addressRef}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="col-5 mb-3">
            <label htmlFor="city" className={css.label}>
              City : <FaAsterisk className={css.star} />
            </label>
            <input
              type="text"
              className={css.input}
              id="city"
              ref={cityRef}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </div>
          <div className="col-4 mb-3">
            <label htmlFor="state" className={css.label}>
              State : <FaAsterisk className={css.star} />
            </label>
            <input
              type="text"
              className={css.input}
              id="state"
              ref={stateRef}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
          </div>
          <div className="col-3 mb-3">
            <label htmlFor="zipCode" className={css.label}>
              Zip Code :
            </label>
            <input
              type="text"
              className={css.input}
              id="zipCode"
              onChange={(e) =>
                setFormData({ ...formData, zip: e.target.value })
              }
            />
          </div>

          <div className={css.buttonContainer}>
            <button
              type="button"
              className={`btn btn-primary `}
              onClick={decrementFormPage}
            >
              Back
            </button>
            <button
              type="submit"
              className={`btn btn-primary `}
              onClick={(evt) => onSubmit(evt)}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default form2;
