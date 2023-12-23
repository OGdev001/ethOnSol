import React from "react";
import telegram from "../media/telegram.svg";
import twitter from "../media/twitter.svg";
import navLogo from "../media/navLogo.svg";
import "../../src/App.css";

const Footer = () => {
  return (
    <footer className="bg-[whitesmoke] w-full py-12 footer">
      <div className="max-w-7xl mx-auto px-4 flex md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 logo">
          <img src={navLogo} alt="logo" width="60px" />
           <p className="font-bold">ETHEREUM ON</p>
          <p className="text-[#14F195] navColor font-bold">
          SOLANA
          </p>
        </div>

        <div className="flex items-center gap-8 md:gap-8  py-4 ">
          <a href="https://t.me/ETHonSOL" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram logo" width="30px" />
          </a>

          <a
            href="https://twitter.com/EthOnSolana"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter logo" width="30px" />
          </a>
        </div>
      </div>
      <p className="text-[.8rem] pt-4 text-center">
        Copyright &copy; 2023 ETHEREUM ON SOLANA - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
