import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informacj o dostawie</p>
        <div className="multi-fields">
          <input type="text" placeholder="Imię" />
          <input type="text" placeholder="Nazwisko" />
        </div>
        <input type="text" placeholder="adres email" />
        <input type="text" placeholder="ulica" />
        <div className="multi-fields">
          <input type="text" placeholder="miasto" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="kod pocztowy" />
          <input type="text" placeholder="Kraj" />
        </div>
        <input type="text" placeholder="nr. tel." />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Podsumowanie</h2>
          <div>
            <div className="cart-total-details">
              <p>Dostawa</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Całość</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="button" onClick={() => navigate("/order")}>
            Przejdź do płatności
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
