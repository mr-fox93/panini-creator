import styled from "styled-components";
import EggSelect from "./EggSelect";
import Spreads from "./Spreads";
import Serving from "./Serving";
import Topping from "./Topping";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 630px;
  height: 623px;
  background: white;
  border: 1px solid black;
  margin: auto;
  margin-top: 50px;
`;

export const Header = styled.header`
  font-size: 26px;
  font-weight: 400;
  margin-top: 86px;
  margin-bottom: 34px;
`;

export const Bar = styled.div`
  width: 469px;
  height: 1px;
  background-color: black;
  margin-top: 5px;
`;

export const Egg = styled.div`
  width: 469px;
  min-height: 79px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const ConfigureExtras = () => {
  return (
    <Container>
      <Header>CONFIGURE EXTRAS</Header>
      <Bar />
      <Egg>
        <EggSelect />
      </Egg>
      <Bar />
      <Spreads />
      <Bar />
      <Serving />
      <Bar />
      <Topping />
      <Bar />
    </Container>
  );
};

export default ConfigureExtras;
