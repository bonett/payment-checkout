/* eslint-disable */
import React from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

function CreditCardComponent({
  data: { number, expiry, cvc, name, focus },
}: {
  data: {
    number: string;
    expiry: string;
    cvc: string;
    name: string;
    focus: unknown | any;
  };
}) {
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
