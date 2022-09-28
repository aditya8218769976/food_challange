import { useState } from "react";
import "../foodList/FoodList.css";
import { DataArray } from "../../Data";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../../app/slice/CartSlice";

const FoodList = () => {
  const [foodList, setFoodList] = useState(DataArray);
  console.log(setFoodList);
  const dispatch = useDispatch();

  const onAddHandler = (added) => {
    dispatch(addItems(added));
  };

  const onRemoveHandler = (removed) => {
    dispatch(removeItems(removed));
  };

  return (
    <div className="foodListSection">
      {foodList.map((item) => (
        <div key={item.name} className="food-list">
          <img src={item.image} alt="error" />
          <h5>{item.name}</h5>
          <p>Price:{item.price}</p>
          <div>
            <button onClick={() => onRemoveHandler(item.name)} type="submit">
              -
            </button>
            <button onClick={() => onAddHandler(item)} type="submit">
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
