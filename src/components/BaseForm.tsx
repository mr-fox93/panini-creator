import styled from "styled-components";
import { vegetableVariant } from "../data/vegetable";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 630px;
  height: 779px;
  background: white;
  border: 1px solid black;
  margin: auto;
`;

const Header = styled.header`
  font-size: 26px;
  font-weight: 400;
  margin-top: 86px;
`;

const Bar = styled.div`
  width: 469px;
  height: 1px;
  background-color: black;
  margin-top: 5px;
`;

const Bread = styled.div`
  width: 469px;
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Cheese = styled.div`
  width: 469px;
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Meat = styled.div`
  width: 469px;
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dressing = styled.div`
  width: 469px;
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Vegetables = styled.div`
  width: 469px;
  height: 185px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const VegetablesOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  justify-items: end;
`;

const Button = styled.button`
  border: none;
  background: #f0f0f0;
  font-size: 12px;
  font-weight: 400;
  padding: 0.6rem;
  text-align: center;
  min-width: 70px;
  width: auto;

  &:active {
    border: 1px solid black;
    background: white;
  }
`;

const Select = styled.select`
  width: 250px;
  height: 35px;
  border: 0.5px solid black;
  background-color: transparent;
`;

const BaseForm = () => {
  return (
    <Container>
      <Header>CONFIGURE BASE</Header>
      <Bar />
      <Bread>
        <p>Bread</p>
        <p>FULL GRAIN</p>
      </Bread>
      <Bar />
      <Cheese>
        <p>Cheese</p>
        <p>switch</p>
        <Select>GOUDA</Select>
      </Cheese>
      <Bar />
      <Meat>
        <p>Meat</p>
        <p>switch</p>
        <Select>BACON</Select>
      </Meat>
      <Bar />
      <Dressing>
        <p>Dressing</p>
        <p>switch</p>
        <Select>OLIVE</Select>
      </Dressing>
      <Bar />
      <Vegetables>
        <p>Vegetables</p>
        <VegetablesOptions>
          {vegetableVariant.map((item) => (
            <Button>{item}</Button>
          ))}
        </VegetablesOptions>
      </Vegetables>
      <Bar />
    </Container>
  );
};

export default BaseForm;
