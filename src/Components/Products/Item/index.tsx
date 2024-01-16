/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router";
import { type Product } from "Types";

function ProductItem({ product }: { product: Product }) {
  const navigateTo = useNavigate();
  const { id, title, thumbnail, description, price, categories } = product;

  return (
    <button onClick={() => navigateTo(`/details/${id}`)}>
      <article>
        <h1>{title}</h1>
        <img src={thumbnail} />
        <p>{description}</p>
        <span>{price}</span>
        <div>
          {
            categories.map((category: string) => <span>{category}</span>)
          }
        </div>
      </article>
    </button>
  );
}

export default ProductItem;
