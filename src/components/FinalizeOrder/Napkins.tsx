import { styled } from "styled-components";
import { useState } from "react";
import On from "../../arrows/On.svg";
import Off from "../../arrows/Off.svg";

const NapkinsContainer = styled.div`
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

const Napkins = () => {
  const [napkins, setNapkins] = useState<boolean>(false);

  const handleClick = () => {
    setNapkins(!napkins);
  };

  return (
    <NapkinsContainer>
      <Header>Napkins</Header>
      <NapkinsSelect onClick={() => handleClick()}>
        <ItemName>ADD TO ORDER</ItemName>
        <img
          style={{ width: "17px", height: "17px" }}
          src={(napkins && On) || Off}
          alt="checkbox"
        />
      </NapkinsSelect>
    </NapkinsContainer>
  );
};

export default Napkins;
