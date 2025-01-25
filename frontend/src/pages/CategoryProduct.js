import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import productCategory from "../helpers/productCategory";
import VerticalCard from "../components/VerticalCard";
import SummaryApi from "../common";

const CategoryProduct = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const urlCategoryListinArray = urlSearch.getAll("category");

  const urlCategoryListObject = {};
  urlCategoryListinArray.forEach((el) => {
    urlCategoryListObject[el] = true;
  });

  const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
  const [filterCategoryList, setFilterCategoryList] = useState([]);

  const [sortBy, setSortBy] = useState("");

  const fetchData = async () => {
    const response = await fetch(SummaryApi.filterProduct.url, {
      method: SummaryApi.filterProduct.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        category: filterCategoryList,
      }),
    });

    const dataResponse = await response.json();
    setData(dataResponse?.data || []);
  };

  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;

    setSelectCategory((preve) => ({
      ...preve,
      [value]: checked,
    }));
  };

  useEffect(() => {
    fetchData();
  }, [filterCategoryList]);

  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory).filter(
      (key) => selectCategory[key]
    );

    setFilterCategoryList(arrayOfCategory);

    const urlFormat = arrayOfCategory
      .map((el, index) => `category=${el}`)
      .join("&&");

    navigate("/product-category?" + urlFormat);
  }, [selectCategory]);

  const handleOnChangeSortBy = (e) => {
    const { value } = e.target;
    setSortBy(value);

    if (value === "asc") {
      setData((preve) =>
        [...preve].sort((a, b) => a.sellingPrice - b.sellingPrice)
      );
    }

    if (value === "dsc") {
      setData((preve) =>
        [...preve].sort((a, b) => b.sellingPrice - a.sellingPrice)
      );
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="grid lg:grid-cols-[250px,1fr] gap-6">
        {/** Sol Panel */}
        <aside className="bg-white p-4 rounded shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Sort by</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sortBy"
                checked={sortBy === "asc"}
                onChange={handleOnChangeSortBy}
                value="asc"
              />
              Fiyat - Düşükten Yükseğe
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sortBy"
                checked={sortBy === "dsc"}
                onChange={handleOnChangeSortBy}
                value="dsc"
              />
              Fiyat - Yüksekten Düşüğe
            </label>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-4">Kategori</h3>
          <div className="space-y-2">
            {productCategory.map((category, index) => {
              // Çeviri Sözlüğü
              const categoryTranslations = {
                Airpods: "Kablosuz Kulaklıklar",
                Camera: "Kamera",
                Earphones: "Kulaklıklar",
                Mobiles: "Telefonlar",
                Mouse: "Fare",
                Printers: "Yazıcılar",
                Processor: "İşlemci",
                Refrigerator: "Buzdolabı",
                Speakers: "Hoparlörler",
                Trimmers: "Tıraş Makineleri",
                Televisions: "Televizyonlar",
                Watches: "Saatler",
              };

              // İngilizce etiketi Türkçe'ye çevir
              const translatedLabel =
                categoryTranslations[category.label] || category.label;

              return (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="category"
                    value={category.value}
                    checked={selectCategory[category.value]}
                    onChange={handleSelectCategory}
                  />
                  {translatedLabel} {/* Türkçe çevrilmiş etiket */}
                </label>
              );
            })}
          </div>
        </aside>

        {/** Sağ İçerik */}
        <div>
          <h2 className="text-xl font-semibold mb-4 mt-4">
            Sonuçları görüntüle: {data.length}
          </h2>
          <div className="grid gap-6">
            <VerticalCard data={data} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
