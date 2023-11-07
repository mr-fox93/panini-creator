import styled from "styled-components";
import { useState, useEffect } from "react";
import { spreadVariant } from "../../data/spread";
import On from "../../arrows/On.svg";
import Off from "../../arrows/Off.svg";

const SpreadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 468px;
  height: 112px;
  margin-top: 15px;
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

const Spreads = () => {
  const [spreadsArray, setSpreadsArray] = useState<string[]>([]);

  const handleAddSpreadBtn = (item: string) => {
    setSpreadsArray((prevSpread) => {
      if (prevSpread.includes(item)) {
        return prevSpread.filter((x) => x !== item);
      } else {
        return [...prevSpread, item];
      }
    });
  };

  useEffect(() => {
    console.log(spreadsArray);
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
