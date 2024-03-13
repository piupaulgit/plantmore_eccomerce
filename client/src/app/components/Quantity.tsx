"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
interface IQuantityProps {
  label?: boolean;
  min?: number;
  max?: number;
}

const Quantity = (props: IQuantityProps) => {
  const [value, setValue] = useState<number>((props.min && props.min) || 1);

  const changeValue = (actionType: string) => {
    if (actionType === "increment") {
      if (value === props.max) {
        toast.error(`You can't add more than ${props.max} items`);
      } else {
        setValue(value + 1);
      }
    } else {
      if ((props.min && value === props.min) || value === 1) {
        toast.error(
          `You can't add less than ${(props.min && props.min) || 1} items`
        );
      } else {
        setValue(value - 1);
      }
    }
  };

  return (
    <div className="flex gap-12">
      <Toaster />
      {props.label && (
        <label className="text-gray-700 font-light">QUANTITY</label>
      )}
      <div className="flex gap-4 border-solid border-gray-300 border-b-2 pb-2 text-gray-500">
        <button onClick={() => changeValue("decrement")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-dash"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
        <span className="px-4 text-gray-700 font-light">{value}</span>

        <button onClick={() => changeValue("increment")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Quantity;
