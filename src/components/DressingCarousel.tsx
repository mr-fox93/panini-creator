import LeftArrowImage from "../arrows/Vector4.svg";
import RightArrowImage from "../arrows/Vector3.svg";
import { dressingVariants } from "../data/dressing";
import styled from "styled-components";
import { useState } from "react";
import SwichOn from "../arrows/SwichOn.svg";
import SwichOff from "../arrows/SwichOff.svg";

interface CarouselWrapProps {
  isVisible: boolean;
}

const CarouselWrap = styled.div<CarouselWrapProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 20px;
  width: 250px;
  height: 35px;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;

const BreadAndLogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const DressingCarousel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [valueOfDressing, setValueOfDressing] = useState(
    dressingVariants[currentIndex]
  );

  const visible = () => setIsVisible(!isVisible);

  const nextDressing = () => {
    const nextIndex = (currentIndex + 1) % dressingVariants.length;
    setCurrentIndex(nextIndex);
    setValueOfDressing(dressingVariants[nextIndex]);
  };

  const prevDressing = () => {
    const prevIndex =
      (currentIndex - 1 + dressingVariants.length) % dressingVariants.length;
    setCurrentIndex(prevIndex);
    setValueOfDressing(dressingVariants[prevIndex]);
  };

  return (
    <>
      <p>Dressing</p>
      <img
        onClick={visible}
        src={(isVisible && SwichOn) || SwichOff}
        alt={isVisible ? "SwichOn" : "SwichOff"}
      />
      <CarouselWrap isVisible={isVisible}>
        <img
          onClick={prevDressing}
          style={{ cursor: "pointer" }}
          src={RightArrowImage}
          alt="Left Arrow"
        />
        <BreadAndLogoWrapper>{valueOfDressing}</BreadAndLogoWrapper>
        <img
          onClick={nextDressing}
          style={{ cursor: "pointer" }}
          src={LeftArrowImage}
          alt="Right Arrow"
        />
      </CarouselWrap>
    </>
  );
};

export default DressingCarousel;
