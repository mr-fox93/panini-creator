import { styled } from "styled-components";
import { useState } from "react";
import On from "../../arrows/On.svg";
import Off from "../../arrows/Off.svg";

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

const Cutlery = () => {
  const [cutlery, setCutlery] = useState<boolean>(false);

  const handleClick = () => {
    setCutlery(!cutlery);
  };

  return (
    <CutleryContainer>
      <Header>Cutlery</Header>
      <CutlerySelect onClick={() => handleClick()}>
        <ItemName>ADD TO ORDER</ItemName>
        <img
          style={{ width: "17px", height: "17px" }}
          src={(cutlery && On) || Off}
          alt="checkbox"
        />
      </CutlerySelect>
    </CutleryContainer>
  );
};

export default Cutlery;
