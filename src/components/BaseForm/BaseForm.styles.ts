import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 630px;
  //height: 779px;
  min-height: 849px;
  height: auto;
  background: white;
  border: 1px solid black;
  margin: auto;
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
  margin-bottom: 10px;
`;

export const Bread = styled.div`
  width: 469px;
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const Cheese = styled.div`
  width: 469px;
  min-height: 79px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

export const Meat = styled.div`
  width: 469px;
  min-height: 79px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

export const Dressing = styled.div`
  width: 469px;
  min-height: 79px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

export const Vegetables = styled.div`
  width: 469px;
  height: 185px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const VegetablesOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  justify-items: end;
`;

export const Button = styled.button`
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

export const PaniniName = styled.p`
  font-size: 36px;
  font-weight: 400;
`;

export const RandomizedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  background: transparent;
  border: none;
`;
