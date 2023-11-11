import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import LeftArrowImage from "../arrows/Vector4.svg";
import RightArrowImage from "../arrows/Vector3.svg";
import SwichOn from "../arrows/SwichOn.svg";
import SwichOff from "../arrows/SwichOff.svg";
import Add from "../arrows/PlusHover.svg";
import { dressingVariants } from "../data/dressing";

interface CarouselWrapProps {
  isVisible: boolean;
}

type CarouselState = {
  index: number;
};

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

const CarouselCaontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`;

export const dressingSchema = z.array(z.string()).optional().nullable();

const DressingCarousel: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [carousels, setCarousels] = useState<CarouselState[]>([{ index: 0 }]);
  const { setValue } = useFormContext();

  const visible = () => setIsVisible(!isVisible);

  const addAnotherCarousel = () => {
    carousels.length < 3 && setCarousels([...carousels, { index: 0 }]);
  };

  const updateDressing = (carouselIndex: number, newIndex: number) => {
    let newCarousels = [...carousels];
    newCarousels[carouselIndex] = {
      ...newCarousels[carouselIndex],
      index: newIndex,
    };
    setCarousels(newCarousels);
    setValue(
      "base.dressing",
      newCarousels.map((c) => dressingVariants[c.index])
    );
  };

  const nextDressing = (carouselIndex: number) => {
    const newIndex =
      (carousels[carouselIndex].index + 1) % dressingVariants.length;
    updateDressing(carouselIndex, newIndex);
  };

  const prevDressing = (carouselIndex: number) => {
    const newIndex =
      (carousels[carouselIndex].index - 1 + dressingVariants.length) %
      dressingVariants.length;
    updateDressing(carouselIndex, newIndex);
  };

  useEffect(() => {
    if (isVisible) {
      setValue(
        "base.dressing",
        carousels.map((c) => dressingVariants[c.index])
      );
    } else {
      setValue("base.dressing", []);
    }
  }, [carousels, isVisible, setValue]);

  return (
    <>
      <p>Dressing</p>
      <div>
        <img
          style={{ marginRight: "10px" }}
          onClick={visible}
          src={isVisible ? SwichOn : SwichOff}
          alt={isVisible ? "Switch On" : "Switch Off"}
        />
        <img
          onClick={addAnotherCarousel}
          src={Add}
          alt="Add another dressing"
        />
      </div>
      <CarouselCaontainer>
        {carousels.map((carousel, index) => (
          <CarouselWrap key={index} isVisible={isVisible}>
            <img
              onClick={() => prevDressing(index)}
              style={{ cursor: "pointer" }}
              src={RightArrowImage}
              alt="Left Arrow"
            />
            <BreadAndLogoWrapper>
              {dressingVariants[carousel.index]}
            </BreadAndLogoWrapper>
            <img
              onClick={() => nextDressing(index)}
              style={{ cursor: "pointer" }}
              src={LeftArrowImage}
              alt="Right Arrow"
            />
          </CarouselWrap>
        ))}
      </CarouselCaontainer>
    </>
  );
};

export default DressingCarousel;
