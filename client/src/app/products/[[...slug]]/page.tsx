import OtherPageBanner from "@/app/components/OtherPageBanner";
import ProductsList from "@/app/components/ProductsList";
import React from "react";

const Products = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 1) {
    return (
      <>
        <OtherPageBanner title={`${params.slug[0]} Products`}></OtherPageBanner>
        <div className="container mx-auto">
          <div className="flex justify-end gap-4">
            <select className="border-[1px] border-solid border-gray-300 w-[300px] px-3 py-2">
              <option>Select Category</option>
              <option>In door</option>
              <option>Out door</option>
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
  } else {
    return (
      <>
        <OtherPageBanner title="All Products"></OtherPageBanner>
        <div className="container mx-auto">
          <div className="flex justify-end gap-4">
            <select className="border-[1px] border-solid border-gray-300 w-[300px] px-3 py-2">
              <option>Select Category</option>
              <option>In door</option>
              <option>Out door</option>
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
