import React from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import QuickShop from './components/QuickShop'
import SpecialOffers from './components/SpecialOffers'
import NewItems from './components/NewItems'
import PopularBrands from './components/PopularBrands'
import TopSellers from './components/TopSellers'
import ServiceInfo from './components/ServiceInfo'
import Footer from './components/Footer'
import Supplements from './Pages/Supplements'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <QuickShop/>
      <SpecialOffers/>
      <NewItems/>
      <PopularBrands/>
      <TopSellers/>
      <ServiceInfo/>
      <Footer/>

      {/* <Supplements/> */}
    </div>
  )
}

export default App
