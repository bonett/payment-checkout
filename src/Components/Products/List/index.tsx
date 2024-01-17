/* eslint-disable */
import React from "react";
import { type Product } from "Types";
import ProductItem from "Components/Products/Item";

function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="product-content">
      {products.map((product: Product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;
