import React from "react";

const OtherPageBanner = (props: any) => {
  return (
    <section className="py-10 bg-gray-100 mb-10">
      <div className="container mx-auto flex justify-between">
        <h2 className=" font-bold text-3xl text-gray-700 capitalize">
          {props.title}
        </h2>
      </div>
    </section>
  );
};

export default OtherPageBanner;
