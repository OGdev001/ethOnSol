import React from "react";
import { useState } from "react";
import navLogo from "../media/navLogo.jpeg";
import dropDown from "../media/arrow-down.svg";
import telegram from "../media/telegram.svg";
import twitter from "../media/twitter.svg";
import cart from "../media/shopping-cart.svg";
import Button from "./Button";
import "../../src/App.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDropdown, setDropdown] = useState(false);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  return (
    <nav className="bg-[whitesmoke] sticky top-0 z-50 p-4 navbar w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 logo">
          <img src={navLogo} alt="logo" width="60px" />
          <p className="font-bold">ETHEREUM ON</p>
          <p className="text-[#14F195] navColor font-bold">
          SOLANA
          </p>
        </div>
        <div className={`flex items-center gap-4 nav_items cursor-pointer`}>
          <span className="nav_dropdown flex items-center flex-col navBox gap-2">
            <div className="flex gap-2">
              <p>Ethereum Proof </p>
              <img
                onClick={() => setDropdown(!isDropdown)}
                className="dropdown"
                src={dropDown}
                alt="a drop-down menu"
                width="18px"
              />
            </div>
            {isDropdown && (
              <div className="dropdown_content flex flex-col pl-2">
                <a
                  href="https://solscan.io/tx/5SAy8xT4vNLLMb4fkRxRjYMcsntsaNWK1FFA9ynGyjyAYtdhEoeFKhWCHRKTVchFMcbUAfESmVqkYNdzpUUf1pJN"
                  className="dropdown_item"
                  target="_blank"
                  rel="noreferrer"
                >
                  LP Burn
                </a>
                <a
                  href="https://solscan.io/tx/225DRdrKMHSKVDVhKX7jbh2fK2hL7NyvuJdRiq5mYTBZ1ria1xkaL5fBnqZQhv6BNYg3uTPuABAwEAPPeeoPDpWR"
                  className="dropdown_item"
                  target="_blank"
                  rel="noreferrer"
                >
                  Renounce
                </a>
              </div>
            )}
          </span>

          <div className=" flex gap-8 pt-16 md:gap-4 md:pt-0">
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
        <Button className="nav_btn">
          <a
            href="https://birdeye.so/swap/4EqmCRdEqcv8YPvQ77NuhuFQufHaBFM6XHGxPuachgLW?chain=solana"
            className="flex gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cart} alt="a drop-down menu" width="20px" />
            <p>Buy $ETHEREUM</p>
          </a>
        </Button>
        {/* nav mobile menu */}
        {!isOpen ? (
          <div className="hamburger" onClick={toggleOpen}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        ) : (
          <span className="text-4xl pr-2" onClick={toggleOpen}>
            &#10005;
          </span>
        )}
        {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
      </div>

      {/* mobile nav */}

      {isOpen && (
        <div className="absolute w-full left-0 top-[5.8rem]">
          <div className="overlay absolute w-full h-[100vh] z-10 left-0"></div>
          <div className="nav_item z-20 cursor-pointer absolute bg-[whitesmoke] w-full left-0 h-[38vh]">
            <span className="nav_dropdown w-[50%] m-auto flex items-center flex-col navBox gap-2 mt-2">
              <div className="flex pt-2 gap-2">
                <p>ETHEREUM Proof </p>
                <img
                  onClick={() => setDropdown(!isDropdown)}
                  className="dropdown"
                  src={dropDown}
                  alt="a drop-down menu"
                  width="18px"
                />
              </div>
              {isDropdown && (
                <div className="flex flex-col">
                  <a
                    href="https://solscan.io/tx/5SAy8xT4vNLLMb4fkRxRjYMcsntsaNWK1FFA9ynGyjyAYtdhEoeFKhWCHRKTVchFMcbUAfESmVqkYNdzpUUf1pJN"
                    className="dropdown_item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LP Burn
                  </a>
                  <a
                    href="https://solscan.io/tx/225DRdrKMHSKVDVhKX7jbh2fK2hL7NyvuJdRiq5mYTBZ1ria1xkaL5fBnqZQhv6BNYg3uTPuABAwEAPPeeoPDpWR"
                    className="dropdown_item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Renounce
                  </a>
                </div>
              )}
            </span>

            <div className="flex justify-center gap-8 pt-7">
              <a
                href="https://t.me/ETHonSOL"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="telegram logo" width="50px" />
              </a>

              <a
                href="https://twitter.com/EthOnSolana"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter logo" width="50px" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
