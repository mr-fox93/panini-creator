import styled from "styled-components";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { enqueueSnackbar } from "notistack";
import { useStore } from "../../store";
import { device } from "../../GlobalStyle";

interface CustomProps {
  hasError?: boolean;
}

const PaniniNameContainer = styled.div`
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

const CustomInput = styled.input<CustomProps>`
  width: 330px;
  height: 36px;
  border: 0.5px solid black;
  background: transparent;

  &::placeholder {
    color: ${(props) => (props.hasError ? "red" : "#888")};

    padding: 1rem;
  }

  @media ${device.mobile} {
    width: 230px;
    font-size: 16px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const paniniNameSchema = z
  .string()
  .nonempty({ message: "Panini name is required" })
  .max(35);

const PaniniName = () => {
  const { sandwichName, setSandwichName } = useStore();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const message = "Panini name is required";

  useEffect(() => {
    if (errors.sandwichName && !sandwichName) {
      enqueueSnackbar(message, { variant: "error" });
    }
  });

  return (
    <PaniniNameContainer>
      <Header>Name panini</Header>
      <InputContainer>
        <CustomInput
          value={sandwichName}
          hasError={Boolean(errors.sandwichName)}
          {...register("sandwichName")}
          onChange={(e) => setSandwichName(e.target.value)}
          placeholder="eg. Salami Panini"
        />{" "}
      </InputContainer>
    </PaniniNameContainer>
  );
};

export default PaniniName;
