import { vegetableVariant } from "../data/vegetable";
import styled from "styled-components";
import { useState, useEffect } from "react";

interface ButtonProps {
  isSelected: boolean;
}

const VegetableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: end;
`;

const Button = styled.button<ButtonProps>`
  border: none;
  background: #f0f0f0;
  font-size: 12px;
  font-weight: 400;
  padding: 0.7rem;
  text-align: center;
  width: auto;
  height: 38px;
  border: ${(props) => (props.isSelected ? "1px solid black" : "none")};
`;

const VegetablesOptions = () => {
  const [vegetableArray, setVegetableArray] = useState<string[]>([]);

  const handleVegetableClick = (item: string) => {
    setVegetableArray((prevSelected) => {
      if (prevSelected.includes(item)) {
        return prevSelected.filter((x) => x !== item);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  useEffect(() => {
    console.log(vegetableArray);
  }, [vegetableArray]);
  return (
    <>
      <p>Vegetables</p>
      <VegetableWrapper>
        {vegetableVariant.map((item) => (
          <Button
            key={item}
            isSelected={vegetableArray.includes(item)}
            onClick={() => handleVegetableClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1).toLocaleLowerCase()}
          </Button>
        ))}
      </VegetableWrapper>
    </>
  );
};

export default VegetablesOptions;
