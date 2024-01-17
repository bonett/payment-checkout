import React from "react";
import { Route, Outlet } from "react-router-dom";
import HomePage from "Pages/Public/Home";
import NoMatch from "Pages/NoMatch";
import Navigation from "Components/Shared/Navigation";
import Footer from "Components/Shared/Footer";

const LandingLayout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
};

export default function routes() {
  return (
    <>
      <Route path={"/"} element={<LandingLayout />}>
        <Route index element={<HomePage />} />
        <Route path={'*'} element={<NoMatch />} />
      </Route>
    </>
  );
}
