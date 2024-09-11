import React from "react";

import css from "./Form.module.css";

const OneUserDisplay = ({
  index,
  firstName,
  lastName,
  dateofBirth,
  gender,
  email,
  contact,
  houseNo,
  landmark,
  address,
  city,
  state,
  zipCode,
  transactionId,
  UTR,
  amount,
  bankName,
  time,
}) => {
  return (
    <center>
      <h3>{index + 1} - User Data</h3>
      <div>
        <table className={`${css.table}table `}>
          <thead>
            <tr>
              <th scope="col">Field Name</th>
              <th scope="col">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{lastName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>{contact}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td>DOB</td>
              <td>{dateofBirth}</td>
            </tr>
            <tr>
              <td>House Number</td>
              <td>{houseNo} </td>
            </tr>
            <tr>
              <td>Lamdmark</td>
              <td>{landmark} </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{address} </td>
            </tr>
            <tr>
              <td>City</td>
              <td>{city} </td>
            </tr>
            <tr>
              <td>State</td>
              <td>{state} </td>
            </tr>
            <tr>
              <td>Zip Code</td>
              <td>{zipCode} </td>
            </tr>
            <tr>
              <td>Transaction id</td>
              <td>{transactionId} </td>
            </tr>
            <tr>
              <td>UTR</td>
              <td>{UTR} </td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>{amount} </td>
            </tr>
            <tr>
              <td>Bank Name</td>
              <td>{bankName} </td>
            </tr>
            <tr>
              <td>Time of Payment</td>
              <td>{time} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  );
};

export default OneUserDisplay;
