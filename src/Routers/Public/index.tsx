import React from "react";
import { Route, Outlet } from "react-router-dom";
import HomePage from "Pages/Public/Home";
import NoMatch from "Pages/NoMatch";
import DetailsPage from "Pages/Public/Details";
import PurchasedPage from "Pages/Public/Purchased";

const LandingLayout = () => {
  return <Outlet />
};

export default function routes() {
  return (
    <>
      <Route path={"/"} element={<LandingLayout />}>
        <Route index element={<HomePage />} />
        <Route path={'/details/:id'} element={<DetailsPage />} />
        <Route path={'/last-purchased'} element={<PurchasedPage />} />
        <Route path={'*'} element={<NoMatch />} />
      </Route>
    </>
  );
}
