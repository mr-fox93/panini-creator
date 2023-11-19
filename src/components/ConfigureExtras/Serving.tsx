import styled from "styled-components";
import { servingVariant } from "../../data/serving";
import CircleOff from "../../arrows/CircleOff.svg";
import CircleOn from "../../arrows/CircleOn.svg";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useFormContext } from "react-hook-form";
import { useStore } from "../../store";
import { device } from "../../GlobalStyle";

const ServingComponent = styled.div`
  width: 468px;
  height: 35px;
  display: flex;
  margin-top: 15px;
  align-items: center;
  margin-bottom: 15px;

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

const ServingOption = styled.div`
  display: flex;
  align-items: flex-end; /

`;

const CustomSpread = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CustomServigInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ItemName = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-right: 20px;
  margin-left: 7px;
`;

export const servingSchema = z.string().optional();

const Serving = () => {
  //const [servingArray, setServingArray] = useState<string>("WARM");
  const { servingArray, setServingArray } = useStore();

  const { setValue } = useFormContext();

  const handleAddServing = (item: string) => {
    setServingArray(item);
  };

  useEffect(() => {
    console.log(servingArray);
    setValue("extras.serving", servingArray);
  }, [servingArray]);

  return (
    <ServingComponent>
      <Header>Serving</Header>
      <ServingOption>
        {servingVariant.map((item) => (
          <CustomSpread>
            <CustomServigInfo onClick={() => handleAddServing(item)}>
              <img src={servingArray === item ? CircleOn : CircleOff} />
              <ItemName>{item}</ItemName>
            </CustomServigInfo>
          </CustomSpread>
        ))}
      </ServingOption>
    </ServingComponent>
  );
};

export default Serving;
