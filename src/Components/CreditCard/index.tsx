/* eslint-disable */
import React from "react";
import Cards from "react-credit-cards-2";
import { useSelector } from "react-redux";
import "react-credit-cards-2/dist/es/styles-compiled.css";

function CreditCardComponent() {
  const { number, expiry, cvc, name, focus } = useSelector(
    (state: any) => state.user
  );

  return (
    <>
      <Cards
        number={number}
        expiry={expiry}
        cvc={cvc}
        name={name}
        focused={focus}
      />
    </>
  );
}

export default CreditCardComponent;
