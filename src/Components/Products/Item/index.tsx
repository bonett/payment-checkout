/* eslint-disable */
import React from "react";
import { type Product } from "Types";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";

function ProductItem({ product }: { product: Product }) {
  const {
    id,
    title,
    thumbnail,
    price,
    description,
    currency_id: currencyId,
  } = product;

  return (
    <article key={id} className="article-content">
      <div className="article-content_thumb">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="article-content_description">
        <h2 className="article-content_title">{title}</h2>
        <TextTruncate
          line={4}
          element="p"
          truncateText="…"
          text={description}
        />
        <div className="article-content_action">
          <h6 className="article-content_price">
            {price.toLocaleString("es-CO", {
              currency: currencyId,
              style: "currency",
              minimumFractionDigits: 0
            })}
          </h6>
          <button className="btn-primary">Comprar</button>
        </div>
      </div>
    </article>
  );
}

export default ProductItem;
