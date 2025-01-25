import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  // Kategoriler ve dinamik arka plan renkleri
  const sections = [
    { category: "mobiles", heading: "Akıllı Telefon" },
    { category: "Mouse", heading: "Fare" },
    { category: "televisions", heading: "Televizyon" },
    { category: "camera", heading: "Kamera & Fotoğrafçılık" },
    { category: "earphones", heading: "Kulaklık" },
    { category: "speakers", heading: "Bluetooth Hoparlör" },
    { category: "refrigerator", heading: "Buzdolabı" },
    { category: "trimmers", heading: "Tıraş Makinesi" },
  ];

  return (
    <div>
      <CategoryList />
      <BannerProduct />

      {/* Top's Airpods Bölümü */}
      <div className="bg-gradient-to-r from-yellow-500 to-slate-400 text-white py-2 mt-6">
        <HorizontalCardProduct  
          category={"airpodes"}
          heading={"Favori Airpodslar"}
        />
      </div>

      {/* Popular's Watches Bölümü */}
      <div className="bg-gradient-to-r from-yellow-500 to-slate-400 text-white py-6 mt-2">
        <HorizontalCardProduct
          category={"watches"}
          heading={"En Yeni Saatler"}
        />
      </div>

      {/* Diğer Kategoriler */}
      {sections.map((section, index) => (
        <VerticalCardProduct
          key={section.category}
          category={section.category}
          heading={section.heading}
          backgroundColor={index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"}
        />
      ))}
    </div>
  );
};

export default Home;
