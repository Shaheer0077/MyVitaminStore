import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";


import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import QuickShop from "./components/QuickShop";
import SpecialOffers from "./components/SpecialOffers";
import NewItems from "./components/NewItems";
import PopularBrands from "./components/PopularBrands";
import TopSellers from "./components/TopSellers";
import ServiceInfo from "./components/ServiceInfo";
import Footer from "./components/Footer";

import ProductDetail from "./Pages/ProductDetail";
import SideCart from "./components/SideCart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
    <CartProvider>
      <Header onCartClick={()=>setIsCartOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <QuickShop />
              <SpecialOffers />
              <NewItems />
              <PopularBrands />
              <TopSellers />
              <ServiceInfo />
              <Footer />
            </>
          }
        />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <SideCart isOpen={isCartOpen} onClose={()=> setIsCartOpen(false)}/>
      </CartProvider>

    </>
  );
};

export default App;
