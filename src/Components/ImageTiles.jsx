import React, { useState } from "react";
import Voldemort1 from "./Images/voldemort1.png";
import Voldemort2 from "./Images/voldemort2.png";
import Voldemort3 from "./Images/voldemort3.png";
import Voldemort4 from "./Images/voldewmort4.png";
import Voldemort5 from "./Images/voldemort5.png";
import Voldemort6 from "./Images/voldemort6.png";
import Voldemort7 from "./Images/voldemort7.png";
import Voldemort8 from "./Images/voldemort8.png";
import Voldemort9 from "./Images/voldemort9.png";
import Right from "./Images/right.png";
import UpperGradient from './Images/upper-gradient.png';

const ImageTiles = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="mt-20 container mx-auto">
      <div className="grid grid-cols-3 gap-4 relative">
        {/* 1st column */}
        <div className="grid grid-cols-2 gap-0">
          <div className="mt-10 ms-auto">
            <img src={Voldemort1} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort2} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort3} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort4} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort5} className="w-auto mb-4 h-44" alt="" />
          </div>
          <div className="my-auto mx-auto">
            <img src={Voldemort6} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort7} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort8} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort9} className="w-auto mb-4 h-44" alt="" />
          </div>
        </div>
        {/* 2nd column */}
        <div className="my-auto">
          <h1 className="text-3xl text-center">
            Purchase VoldemortTrumpRobotnik -10Neko ETHEREUM on{" "}
            <span className="red-gradient">Uniswap</span>
          </h1>

          <div className="mt-7">
            <form className="border border-gray-500 p-4 bg-gray-600/10 rounded">
              <div className="flex justify-between">
                <div className="flex items-center bg-gray-500 p-2 rounded-full">
                  <button
                    type="button"
                    className={`${
                      isActive
                        ? "bg-white text-black font-bold"
                        : "text-gray-700 text-white font-bold"
                    } px-8 py-2 rounded-full focus:outline-none`}
                    onClick={handleToggle}
                  >
                    Swap
                  </button>
                  <button
                    type="button"
                    className={`${
                      isActive
                        ? "text-gray-700 text-white font-bold"
                        : "bg-white text-black font-bold"
                    } px-8 py-2 rounded-full focus:outline-none`}
                    onClick={handleToggle}
                  >
                    Buy
                  </button>
                </div>
                <div className="my-auto">
                  <p className="text-gray-500">Flooz: Not connected</p>
                </div>
              </div>
              <div className="mt-7">
                <label htmlFor="#you-pay">You pay</label>
                <input
                  type="number"
                  id="you-pay"
                  className="rounded-full p-3 w-full text-gray-300 bg-zinc-800 mt-2 focus:outline-none"
                />
                <small className="text-gray-500 mt-3">~ $0.00</small>
              </div>
              <div className="mt-7">
                <label htmlFor="#you-pay">You get</label>
                <input
                  type="number"
                  id="you-pay"
                  className="rounded-full p-3 w-full text-gray-300 bg-zinc-800 mt-2 focus:outline-none"
                />
                <small className="text-gray-500 mt-3">~ $0.00</small>
              </div>
              <div className="mt-20">
                <button class="items-center px-auto w-full text-white bg-[#DA0116] border-0 py-3 focus:outline-none rounded-full text-base mt-4 md:mt-0">
                  Connect wallet
                </button>
              </div>
              <div className="my-7">
                <div className="flex justify-between mb-4">
                  <p className="font-bold">Chart</p>
                  <div className="my-auto">
                    <img src={Right} className="w-auto" alt="" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold">Share and earn</p>
                  <div className="my-auto">
                    <img src={Right} className="w-auto" alt="" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* 3rd column */}
        <div className="grid grid-cols-2 gap-0">
          <div className="my-auto mx-auto">
            <img src={Voldemort6} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort7} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort8} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort9} className="w-auto mb-4 h-44" alt="" />
          </div>
          <div className="mt-10 ">
            <img src={Voldemort1} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort2} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort3} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort4} className="w-auto mb-4 h-44" alt="" />
            <img src={Voldemort5} className="w-auto mb-4 h-44" alt="" />
          </div>
        </div>
      </div>
      <div className="absolute">
        <img src={UpperGradient} className="w-auto" alt="" />
      </div>
    </div>
  );
};

export default ImageTiles;
