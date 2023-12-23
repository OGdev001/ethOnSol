import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../src/App.css";
import carouselOne from "../media/carousel_one.svg";
import carouselTwo from "../media/carousel_two.svg";
import carouselThree from "../media/carousel_three.svg";
import carouselFour from "../media/carousel_four.svg";
import carouselFive from "../media/carousel_five.svg";

const CarouselComponent = () => {
  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "300px",
  };

  const centerSlidePercentage = window.innerWidth <= 600 ? 50 : 33.33;

  return (
    <section className="w-full tokenomics">
      <div className="max-w-7xl mx-auto py-20">
        <p className="text-[#14F195] text-5xl font-bold text-center pt-2 pb-10">
          HOLY SHIT, WE PUT $ETHEREUM ON SOLANA
        </p>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={centerSlidePercentage}
        >
          <div className="rounded-lg">
            <img
              src={carouselOne}
              alt="Img 1"
              style={imageStyle}
              className="images"
            />
          </div>
          <div>
            <img
              src={carouselTwo}
              alt="Img 2"
              style={imageStyle}
              className="images"
            />
          </div>
          <div>
            <img
              src={carouselThree}
              alt="Img 3"
              style={imageStyle}
              className="images"
            />
          </div>
          <div>
            <img
              src={carouselFour}
              alt="Img 4"
              style={imageStyle}
              className="images"
            />
          </div>
          <div>
            <img
              src={carouselFive}
              alt="Img 5"
              style={imageStyle}
              className="images"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselComponent;
