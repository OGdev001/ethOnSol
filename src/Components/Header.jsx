import React from "react";
import Button from "./Button";
import cart from "../media/shopping-cart.svg";
import chart from "../media/chart.svg";
// import navLogo from "../media/navLogo.jpg";

const Header = () => {
  return (
    <section className="bg-[whitesmoke] w-full header_section">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center md:pt-16  ">
        <div className="header_text-container mt-6 md:mt-0 relative text-center w-full mx-auto">
          {/* <h1 className="header1 absolute font-semibold text-xs leading-tight text-center md:text-[8rem] md:leading-4 mx-auto">
            TICKER IS ETHEREUM
          </h1> */}
          <h1 className="header-main pt-8 md:pt-4 font-bold text-[4rem] text-center md:text-[8rem] md:leading-[1.2] z-10 mx-auto">
            TICKER IS <span className="ethereum">ETHEREUM</span>
          </h1>
          {/* <h1 className="header3 absolute font-semibold text-xs leading-tight text-center md:text-[8rem] md:leading-4 mx-auto">
            TICKER IS ETHEREUM
          </h1> */}
        </div>
        <p className="pt-[2rem] text-[1.3rem] md:pt-[1rem] md:text-[1.3rem] text-center">
          We finally fixed Ethereum by putting it on Solana.
        </p>

        <div className="text-[.85rem] my-16 md:pt-12 md:my-0 md:mb-20 flex items-center gap-7">
          <Button>
            <a
              href="https://birdeye.so/swap/4EqmCRdEqcv8YPvQ77NuhuFQufHaBFM6XHGxPuachgLW?chain=solana"
              className="flex gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cart} alt="a drop-down menu" width="20px" />
              <p>Buy</p>
            </a>
          </Button>

          <Button>
            <a
              href="https://birdeye.so/token/4EqmCRdEqcv8YPvQ77NuhuFQufHaBFM6XHGxPuachgLW?chain=solana"
              className="flex gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={chart} alt="chart icon" width="20px" />
              <p>CHART</p>
            </a>
          </Button>
        </div>

        {/* <img
          src={navLogo}
          alt="diagram of farmer"
          width="280px"
          className="md:pt-10"
        /> */}
      </div>
    </section>
  );
};

export default Header;
