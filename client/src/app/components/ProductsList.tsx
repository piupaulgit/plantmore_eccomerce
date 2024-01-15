"use client";

import { addProductsAction } from "@/redux/ProductsSlice";
import { getProducts } from "@/services/apis/products";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

interface IProductsListProps {
  apiEndPoint?: Object;
  productTag: any;
}

const ProductsList = (props: IProductsListProps) => {
  const dispatch = useDispatch();
  const [productsList, setProductsList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      getProducts(props.apiEndPoint).then((res: any) => {
        if (res.status === "success") {
          dispatch(
            addProductsAction({ [props.productTag]: res.data.products })
          );
          setProductsList(res.data.products);
          setIsLoading(false);
        }
      });
    } catch {}
  }, []);

  return (
    <div
      className={`flex flex-wrap gap-4 mt-10 ${
        isLoading && "relative min-h-[300px]"
      }`}
    >
      {isLoading && <Spinner title="loading Products..." />}
      {productsList.length > 0 &&
        productsList.map((product: any) => {
          return (
            <div className="w-[24%] mb-5">
              <ProductCard productDetail={product}></ProductCard>
            </div>
          );
        })}
      ;
    </div>
  );
};

export default ProductsList;
