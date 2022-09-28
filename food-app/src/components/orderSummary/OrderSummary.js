import React from "react";
import { Link } from "react-router-dom";
import "./OrderSummary.css";
import { useSelector, useDispatch } from "react-redux";
import Items from "../item/Items";
import { checkout } from "../../app/slice/CartSlice";
function OrderSummary(props) {
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.cart.cartItems);
  console.log(addedItems, "addedItems");
  const cancelHandler = () => {
    props.onClose(false);
  };

  const saveHandler = () => {
    dispatch(checkout());
    props.onClose(false);
  };
  return (
    <div>
      OrderSummary
      <ul>
        {addedItems.map((item) => (
          <Items data={item} key={item.id} />
        ))}
      </ul>
      <Link onClick={saveHandler} to="/thanks">
        SAVE AND CHECKOUT
      </Link>
      <Link onClick={cancelHandler}>CANCEL</Link>
    </div>
  );
}

export default OrderSummary;
