import LeftArrowImage from "../arrows/Vector4.svg";
import RightArrowImage from "../arrows/Vector3.svg";
import { dressingVariants } from "../data/dressing";
import styled from "styled-components";
import { useState, useEffect } from "react";
import SwichOn from "../arrows/SwichOn.svg";
import SwichOff from "../arrows/SwichOff.svg";
import { z } from "zod";
import { useFormContext } from "react-hook-form";
import Add from "../arrows/PlusHover.svg";

interface CarouselWrapProps {
  isVisible: boolean;
}

interface Props {
  id: number;
  value: string;
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

export const dressingSchema = z
  .enum(["OLIVE OIL", "HONEY_MUSTARD", "RANCH", "MAYO"])
  .optional()
  .nullable();

const DressingCarousel = () => {
  const [carousel, setCarousel] = useState<Props[]>([
    { id: +crypto.randomUUID(), value: "OLIVE OIL" },
  ]);
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { setValue } = useFormContext();

  const visible = () => setIsVisible(!isVisible);
  ///////
  const addCarousel = () => {
    setCarousel([
      ...carousel,
      { id: +crypto.randomUUID(), value: "OLIVE OIL" },
    ]);
  };
  //

  const uptadeCarousel = (id: number, value: string) => {
    setCarousel(
      carousel.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const collectData = () => {
    const dataArray = carousel.map((item) => item.value);
    setValue("base.dressing", dataArray);
  };

  const uptadeDressing = (newIndex: number) => {
    const newDressing = dressingVariants[newIndex] || "";
    setValue("base.dressing", newDressing);
  };

  const nextDressing = () => {
    const nextIndex = (currentIndex + 1) % dressingVariants.length;
    setCurrentIndex(nextIndex);
    uptadeDressing(nextIndex);
  };

  const prevDressing = () => {
    const prevIndex =
      (currentIndex - 1 + dressingVariants.length) % dressingVariants.length;
    setCurrentIndex(prevIndex);
    uptadeDressing(prevIndex);
  };

  useEffect(() => {
    setValue(
      "base.dressing",
      isVisible ? dressingVariants[currentIndex] : undefined
    );
  }, [isVisible, currentIndex, setValue]);

  return (
    <>
      <p>Dressing</p>
      <img
        onClick={visible}
        src={(isVisible && SwichOn) || SwichOff}
        alt={isVisible ? "SwichOn" : "SwichOff"}
      />
      <img src={Add} onClick={addCarousel} />
      {carousel.map((item, index) => (
        <div key={item.id}>
          <CarouselWrap isVisible={isVisible}>
            <img
              onClick={prevDressing}
              style={{ cursor: "pointer" }}
              src={RightArrowImage}
              alt="Left Arrow"
            />
            <BreadAndLogoWrapper onChange={uptadeCarousel(item.id, item.value)}>
              {dressingVariants[currentIndex]}
            </BreadAndLogoWrapper>
            <img
              onClick={nextDressing}
              style={{ cursor: "pointer" }}
              src={LeftArrowImage}
              alt="Right Arrow"
            />
          </CarouselWrap>
        </div>
      ))}
    </>
  );
};

export default DressingCarousel;
