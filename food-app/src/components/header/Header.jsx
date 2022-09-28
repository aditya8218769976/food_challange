import React, { Fragment } from "react";
import { useState } from "react";
import "../header/Header.css";
import OrderSummary from "../orderSummary/OrderSummary";
import Modal from "../UI/modal/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userIsLoggedIn } from "../../app/slice/LoginSlice";

const Header = () => {
  const dispatch = useDispatch(userIsLoggedIn);
  const [showModal, setShowModal] = useState(false);
  console.log(showModal, "showModal");

  const isCartOpen = useSelector((state) => state.login.isLoggedIn);
  const totalQuantity = useSelector((state) => state.cart?.totalQuantity);
  return (
    <Fragment>
      <header className="header-style">
        <h1>Food's Restaurant</h1>

        {isCartOpen && (
          <Fragment>
            {" "}
            <button
              onClick={() => setShowModal(dispatch(userIsLoggedIn(true)))}
            >
              Cart
            </button>
            <h6> {totalQuantity}</h6>
          </Fragment>
        )}
      </header>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <OrderSummary onClose={setShowModal} />
        </Modal>
      )}
    </Fragment>
  );
};

export default Header;
