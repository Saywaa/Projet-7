import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";
import imgHomeBanner from "../assets/images/banner/homeBanner.png";

function Home () {
  return (
    <div>
      <Header />
      <main>
        <Banner image={imgHomeBanner} text="Chez vous, partout et ailleurs" />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default Home;