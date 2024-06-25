import React from "react";
import Drinks from "./BodyComponents/Drinks";
import BrunchCocktails from "./BodyComponents/BrunchCocktails";
import Hookahflavors from "./BodyComponents/Hookahflavors";
import Rules from "./BodyComponents/Rules";

const MenuList = () => {
  return (
    <>
      <div className="flex sm:justify-between justify-center gap-20 mt-5 sm:mt-16 pb-20">
        <img
          src="/images/Body-aside-design1.png"
          alt=""
          className="w-20 sm:flex hidden"
        ></img>
        <div className="flex flex-col gap-8">
          <div className="flex-col border border-white h-fit pb-6 mx-2">
            <div className="flex relative justify-center sm:h-8 items-center">
              <img
                src="/images/drink1.png"
                alt=""
                className="h-14 w-14 sm:h-44 sm:w-44 sm:absolute sm:top-0 sm:left-0 transform sm:-translate-y-1/2 sm:-translate-x-1/2"
              />
              <hr className="bg-gray-500 border-none h-0.5 sm:mt-20 sm:h-1 w-20 sm:w-32" />
              <p
                className="text-2xl sm:text-5xl text-gray-900 sm:mt-20 dark:text-white font-semibold uppercase mx-4"
                style={{ textShadow: "3px 3px 6px rgba(255, 0, 0, 0.5)" }}
              >
                DRINKS
              </p>
              <hr className="bg-gray-500 border-none h-0.5 sm:mt-20 sm:h-1 w-20 sm:w-32" />
              <img
                src="/images/drink2.png"
                alt=""
                className="h-14 w-14 sm:h-40 sm:w-40 sm:absolute sm:top-0 sm:right-0 sm:transform sm:-translate-y-1/2 sm:translate-x-1/2"
              />
            </div>
            <div className="mt-5 sm:mt-20">
              <Drinks />
            </div>
          </div>
          <div className="flex-col border border-white h-fit pb-6 mx-2 relative">
            <div className="flex relative justify-center items-center sm:h-8 pr-10">
              <img
                src="/images/drink3.png"
                alt=""
                className="h-20 w-20 sm:h-44 sm:w-44 sm:absolute sm:top-0 sm:left-0 transform sm:-translate-y-1/2 sm:-translate-x-1/2"
              />
              <hr className="bg-gray-500 border-none h-0.5 sm:mt-20 sm:h-1 w-16 sm:w-32" />
              <p
                className="text-2xl sm:text-5xl text-gray-900 sm:mt-20 dark:text-white oswald-font uppercase mx-4"
                style={{ textShadow: "3px 3px 6px rgba(255, 0, 0, 0.5)" }}
              >
                BRUNCH COCKTAILS
              </p>
              <hr className="bg-gray-500 border-none h-0.5 sm:mt-20 sm:h-1 w-16 sm:w-32" />
            </div>
            <img
              src="/images/drink4.png"
              alt=""
              className="h-20 w-20 sm:h-40 sm:w-40 absolute bottom-0 right-0 transform translate-y-2 sm:translate-y-10 translate-x-2 sm:translate-x-5"
            />
            <div className="mt-5 sm:mt-20">
              <BrunchCocktails />
            </div>
          </div>
          <div className="flex-col border border-gray-400 h-fit pb-6 mx-2 oswald-font">
            <div className="flex justify-center items-center py-5">
              <img
                src="/images/hookahflavors.png"
                alt=""
                className="h-20 w-20"
              />
            </div>
            <div className="flex justify-center items-center px-8 h-10">
              <hr className="bg-gray-500 border-none h-0.5 sm:mt-20 sm:h-1 w-20 sm:w-32" />
              <p
                className="text-2xl sm:text-5xl text-gray-900 sm:mt-20 dark:text-white uppercase mx-4"
                style={{ textShadow: "3px 3px 6px rgba(255, 0, 0, 0.5)" }}
              >
                hookah flavors
              </p>
              <hr className="bg-gray-500 border-none h-0.5 sm:mt-20 sm:h-1 w-20 sm:w-32" />
            </div>
            <div className="mt-5 sm:mt-20">
              <Hookahflavors />
            </div>
          </div>
          <button class="bg-blue-500 self-center text-white sm:font-medium w-32 sm:w-32 py-1 sm:py-2 mx-4 border border-blue-500 rounded">
            Order Online
          </button>
            <Rules/>
        </div>
        <img
          src="/images/Body-aside-design2.png"
          alt=""
          className="w-20 sm:flex hidden"
        ></img>
      </div>
    </>
  );
};

export default MenuList;
