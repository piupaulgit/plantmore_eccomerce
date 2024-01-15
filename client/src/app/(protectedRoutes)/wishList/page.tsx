import OtherPageBanner from "../../components/OtherPageBanner";
import SelectedProductList from "../../components/SelectedProductList";
import React from "react";

const WishList = () => {
  return (
    <>
      <OtherPageBanner title="Your Wish list"></OtherPageBanner>
      <div className="container mx-auto">
        <SelectedProductList></SelectedProductList>
        <div className="flex justify-end mt-10">
          <button className=" bg-lime-600 text-white py-3 w-[200px] hover:bg-gray-900 hover:text-white">
            Processed to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default WishList;
