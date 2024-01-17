import React from "react";
import ProductList from "Components/Products/List";
import SkeletonLoader from "Components/Shared/Skeleton";
import Modal from "Components/Shared/Modal";
import CheckoutForm from "Components/CheckoutForm";
import { useProducts } from "Hooks/useProducts";

function HomePage() {
  const { products, loading, isOpenModal, onCloseModal } = useProducts();

  return (
    <div className="container">
      <>
        {!loading && products ? (
          <ProductList products={products} />
        ) : (
          <SkeletonLoader />
        )}
      </>
      <Modal open={isOpenModal} onClose={onCloseModal} title={"Checkout"}>
        <CheckoutForm />
      </Modal>
    </div>
  );
}

export default HomePage;
