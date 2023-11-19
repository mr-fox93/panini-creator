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

export const RandomizedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const VegeOptions = () => {
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
  } = useStore();
  const vegetables = vegetableVariant;

  const randomizeVegetables = () => {
    const vegeNumbers = Math.floor(Math.random() * 9) + 1;
    const randomizedVege = [];
    for (let i = 0; i < vegeNumbers; i++) {
      randomizedVege.push(
        vegetables[Math.floor(Math.random() * vegetables.length)]
      );
    }
    setVegetableArray(randomizedVege);
  };

  const randomizedMeat = () => {
    setIsVisible(false);
    //setMeatOptions([]);
  };

  const randomizePanini = () => {
    setServingArray("WARM");
    setCurrentIndex("FULL GRAIN");
    setSelectedOptions(["MOZZARELLA"]);
    randomizedMeat();
    setCarousels(
      carousels.map(() => {
        return { index: Math.floor(Math.random() * dressingVariants.length) };
      })
    );
    randomizeVegetables();
    setSandwichName("VEGE PANINI");
  };

  return (
    <RandomizedButton type="button" onClick={() => randomizePanini()}>
      <img src={Dices} alt="randomize panii" />
      <p>RANDOMIZED PANINI</p>
    </RandomizedButton>
  );
};

export default VegeOptions;
