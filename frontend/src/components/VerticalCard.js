import React, { useContext } from "react";
import scrollTop from "../helpers/scrollTop";
import displayINRCurrency from "../helpers/displayCurrency";
import Context from "../context";
import addToCart from "../helpers/addToCart";
import { Link } from "react-router-dom";

const VerticalCard = ({ loading, data = [] }) => {
  const loadingList = new Array(12).fill(null);
  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading
        ? loadingList.map((_, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-lg">
              <div className="h-40 bg-gray-200 animate-pulse mb-4"></div>
              <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
              <div className="h-6 bg-gray-200 animate-pulse mb-4"></div>
              <div className="h-10 bg-gray-200 animate-pulse"></div>
            </div>
          ))
        : data.map((product) => (
            <div
              key={product?._id}
              className="bg-white p-6 rounded shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link to={`/product/${product?._id}`} onClick={scrollTop}>
                <div className="h-40 flex justify-center items-center mb-4">
                  <img
                    src={product?.productImage[0]}
                    alt={product?.productName}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2 line-clamp-1">
                  {product?.productName}
                </h3>
                <p className="text-gray-500 mb-2 capitalize">
                  {product?.category}
                </p>
              </Link>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-red-500">
                  {displayINRCurrency(product?.sellingPrice)}
                </p>
                <button
                  onClick={(e) => handleAddToCart(e, product?._id)}
                  className="bg-yellow-700 text-white py-2 px-4 rounded hover:bg-yellow-800"
                >
                  Sepete ekle
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default VerticalCard;
