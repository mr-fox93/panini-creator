import { styled } from "styled-components";
import { useState } from "react";
import On from "../../arrows/On.svg";
import Off from "../../arrows/Off.svg";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { device } from "../../GlobalStyle";

const NapkinsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 468px;
  height: 69px;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

const Header = styled.header`
  font-size: 18px;
  font-weight: 400;
  margin-right: auto;
`;

const NapkinsSelect = styled.div`
  display: flex;
  align-items: flex-end;
  align-items: center;
`;

const ItemName = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-right: 20px;
`;

export const napkinsSchema = z.boolean().optional();

const Napkins = () => {
  const { register, setValue, watch } = useFormContext();
  const curentValue = watch("napkins");

  const handleClick = () => {
    setValue("napkins", !curentValue);
  };

  return (
    <NapkinsContainer>
      <Header>Napkins</Header>
      <NapkinsSelect onClick={handleClick}>
        <ItemName>ADD TO ORDER</ItemName>
        <input
          onClick={handleClick}
          {...register("napkins")}
          type="checkbox"
          style={{ display: "none" }}
        />
        <img
          style={{ width: "17px", height: "17px" }}
          src={curentValue ? On : Off}
          alt="checkbox"
        />
      </NapkinsSelect>
    </NapkinsContainer>
  );
};

export default Napkins;
