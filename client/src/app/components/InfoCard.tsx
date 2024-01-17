import React from "react";

interface IInfoCardProps {
  type: string;
  text: string;
}

const InfoCard = (props: IInfoCardProps) => {
  return (
    <div
      className={`p-4 bg-gray-200 text-gray-800 w-full rounded-md ${
        (props.type === "warning" && "bg-yellow-100 text-yellow-600") ||
        (props.type === "info" && " bg-blue-100 text-blue-600") ||
        (props.type === "danger" && " bg-red-100 text-red-600") ||
        (props.type === "success" && " bg-green-100 text-green-600")
      }`}
    >
      {props.text}
    </div>
  );
};

export default InfoCard;
