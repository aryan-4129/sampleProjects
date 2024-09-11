import React, { useContext, useRef } from "react";
import css from "./Form.module.css";
import FormItems from "../store/FormItems-store";
import { FaAsterisk } from "react-icons/fa";

const Form3 = () => {
  const { decrementFormPage, formData, setFormData, addUsersData } =
    useContext(FormItems);

  const transacRef = useRef();
  const utrRef = useRef();
  const bankRef = useRef();

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (
      bankRef.current.value === "" ||
      utrRef.current.value === "" ||
      transacRef.current.value === ""
    ) {
      return alert("Fill all the star mark details");
    }
    console.log(formData);
    addUsersData();
  };

  return (
    <>
      <h2 className={css.heading}>Payment Details</h2>
      <form className={`${css.formContainer} row`}>
        <div className="mb-3">
          <label htmlFor="transaction" className={css.label}>
            Transcation Id : <FaAsterisk className={css.star} />
          </label>
          <input
            type="text"
            className={css.input}
            id="transaction"
            ref={transacRef}
            onChange={(e) =>
              setFormData({ ...formData, transaction: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="utrId" className={css.label}>
            UTR : <FaAsterisk className={css.star} />
          </label>
          <input
            type="text"
            className={css.input}
            id="utrId"
            ref={utrRef}
            onChange={(e) => setFormData({ ...formData, utr: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className={css.label}>
            Amount :
          </label>
          <input
            type="number"
            className={css.input}
            id="amount"
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bankName" className={css.label}>
            Bank Name : <FaAsterisk className={css.star} />
          </label>
          <input
            type="text"
            className={css.input}
            id="bankName"
            ref={bankRef}
            onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="timepayment" className={css.label}>
            Time Of Payment :
          </label>
          <input
            type="text"
            className={css.input}
            id="timepayment"
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
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
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form3;
