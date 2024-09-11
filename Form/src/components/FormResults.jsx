import React, { useContext } from "react";
import FormItems from "../store/FormItems-store";
import OneUserDisplay from "./OneUserDisplay";

import css from "./Form.module.css";

const FormResults = () => {
  const { usersData } = useContext(FormItems);
  return (
    <div className={css.resultContainer}>
      {usersData.map((user, index) => {
        return (
          <OneUserDisplay
            key={index}
            index={index}
            firstName={user.firstName}
            lastName={user.lastName}
            dateofBirth={user.dateofBirth}
            gender={user.gender}
            email={user.email}
            contact={user.contact}
            houseNo={user.houseNo}
            landmark={user.landmark}
            address={user.address}
            city={user.city}
            state={user.state}
            zipCode={user.zip}
            transactionId={user.transaction}
            UTR={user.utr}
            amount={user.amount}
            bankName={user.bank}
            time={user.time}
          />
        );
      })}
    </div>
  );
};

export default FormResults;
