/* eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";
import { onSelectedProduct } from "Store/userSlice";
import type { Product } from "Types";
import { moneyFormatter } from "Utils";

function ProductItem({ product }: { product: Product }) {
  const {
    id,
    title,
    thumbnail,
    price,
    description,
    currency_id: currencyId,
  } = product;
  const dispatch = useDispatch();

  return (
    <article key={id} className="article-content">
      <div className="article-content_thumb">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="article-content_description">
        <h2 className="article-content_title">{title}</h2>
        <p className="article-content_parragraph">{description}</p>
        <div className="article-content_action">
          <h6 className="article-content_price">
            {moneyFormatter(price, currencyId)}
          </h6>
          <button className="btn-primary" onClick={() => dispatch(onSelectedProduct(product))}>{'Comprar'}</button>
        </div>
      </div>
    </article>
  );
}

export default ProductItem;
