import styled from "styled-components";
import { servingVariant } from "../../data/serving";

const ServingComponent = styled.div`
  width: 468px;
  height: 35px;
  display: flex;
  margin-top: 15px;
  align-items: center;
  margin-bottom: 15px;
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
`;

const Serving = () => {
  return (
    <ServingComponent>
      <Header>Serving</Header>
      <ServingOption>
        {servingVariant.map((item) => (
          <CustomSpread>
            <CustomServigInfo>
              <ItemName>{item}</ItemName>
            </CustomServigInfo>
          </CustomSpread>
        ))}
      </ServingOption>
    </ServingComponent>
  );
};

export default Serving;
