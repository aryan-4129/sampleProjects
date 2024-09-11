import React, { useEffect, useState } from "react";
import Item from "./Item";
import css from "./Items.module.css";

const Items = ({ category }) => {
  const [storeItems, setstoreItems] = useState([]);
  const [loadData, setloadData] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      console.log(category, "category");
      const response = await fetch(
        `https://fakestoreapi.com/products/${
          category === "" ? "" : "category/" + category
        }?sort=desc`
      );
      const data = await response.json();
      setstoreItems(data);
      console.log(data);
      console.log(storeItems);
    };

    fetchData();
  }, [category]);

  return (
    <>
      <div className={css.newsContainer}>
        {storeItems.map((item, index) => {
          return (
            <Item
              key={index}
              title={item.title}
              price={item.price}
              category={item.category}
              desc={item.description}
              imageUrl={item.image}
              rate={item.rating.rate}
            />
          );
        })}
      </div>
    </>
  );
};

export default Items;
