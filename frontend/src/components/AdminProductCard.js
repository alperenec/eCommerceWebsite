import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../helpers/displayCurrency";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className="bg-white p-6 rounded shadow-md flex flex-col justify-between w-full h-[300px] max-w-[280px] mx-auto ">
      <div className="w-full h-36 flex justify-center items-center">
        <img
          src={data?.productImage[0]}
          className="max-h-full max-w-full object-contain"
          alt={data?.productName}
        />
      </div>

      <h1 className="text-ellipsis line-clamp-2 text-sm font-medium mt-4">
        {data.productName}
      </h1>

      <div className="flex justify-between items-center mt-2">
        <p className="font-semibold text-lg text-black">
          {displayINRCurrency(data.sellingPrice)}
        </p>

        <div
          className="w-10 h-10 flex justify-center items-center bg-green-200 hover:bg-green-600 rounded-full hover:text-white cursor-pointer"
          onClick={() => setEditProduct(true)}
        >
          <MdModeEditOutline />
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
