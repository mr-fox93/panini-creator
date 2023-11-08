import styled from "styled-components";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const PaniniNameContainer = styled.div`
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

const CustomInput = styled.input`
  width: 330px;
  height: 36px;
  border: 0.5px solid black;
  background: transparent;

  &::placeholder {
    color: #888;
  }
`;

export const paniniNameSchema = z.string().max(35);

const PaniniName = () => {
  const [sandwichName, setSandwichName] = useState<string>("");
  const { register } = useFormContext();
  return (
    <PaniniNameContainer>
      <Header>Name panini</Header>
      <CustomInput
        {...register("sandwichName")}
        onChange={(e) => setSandwichName(e.target.value)}
        placeholder="eg. Salami Panini"
      />{" "}
    </PaniniNameContainer>
  );
};

export default PaniniName;
