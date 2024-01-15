import { productSample } from "@/assets/images";
import OtherPageBanner from "../../components/OtherPageBanner";
import SelectedProductList from "../../components/SelectedProductList";
import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <>
      <OtherPageBanner title="Your Cart"></OtherPageBanner>
      <div className="container mx-auto">
        <SelectedProductList></SelectedProductList>
        <div className="mt-6 flex justify-between">
          <div className="flex gap-2 self-start flex-1">
            <input
              placeholder="Coupon code"
              className="px-4 py-4 border-[1px] border-solid border-gray-300"
            />
            <button className="px-10 py-3 bg-gray-200 border-[1px] border-solid border-gray-200 text-gray-800 hover:bg-transparent hover:border-[1px] hover:border-lime-600 ">
              Apply Coupon
            </button>
          </div>
          <div className="flex-1">
            <h3 className=" text-2xl font-bold text-gray-600 mb-3">
              Cart Detail
            </h3>
            <hr></hr>
            <ul className="mt-4">
              <li className="flex justify-between py-4 border-b-[1px] border-solid border-b-gray-200">
                <span>Subtotal</span>
                <span>$537.00</span>
              </li>
              <li className="flex justify-between py-4 border-b-[1px] border-solid border-b-gray-200">
                <span>Discount</span>
                <span>$537.00</span>
              </li>
              <li className="flex justify-between py-4 border-b-[1px] border-solid border-b-gray-200">
                <span className="font-bold">Total</span>
                <span className="font-bold">$537.00</span>
              </li>
            </ul>
            <button className="w-full bg-lime-600 text-white py-4 hover:bg-gray-800">
              Processed to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
