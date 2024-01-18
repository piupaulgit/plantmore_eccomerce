"use client";

import OtherPageBanner from "@/app/components/OtherPageBanner";
import ProductsList from "@/app/components/ProductsList";
import { saveCategoryAction } from "@/redux/CategorySlice";
import { RootState } from "@/redux/store";
import { getAllCategories } from "@/services/apis/categories";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Products = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  const categories = useSelector(
    (state: RootState) => state.CategorySlice.categories
  );
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    if (categories === null) {
      try {
        setIsLoading(true);
        getAllCategories().then((res) => {
          if (res.status === "success") {
            setIsLoading(false);
            dispatch(saveCategoryAction(res.data.categories));
          }
        });
      } catch (err) {
        console.log(err);
      }
    }

    if (params?.slug[0] === "category") {
      setSelectedCategory(params.slug[1]);
    }
  }, []);

  const changeCategory = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  if (params.slug?.length === 1) {
    return (
      <>
        <OtherPageBanner title={`${params.slug[0]} Products`}></OtherPageBanner>
        <div className="container mx-auto">
          <div className="flex justify-end gap-4">
            <select
              className="border-[1px] border-solid border-gray-300 w-[300px] px-3 py-2"
              onChange={changeCategory}
              value={selectedCategory}
            >
              <option value="all">
                {isLoading ? "Loading..." : "All Categories"}
              </option>
              {categories?.length &&
                categories.map((category: any) => {
                  return (
                    <option value={category._id} key={categories._id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
            <select className="border-[1px] border-solid border-gray-300 w-[200px] px-3 py-2">
              <option>Sort By</option>
              <option>High to low</option>
              <option>Low to high</option>
            </select>
          </div>
          <div>
            <ProductsList
              productTag={params.slug[0]}
              apiEndPoint={{
                filters: {
                  limit: 20,
                  tags: params.slug[0] !== "all" ? params.slug[0] : undefined,
                },
              }}
            />
          </div>
        </div>
      </>
    );
  } else if (params.slug?.length === 2) {
    return (
      <>
        <OtherPageBanner title="All Products"></OtherPageBanner>
        <div className="container mx-auto">
          <div className="flex justify-end gap-4">
            <select
              className="border-[1px] border-solid border-gray-300 w-[300px] px-3 py-2"
              onChange={changeCategory}
              value={selectedCategory}
            >
              <option value="all">
                {isLoading ? "Loading..." : "All Categories"}
              </option>
              {categories?.length &&
                categories.map((category: any) => {
                  return (
                    <option value={category._id} key={categories._id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
            <select className="border-[1px] border-solid border-gray-300 w-[200px] px-3 py-2">
              <option>Sort By</option>
              <option>High to low</option>
              <option>Low to high</option>
            </select>
          </div>
          {selectedCategory && (
            <div className="">
              <ProductsList
                productTag="all"
                category={selectedCategory}
                apiEndPoint={{
                  filters: {
                    limit: 20,
                  },
                }}
              />
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <OtherPageBanner title="All Products"></OtherPageBanner>
        <div className="container mx-auto">
          <div className="flex justify-end gap-4">
            <select
              className="border-[1px] border-solid border-gray-300 w-[300px] px-3 py-2"
              onChange={changeCategory}
              value={selectedCategory}
            >
              <option value="all">
                {isLoading ? "Loading..." : "All Categories"}
              </option>
              {categories?.length &&
                categories.map((category: any) => {
                  return (
                    <option value={category._id} key={categories._id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
            <select className="border-[1px] border-solid border-gray-300 w-[200px] px-3 py-2">
              <option>Sort By</option>
              <option>High to low</option>
              <option>Low to high</option>
            </select>
          </div>
          <div className="">
            <ProductsList
              productTag="all"
              apiEndPoint={{
                filters: {
                  limit: 20,
                },
              }}
            />
          </div>
        </div>
      </>
    );
  }
};

export default Products;
