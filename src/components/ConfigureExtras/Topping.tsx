import styled from "styled-components";
import { toppingVariant } from "../../data/topping";
import { useState, useEffect } from "react";
import On from "../../arrows/On.svg";
import Off from "../../arrows/Off.svg";
import { z } from "zod";
import { useFormContext } from "react-hook-form";
import { useStore } from "../../store";

const ToppingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 468px;
  height: 69px;
`;

const Header = styled.header`
  font-size: 18px;
  font-weight: 400;
  margin-right: auto;
`;

const ToppingOption = styled.div`
  display: flex;
  align-items: flex-end;
  align-items: center;
`;

const ItemName = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-right: 20px;
`;

export const toppingSchema = z
  .union([z.literal("SESAME"), z.literal(null)])
  .optional();

const Topping = () => {
  //const [topping, setTopping] = useState<string | null>(null);
  const { topping, setTopping } = useStore();
  const { setValue } = useFormContext();

  const handleClick = () => {
    const newTopping = topping === "SESAME" ? null : "SESAME";
    setTopping(newTopping);
    setValue("extras.topping", newTopping);
  };

  return (
    <ToppingContainer>
      <Header>Topping</Header>
      <ToppingOption onClick={() => handleClick()}>
        <ItemName>{toppingVariant}</ItemName>
        <img
          style={{ width: "17px", height: "17px" }}
          src={(topping && On) || Off}
          alt="checkbox"
        />
      </ToppingOption>
    </ToppingContainer>
  );
};

export default Topping;
