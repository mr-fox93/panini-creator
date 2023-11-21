import { styled } from "styled-components";
import Dices from "../../arrows/Dices.svg";
import { useStore } from "../../store";
import { servingVariant } from "../../data/serving";
import { breadVariants } from "../../data/bread";
import { cheeseVariants } from "../../data/cheese";
import { useEffect } from "react";
import { meatVariants } from "../../data/meat";
import { dressingVariants } from "../../data/dressing";
import { vegetableVariant } from "../../data/vegetable";
import { spreadVariant } from "../../data/spread";
import { eggVariants } from "../../data/egg";
import { useFormContext } from "react-hook-form";

export const RandomizedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

const Randomize = () => {
  const { setValue } = useFormContext();

  const {
    setServingArray,
    setCurrentIndex,
    setSelectedOptions,
    setMeatOptions,
    carousels,
    setCarousels,
    setVegetableArray,
    setIsVisible,
    isVisible,
    setSandwichName,
    setSpreadsArray,
    setTopping,
    topping,
    setEggOptions,
  } = useStore();
  const serving = servingVariant;
  const bread = breadVariants;
  const cheese = cheeseVariants;
  const meat = meatVariants;
  const vegetables = vegetableVariant;
  const paniniName = ["Panini Paradise", "Heaven Panini", "Special Panii"];
  const spreads = spreadVariant;
  const egg = eggVariants;

  const randomizeVegetables = () => {
    const randomVisible = Math.random() < 0.5;
    setIsVisible(randomVisible);

    if (!isVisible) return;

    const vegeNumbers = Math.floor(Math.random() * 9) + 1;
    const randomizedVege = [];
    for (let i = 0; i < vegeNumbers; i++) {
      randomizedVege.push(
        vegetables[Math.floor(Math.random() * vegetables.length)]
      );
    }
    setVegetableArray(randomizedVege);
  };

  const randomizePanini = () => {
    setServingArray(serving[Math.floor(Math.random() * serving.length)]);
    setCurrentIndex(bread[Math.floor(Math.random() * bread.length)]);
    setSelectedOptions([cheese[Math.floor(Math.random() * cheese.length)]]);
    setMeatOptions([meat[Math.floor(Math.random() * meat.length)]]);
    setSandwichName(paniniName[Math.floor(Math.random() * paniniName.length)]);
    setValue(
      "sandwichName",
      paniniName[Math.floor(Math.random() * paniniName.length)]
    );

    setSpreadsArray([spreads[Math.floor(Math.random() * spreads.length)]]);
    setTopping(topping === "SESAME" ? null : "SESAME");
    setEggOptions([egg[Math.floor(Math.random() * egg.length)]]);
    setCarousels(
      carousels.map(() => {
        return { index: Math.floor(Math.random() * dressingVariants.length) };
      })
    );

    randomizeVegetables();
  };

  return (
    <RandomizedButton type="button" onClick={() => randomizePanini()}>
      <img src={Dices} alt="randomize panii" />
      <p>RANDOMIZED PANINI</p>
    </RandomizedButton>
  );
};

export default Randomize;
