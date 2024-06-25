import React from "react";
import Shimmer from "./Shimmer";

const Drinks = ({ data , loaded }) => {
  return (
    <div className="flex flex-wrap sm:mx-14 text-start">
     {!loaded
        ? new Array(8).fill(0).map((_, index) => (
            <div key={index} className="w-full sm:w-1/2 p-4">
              <Shimmer />
            </div>
          ))
      : data?.menuItems?.map((val, index) => (
          <div key={index} className="w-full sm:w-1/2 p-4">
            <div className="sm:text-2xl oswald-font text-start flex items-center">
              <span>{val?.listName}</span>
              <span className="flex-grow dotted-line mx-2 mt-5"></span>
              <span>${val?.price}</span>
            </div>
            <p className="kelly-slab-font text-sm text-start text-gray-400">
              {val.description}
            </p>
          </div>
        ))}
  </div>
  );
};

export default Drinks;
