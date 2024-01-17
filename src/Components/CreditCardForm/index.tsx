/* eslint-disable */
import React from "react";
import { usePayment } from "Hooks/usePayment";

function CreditCardForm() {
  const { number, name, expiry, cvc, handleInputFocus, handleInputChange } =
    usePayment();

  return (
    <form className="form-content">
      <div className="form-content_naming">
        <label>{"Enter card number"}</label>
        <input
          type="tel"
          name="number"
          placeholder="Card number"
          value={number}
          onChange={(e) => handleInputChange(e, "number")}
          onFocus={handleInputFocus}
          maxLength={16}
        />
      </div>

      <div className="form-content_naming">
        <label>{"Enter card number"}</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => handleInputChange(e, "name")}
          onFocus={handleInputFocus}
          maxLength={20}
        />
      </div>

      <div className="form-content_naming">
        <label>{"Enter card number"}</label>
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => handleInputChange(e, "expiry")}
          onFocus={handleInputFocus}
          maxLength={5}
        />
      </div>

      <div className="form-content_naming">
        <label>{"Enter card number"}</label>
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => handleInputChange(e, "cvc")}
          onFocus={handleInputFocus}
          maxLength={3}
        />
      </div>
    </form>
  );
}

export default CreditCardForm;
