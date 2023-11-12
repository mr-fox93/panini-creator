import { styled } from "styled-components";
import { useState } from "react";
import On from "../../arrows/On.svg";
import Off from "../../arrows/Off.svg";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const CutleryContainer = styled.div`
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

const CutlerySelect = styled.div`
  display: flex;
  align-items: flex-end;
  align-items: center;
`;

const ItemName = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-right: 20px;
`;

export const cuterlySchema = z.boolean().optional();

const Cutlery = () => {
  const { register, setValue, watch } = useFormContext();
  const currentValue = watch("cutlery");

  const handleClick = () => {
    setValue("cutlery", !currentValue);
  };

  return (
    <CutleryContainer>
      <Header>Cutlery</Header>
      <CutlerySelect onClick={handleClick}>
        <ItemName>ADD TO ORDER</ItemName>
        <input
          type="checkbox"
          {...register("cutlery")}
          style={{ display: "none" }}
          onClick={handleClick}
        />
        <img
          style={{ width: "17px", height: "17px", cursor: "pointer" }}
          src={currentValue ? On : Off}
          alt="Cutlery toggle"
        />
      </CutlerySelect>
    </CutleryContainer>
  );
};

export default Cutlery;
