import React, { Fragment } from "react";
import Logo from "./Images/logo.png";
import Discord from "./Images/discord.png";
import Telegram from "./Images/telegram.png";
import Message from "./Images/message.png";

const Navbar = () => {
  return (
    <header class="body-font pt-3 pb-10">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div>
            <img src={Logo} className="w-2/4" alt="" />
          </div>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="" class="mr-5 text-gray-100">
            VoldemortTrumpRobotnik-10Neko
          </a>
          <a href="" class="mr-5">
            <img src={Discord} className="" alt="" />
          </a>
          <a href="" class="mr-5">
            <img src={Telegram} className="" alt="" />
          </a>
          <a href="" class="mr-5">
            <img src={Message} className="" alt="" />
          </a>
        </nav>
        <button class="inline-flex items-center text-white bg-[#DA0116] border-0 py-1 px-3 focus:outline-none rounded-full text-base mt-4 md:mt-0">
          Connect wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;
