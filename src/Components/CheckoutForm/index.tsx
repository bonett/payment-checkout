/* eslint-disable */
import React from "react";
import PaymentSummary from "Components/PaymentSummary";
import CreditCardForm from "Components/CreditCardForm";
import { usePayment } from "Hooks/usePayment";
import CreditCardComponent from "Components/CreditCard";
import CheckoutMessage from "Components/CheckoutMessage";
import { useSelector } from "react-redux";
import { useProducts } from "Hooks/useProducts";

function CheckoutForm() {
  const { formStep, handleChangeStepper, makePaymentProduct, loading, error } =
    usePayment();
  const { responsePayment } = useSelector((state: any) => state.user);
  const { onCloseModal } = useProducts();

  return (
    <div className="checkout-form">
      <>
        {formStep === 1 && (
          <>
            <CreditCardComponent />
            <CreditCardForm />
          </>
        )}
      </>
      <>{formStep === 2 && <PaymentSummary />}</>

      <>
        {formStep === 3 && (
          <>
            {loading ? (
              <div className="loader">
                <div className="loader-shape"></div>
              </div>
            ) : (
              <CheckoutMessage
                message={responsePayment?.message}
                payment={responsePayment?.payment}
              />
            )}
          </>
        )}
      </>

      <div className="checkout-form_actions">
        <div className="back">
          <>
            {formStep === 2 && (
              <button
                type="button"
                className="btn-outlined"
                onClick={() => handleChangeStepper(1)}
              >
                {"Previous"}
              </button>
            )}
          </>
        </div>
        <div className="confirm">
          {formStep === 1 && (
            <button
              type="button"
              className="btn-primary"
              disabled={false}
              onClick={() => handleChangeStepper(2)}
            >
              {"Continue"}
            </button>
          )}
          {formStep === 2 && (
            <button
              type="submit"
              className="btn-primary"
              onClick={() => {
                handleChangeStepper(3);
                makePaymentProduct();
              }}
            >
              {"Confirm"}
            </button>
          )}
          {formStep === 3 && !error && responsePayment && (
            <button
              type="submit"
              className="btn-primary"
              onClick={() => onCloseModal()}
            >
              {"Done"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
