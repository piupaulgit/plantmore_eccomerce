"use client";

import { getAllCategories } from "@/services/apis/categories";
import React, { useEffect, useState } from "react";
import ImageHelper from "./ImageHelper";
import Spinner from "./Spinner";

const CategoryBanners = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<[]>([]);

  useEffect(() => {
    try {
      setIsLoading(true);
      getAllCategories().then((res) => {
        if (res.status === "success") {
          setCategories(res.data.categories);
          setIsLoading(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section>
      <div
        className={`container mx-auto flex flex-wrap ${
          isLoading && "min-h-[500px] bg-gray-100 relative"
        }`}
      >
        {isLoading && <Spinner title="Loading Categories..." />}
        {categories &&
          categories.map((category: any, index) => {
            return (
              <div
                className={` border-[10px] border-white relative bg-red-400 overflow-hidden w-1/2 h-[400px]
                }`}
                key={index}
              >
                {category?.image && (
                  <ImageHelper
                    imageAlt={category.name}
                    imageData={category?.image?.data}
                  />
                )}
                <button className=" absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white">
                  {category.name}
                </button>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default CategoryBanners;
