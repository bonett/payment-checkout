/* eslint-disable */
import React, { useEffect } from "react";
import { AppDispatch } from "Store";
import { fetchProduct } from "Store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "Components/Products/List";
import SkeletonLoader from "Components/Skeleton";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: any) => state.products.productData);

  useEffect(() => {
    dispatch(fetchProduct())
  }, []);

  return (
    <div className="container">
      {products ? <ProductList products={products} /> : <SkeletonLoader />}
    </div>
  );
}

export default HomePage;
