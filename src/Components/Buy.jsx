import React from "react";

const Buy = () => {
  return (
    <section className="w-full bg-[whitesmoke]">
      <div className="max-w-7xl mx-auto leading-9 flex flex-col justify-center items-center py-20">
        <p className="navColor howToBuy text-[1.8rem] md:text-5xl font-bold">
          HOW TO BUY $ETHEREUM
        </p>

        <div className="block px-6 md:px-0 md:flex items-center pt-8 gap-4">
          <div className="mb-8 p-4 shadow-2xl rounded-md md:mb-0 buy_box">
            <p className="font-bold text-[1.25rem] text-center">
              1. CREATE SOLANA WALLET
            </p>
            <p className="pt-4 text-center  px-4">
              Create a Phantom or Backpack Wallet by using either your Mobile or
              Desktop device.
            </p>
          </div>

          <div className="mb-8 p-4 shadow-2xl rounded-md md:mb-0 buy_box">
            <p className="font-bold text-[1.25rem] text-center">
              2. BUY SOLANA
            </p>
            <p className="pt-4 text-center  px-8">
              Buy Solana (SOL) on your wallet or send from an Exchange to your
              wallet.
            </p>
          </div>

          <div className="p-4 shadow-2xl rounded-md buy_box">
            <p className="font-bold text-[1.25rem] text-center">
              3. SWAP $ETHEREUM
            </p>
            <p className="pt-4 text-center px-8">
              Go to Jupiter (jup.ag) or Raydium (raydium.io), connect your
              wallet, paste $ETHEREUM C.A. and swap your Solana to $ETHEREUM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
