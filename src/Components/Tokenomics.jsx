import React, { useState } from "react";
import Button from "./Button";
import copy from "../media/copy.svg";

const Tokenomics = () => {
  const [isCopied, setIsCopied] = useState(false);
  const addressText = "4EqmCRdEqcv8YPvQ77NuhuFQufHaBFM6XHGxPuachgLW";

  const handleCopyClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = addressText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="w-full tokenomics">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center py-20">
        <span className="text-[#14F195] text-2xl md:text-5xl font-semibold text-center">
          <p>$EthOnSolana is a beacon in the crypto sea.</p>
          {/* <p className="text-center pt-4 md:pt-12">FOREVER ENCRYPTED ON SOLANA.</p> */}
        </span>

        <div className="tokenomics-box grid place-items-center mt-12 md:flex gap-4 md:items-center p-4 rounded-md">
          <Button>CONTRACT ADDRESS</Button>

          <p className="text-white text-[.8rem] address">{addressText}</p>

          <Button onclick={handleCopyClick}>
            {isCopied ? "COPIED" : "COPY"}
            <img src={copy} alt="a drop-down menu" width="20px" />
          </Button>
        </div>

        <div className="tokenomics-box mt-12  p-4 py-10 rounded-md">
          <p className="text-center text-white text-4xl font-semibold">
            $ETHEREUM TOKENOMICS
          </p>

          <div className="grid place-items-center md:flex gap-10 md:items-center pt-4 px-10">
            <div className="tokenomics-mini_box p-4 px-8 rounded-lg">
              <p className="text-xl text-white text-center font-thin">Supply</p>
              <p className="text-xl text-white text-center pt-3 font-bold">
                3,782,771,835,123
              </p>
            </div>

            <div className="tokenomics-mini_box p-4 px-8 rounded-lg">
              <p className="text-xl text-white text-center font-thin">
                Lp Tokens
              </p>
              <p className="text-xl text-white text-center pt-3  font-bold">
                Burnt
              </p>
            </div>

            <div className="tokenomics-mini_box p-4 px-8 rounded-lg">
              <p className="text-xl text-white text-center font-thin">
                Ownership
              </p>
              <p className="text-xl text-white text-center pt-3  font-bold">
                Renounced
              </p>
            </div>

            <div className="tokenomics-mini_box p-4 px-8 rounded-lg">
              <p className="text-xl text-white text-center font-thin">
                Team Tokens
              </p>
              <p className="text-xl text-white text-center pt-3 font-bold">0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
