import React from "react";

const Menus = () => {
  return (
    <>
      <div className="h-20 bg-body-header-image">
        <div className="h-full flex justify-center oswald-font items-center">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 sm:font-medium w-20 sm:w-32 hover:text-white py-1 sm:py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            FOOD
          </button>
          <button class="bg-blue-500 text-white sm:font-medium w-20 sm:w-32 py-1 sm:py-2 mx-4 border border-blue-500 rounded">
            DRINKS
          </button>

          <button class="bg-transparent hover:bg-blue-500 text-blue-700 sm:font-medium w-20 sm:w-32 hover:text-white py-1 sm:py-2 border border-blue-500 hover:border-transparent rounded">
            BRUNCH
          </button>
        </div>
      </div>
    </>
  );
};

export default Menus;
