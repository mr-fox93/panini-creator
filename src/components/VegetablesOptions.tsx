import { vegetableVariant } from "../data/vegetable";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useFormContext } from "react-hook-form";

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

const vegetableArray = z.enum(vegetableVariant as [string, ...string[]]);
export const vegetablesSchema = z.array(vegetableArray).optional();

const VegetablesOptions = () => {
  const [vegetableArray, setVegetableArray] = useState<string[]>([]);
  const { setValue } = useFormContext();

  const handleVegetableClick = (item: string) => {
    setVegetableArray((prevSelected) => {
      const newVege = prevSelected.includes(item)
        ? prevSelected.filter((x) => x !== item)
        : [...prevSelected, item];
      setValue("base.vegetables", newVege);
      return newVege;
    });
  };

  return (
    <>
      <p>Vegetables</p>
      <VegetableWrapper>
        {vegetableVariant.map((item) => (
          <Button
            key={item}
            type="button"
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
