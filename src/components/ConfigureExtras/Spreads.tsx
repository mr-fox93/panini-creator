import styled from "styled-components";
import { useState, useEffect } from "react";
import { spreadVariant } from "../../data/spread";
import On from "../../arrows/On.svg";
import Off from "../../arrows/Off.svg";
import { z } from "zod";
import { useFormContext } from "react-hook-form";
import { useStore } from "../../store";
import { device } from "../../GlobalStyle";

const SpreadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 468px;
  height: 112px;
  margin-top: 15px;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

const Header = styled.header`
  font-size: 18px;
  font-weight: 400;
`;

const SpreadOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CustomCheckbox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomCheckboxInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ItemName = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-right: 20px;
`;

const spreadOption = z.enum(spreadVariant as [string, ...string[]]);
export const spreadsSchema = z.array(spreadOption).optional();

const Spreads = () => {
  //const [spreadsArray, setSpreadsArray] = useState<string[]>([""]);
  const { spreadsArray, setSpreadsArray } = useStore();
  const { setValue } = useFormContext();

  const handleAddSpreadBtn = (item: string) => {
    const newSpreads = spreadsArray.includes(item)
      ? spreadsArray.filter((x) => x !== item)
      : [...spreadsArray, item];
    setSpreadsArray(newSpreads);
  };

  useEffect(() => {
    setValue("extras.spreads", spreadsArray);
  }, [spreadsArray]);

  return (
    <SpreadContainer>
      <Header>Spreads</Header>
      <SpreadOptions>
        {spreadVariant.map((item) => (
          <CustomCheckbox>
            <CustomCheckboxInfo onClick={() => handleAddSpreadBtn(item)}>
              <ItemName>{item}</ItemName>
              <img
                style={{ width: "17px", height: "17px" }}
                src={spreadsArray.includes(item) ? On : Off}
                alt="checkbox"
              />
            </CustomCheckboxInfo>
          </CustomCheckbox>
        ))}
      </SpreadOptions>
    </SpreadContainer>
  );
};

export default Spreads;
