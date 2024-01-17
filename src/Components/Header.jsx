import React, { useState } from "react";
import "../index.css";
import HeaderGroup from "./Images/header-group.png";
import Diamond from "./Images/gray-diamond.svg";

const Header = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mt-10">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-8xl w-4/5 clash">
            Discover, Collect & Sell{" "}
            <span className="red-gradient">Extraordinary</span> NFTs
          </h1>
          <p className="text-gray-300 mt-4">
            Lorem ipsum dolor sit amet consectetur. Proin lorem in nibh hac
            nullam. Habitant sit venenatis pharetra rhoncus viverra netus diam.
            Tempus amet.
          </p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-3">
            <div className="me-5 mb-3 lg:mb-0">
              <img src={Diamond} className="mx-auto lg:mx-0" alt="image" />
            </div>

            <div className="me-5 my-auto">
              <div class="flex border-collapse border rounded-full mb-3 lg:mb-0 mx-auto lg:mx-0">
                <button
                  class="bg-transparent text-white font-bold py-2 px-4 rounded"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <input
                  type="number"
                  class="border bg-transparent border-gray-300 p-2 text-center"
                  value={count}
                  id="numberInput"
                  readOnly
                />
                <button
                  class="bg-transparent text-white font-bold py-2 px-4 rounded"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>

            <div className="my-auto mx-auto lg:mx-0">
              <button class="inline-flex items-center mb-3 lg:mb-0 ps-10 pt-3 pb-3 pe-10 text-white bg-[#DA0116] border-0 py-1 px-3 focus:outline-none rounded-full text-base mt-4 md:mt-0">
                Mint
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={HeaderGroup} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
