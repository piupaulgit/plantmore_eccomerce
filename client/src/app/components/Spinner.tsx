import React from "react";

const Spinner = ({ title }: any) => {
  return (
    <span className=" top-[50%] left-[50%] absolute capitalize translate-x-[-50%] translate-y-[-50%]">
      {title}
    </span>
  );
};

export default Spinner;
