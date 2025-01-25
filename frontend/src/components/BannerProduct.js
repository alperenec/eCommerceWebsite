import React, { useEffect, useState } from "react";
import image1 from "../assest/banner/img1.webp";
import image2 from "../assest/banner/img2.webp";
import image3 from "../assest/banner/img3.jpg";
import image4 from "../assest/banner/img4.jpg";
import image5 from "../assest/banner/img5.webp";

import image1Mobile from "../assest/banner/img1_mobile.jpg";
import image2Mobile from "../assest/banner/img2_mobile.webp";
import image3Mobile from "../assest/banner/img3_mobile.jpg";
import image4Mobile from "../assest/banner/img4_mobile.jpg";
import image5Mobile from "../assest/banner/img5_mobile.png";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4, image5];
  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % desktopImages.length);
  };

  const preveImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? desktopImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="container mx-auto px-4 md:px-20 rounded-lg ">
      <div className="h-56 md:h-80 w-full bg-slate-200 relative overflow-hidden rounded-lg shadow-lg">
        {/** Navigation Buttons */}
        <div className="absolute z-10 h-full w-full flex items-center justify-between px-4 md:px-8">
          <button
            onClick={preveImage}
            className="bg-white shadow-md rounded-full p-2 text-gray-600 hover:text-black transition"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={nextImage}
            className="bg-white shadow-md rounded-full p-2 text-gray-600 hover:text-black transition"
          >
            <FaAngleRight />
          </button>
        </div>

        {/** Desktop and Tablet Version */}
        <div className="hidden md:flex h-full w-full">
          {desktopImages.map((imageURL, index) => (
            <div
              key={imageURL}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
                index === currentImage
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-full"
              }`}
            >
              <img
                src={imageURL}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/** Mobile Version */}
        <div className="flex md:hidden h-full w-full">
          {mobileImages.map((imageURL, index) => (
            <div
              key={imageURL}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
                index === currentImage
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-full"
              }`}
            >
              <img
                src={imageURL}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
