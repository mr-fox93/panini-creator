import {
  Container,
  Header,
  Bar,
  Bread,
  Cheese,
  Meat,
  Dressing,
  Vegetables,
  PaniniName,
  RandomizedButton,
} from "./BaseForm.styles";
import CheeseSelect from "../CheeseSelect";
import BreadCarouseSelect from "../BreadCarouseSelect";
import MeatSelect from "../MeatSelect";
import DressingCarousel from "../DressingCarousel";
import VegetablesOptions from "../VegetablesOptions";
import styled from "styled-components";
import Dices from "../../arrows/Dices.svg";
import ConfigureExtras from "../ConfigureExtras/ConfigureExtras";

const MainHeader = styled.div`
  width: calc(630px + 2px);
  margin-left: -1px;
  margin-right: -1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const BaseForm = () => {
  return (
    <>
      <MainHeader>
        <PaniniName>Panini Creator</PaniniName>
        <RandomizedButton>
          <img src={Dices} alt="randomize panii" />
          <p>RANDOMIZED PANINI</p>
        </RandomizedButton>
      </MainHeader>
      <Container>
        <Header>CONFIGURE BASE</Header>
        <Bar />
        <Bread>
          <BreadCarouseSelect />
        </Bread>
        <Bar />
        <Cheese>
          <CheeseSelect />
        </Cheese>
        <Bar />
        <Meat>
          <MeatSelect />
        </Meat>
        <Bar />
        <Dressing>
          <DressingCarousel />
        </Dressing>
        <Bar />
        <Vegetables>
          <VegetablesOptions />
        </Vegetables>
        <Bar />
      </Container>
      <ConfigureExtras />
    </>
  );
};

export default BaseForm;
