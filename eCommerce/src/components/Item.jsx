import React from "react";
import css from "./Item.module.css";

const Item = ({ title, price, category, desc, imageUrl, rate }) => {
  return (
    <>
      <div className={` ${css.container} card`}>
        <img
          className={` ${css.img} card-img-top`}
          src={imageUrl}
          alt="Card image cap"
        />
        <div className={` ${css.textContainer} card-body`}>
          <h5 className="card-title">{title}</h5>
          <p className={`  card-text`}>{desc}</p>
          <span>Price - {price}</span>
          <span>Category - {category}</span>
          <span>Rating - {rate}</span>
        </div>
      </div>
    </>
  );
};

export default Item;
