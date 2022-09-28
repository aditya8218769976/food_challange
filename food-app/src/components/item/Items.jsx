import React from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../../app/slice/CartSlice";

function Items({ data }) {
  const dispatch = useDispatch();

  console.log(data, "item");

  const onAddHandler = (added) => {
    dispatch(addItems(added));
  };

  const onRemoveHandler = (removed) => {
    dispatch(removeItems(removed));
  };
  return (
    <li>
      <h3>{data.name}</h3>
      <h4>{data.quantity}</h4>
      <h2>{data.totalPrice}</h2>
      <div>
        <button onClick={() => onRemoveHandler(data.name)} type="submit">
          -
        </button>
        <button onClick={() => onAddHandler(data)} type="submit">
          +
        </button>
      </div>
    </li>
  );
}

export default Items;
