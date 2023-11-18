import { styled } from "styled-components";
import Dices from "../../arrows/Dices.svg";
import { useStore } from "../../store";
import { servingVariant } from "../../data/serving";
import { breadVariants } from "../../data/bread";
import { cheeseVariants } from "../../data/cheese";
import { useEffect } from "react";
import { meatVariants } from "../../data/meat";

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

const Randomize = () => {
  const {
    setServingArray,
    servingArray,
    currentIndex,
    setCurrentIndex,
    selectedOptions,
    setSelectedOptions,
    meatOptions,
    setMeatOptions,
  } = useStore();
  const serving = servingVariant;
  const bread = breadVariants;
  const cheese = cheeseVariants;
  const meat = meatVariants;

  const randomizePanini = () => {
    setServingArray(serving[Math.floor(Math.random() * serving.length)]);
    setCurrentIndex(bread[Math.floor(Math.random() * bread.length)]);
    setSelectedOptions([cheese[Math.floor(Math.random() * cheese.length)]]);
    setMeatOptions([meat[Math.floor(Math.random() * meat.length)]]);

    // const numberOfCheeseSelectors = Math.floor(Math.random() * 2) + 1; // Losuje 1 lub 2
    // const newSelectedOptions = [];

    // for (let i = 0; i < numberOfCheeseSelectors; i++) {
    //   newSelectedOptions.push(
    //     cheese[Math.floor(Math.random() * cheese.length)]
    //   );
    // }

    // setSelectedOptions(newSelectedOptions);
  };

  return (
    <RandomizedButton type="button" onClick={() => randomizePanini()}>
      <img src={Dices} alt="randomize panii" />
      <p>RANDOMIZED PANINI</p>
    </RandomizedButton>
  );
};

export default Randomize;
