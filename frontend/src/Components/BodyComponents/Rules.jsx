import React from 'react'

const Rules = () => {
    return (
        <div className="flex flex-wrap justify-around items-center p-2 gap-2 bg-[#665430] kelly-slab-font mx-2">
          <p className="w-full sm:w-80 text-center sm:text-left">
            Food may not be refunded. If your food was made incorrectly we will remake it for you.
          </p>
          <hr className="hidden sm:flex h-14 border border-dotted self-center" />
          <hr className="sm:hidden flex w-32 border border-dotted self-center" />
          <p className="w-full sm:w-80 text-center sm:text-left">
            Food may not be refunded. If your food was made incorrectly we will remake it for you.
          </p>
          <hr className="hidden sm:flex h-14 border border-dotted self-center" />
          <hr className="sm:hidden flex w-32 border border-dotted self-center" />
          <p className="w-full sm:w-80 text-center sm:text-left">
            Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness.
          </p>
        </div>
      );
}

export default Rules