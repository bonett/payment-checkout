/* eslint-disable */
import React, { useEffect } from "react";
import { AppDispatch } from "Store";
import { fetchProduct } from "Store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "Components/Products/List";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: any) => state.products.productData);

  useEffect(() => {
    dispatch(fetchProduct())
  }, []);

  return (
    <div className="home">
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
