/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { moneyFormatter } from "Utils";
import { TAXES } from "Constants";

function PaymentSummary() {
    const { title, price, currency_id } = useSelector(
        (state: any) => state.user.productSelected
      );
      
    return (
        <div className="summary">
            <div className="summary_heading">
                <h4 className="title">{'Order summary'}</h4>
            </div>
            <div className="summary_detail-body">
                <h3 className="item">1 {title}</h3>
                <h3 className="item">{moneyFormatter(price, currency_id)}</h3>
            </div>
            <div className="summary_total">
                <h3 className="label">{'Taxes'}</h3>
                <h3 className="label">{moneyFormatter(TAXES, currency_id)}</h3>
            </div>
            <div className="summary_total">
                <h3 className="label">{'Total'}</h3>
                <h3 className="label">{moneyFormatter(price + TAXES, currency_id)}</h3>
            </div>
            <div className="summary_terms">
                <p className="text">{"Fugiat eu ea deserunt amet laboris ad incididunt culpa laboris exercitation irure. Deserunt dolore exercitation ut do quis eiusmod. Est culpa Lorem occaecat quis in laboris sunt esse. Ullamco occaecat voluptate nulla ad culpa nostrud minim incididunt officia officia eu nulla laborum eu. Culpa qui tempor pariatur nulla. Excepteur tempor laborum non et adipisicing non sunt minim sunt. Irure officia eiusmod officia ad non ex cupidatat.Magna consectetur tempor occaecat cillum enim laboris. Ex magna cupidatat deserunt consequat culpa nisi aliquip proident et duis. Nulla id."}</p>
            </div>
        </div>
    );
}

export default PaymentSummary;
