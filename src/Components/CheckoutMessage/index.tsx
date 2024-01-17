/* eslint-disable */
import React from "react";
import { moneyFormatter } from "Utils";

function CheckoutMessage({
  message,
  payment,
}: {
  message: string;
  payment?: any;
}) {
  return (
    <div className="message-content">
      <h2>{message}</h2>
      <>
        {payment && (
          <div className="message-content_wrapper">
            <p>
              You have bought 1 {payment?.product} <br /> for{" "}
              {moneyFormatter(payment?.price, "COP")} <br /> <br /> 
              <strong>Thank you, Enjoy it !</strong>
            </p>
          </div>
        )}
      </>
    </div>
  );
}

export default CheckoutMessage;
