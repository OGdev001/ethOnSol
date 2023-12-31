import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../src/App.css";
import carouselOne from "../media/carousel_one.jpeg";
import carouselTwo from "../media/carousel_two.jpeg";
import carouselThree from "../media/carousel_three.jpeg";
import carouselFour from "../media/carousel_four.jpeg";
import carouselFive from "../media/carousel_five.jpeg";

const CarouselComponent = () => {
  const imageStyle = {
    maxWidth: "85%",
    maxHeight: "300px",
  };

  const centerSlidePercentage = window.innerWidth <= 600 ? 100 : 33.33;

  return (
    <section className="w-full tokenomics">
      <div className="max-w-7xl mx-auto py-20">
        <p className="text-[#14F195] text-3xl md:text-5xl font-bold text-center pt-2 pb-10">
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
