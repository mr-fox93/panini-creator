import LeftArrowImage from "../arrows/Vector4.svg";
import RightArrowImage from "../arrows/Vector3.svg";
import Grain from "../arrows/Grain.svg";
import Wheat from "../arrows/Wheat.svg";
import styled from "styled-components";
import { useState } from "react";

const CarouselWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 20px;
  width: 250px;
  height: 35px;
`;

const BreadAndLogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState("WHEAT");

  const ArrowBtn = () => {
    if (currentIndex === "WHEAT") {
      setCurrentIndex("FULL GRAIN");
    } else {
      setCurrentIndex("WHEAT");
    }
  };

  return (
    <>
      <p>Bread</p>
      <CarouselWrap>
        <img
          onClick={ArrowBtn}
          style={{ cursor: "pointer" }}
          src={RightArrowImage}
          alt="Right Arrow"
        />
        <BreadAndLogoWrapper>
          <img
            src={currentIndex === "WHEAT" ? Wheat : Grain}
            alt={currentIndex}
          />
          <p>{currentIndex}</p>
        </BreadAndLogoWrapper>
        <img
          onClick={ArrowBtn}
          style={{ cursor: "pointer" }}
          src={LeftArrowImage}
          alt="Left Arrow"
        />
      </CarouselWrap>
    </>
  );
};

export default Carousel;
