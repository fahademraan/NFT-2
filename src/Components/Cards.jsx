import React from "react";
import "../index.css";
import Avatar1 from "./Images/Avatar1.png";
import Avatar2 from "./Images/Avatar2.png";
import Avatar3 from "./Images/Avatar3.png";
import Avatar4 from "./Images/Avatar4.png";
import Avatar5 from "./Images/Avatar5.png";
import Avatar6 from "./Images/Avatar6.png";
import Avatar7 from "./Images/Avatar7.png";
import Avatar8 from "./Images/Avatar8.png";

const Cards = () => {
  return (
    <div className="mt-20 pt-10 wrapper">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            NFT <span className="red-gradient">information</span>
          </h1>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <div className="my-auto">
          <button class="inline-flex items-center text-white bg-[#DA0116] border-0 py-1 px-3 focus:outline-none rounded-full text-base mt-4 md:mt-0">
            Explore More
          </button>
        </div>
      </div>

      <div className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1st row */}
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar1} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar2} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar3} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar4} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>

          {/* 2nd row */}
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar5} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar6} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar7} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar8} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>

          {/* 3rd row */}
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar1} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar2} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar3} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
          <div className="text-center bg-gray-600/10 p-4 rounded-b border border-gray-500">
            <div className="mb-4">
              <img src={Avatar4} className="mx-auto" alt="" />
            </div>
            <div>
              <h1 className="font-bold">NFT Name</h1>
              <div>
                <span className="text-gray-500">Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
