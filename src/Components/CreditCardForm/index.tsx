/* eslint-disable */
import React from "react";
import { usePayment } from "Hooks/usePayment";

function CreditCardForm() {
  const { formData, handleInputChange } = usePayment();
  const { number, name, expiry, cvc } = formData;

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
          onFocus={(e) => handleInputChange(e, "focus")}
          maxLength={16}
        />
      </div>

      <div className="form-content_naming">
        <label>{"Enter holdname"}</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => handleInputChange(e, "name")}
          onFocus={(e) => handleInputChange(e, "focus")}
          maxLength={20}
        />
      </div>

      <div className="form-content_naming">
        <label>{"Enter expiry date"}</label>
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => handleInputChange(e, "expiry")}
          onFocus={(e) => handleInputChange(e, "focus")}
          maxLength={5}
        />
      </div>

      <div className="form-content_naming">
        <label>{"Enter cvc code"}</label>
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => handleInputChange(e, "cvc")}
          onFocus={(e) => handleInputChange(e, "focus")}
          maxLength={3}
        />
      </div>
    </form>
  );
}

export default React.memo(CreditCardForm);
