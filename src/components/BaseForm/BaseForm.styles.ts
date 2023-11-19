import styled from "styled-components";
//import { device } from "../../GlobalStyle";
import GlobalStyle, { device } from "../../GlobalStyle";

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

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

export const Header = styled.div`
  font-size: 26px;
  font-weight: 400;
  margin-top: 86px;
  margin-bottom: 34px;
  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

export const Bar = styled.div`
  width: 469px;
  height: 1px;
  background-color: black;
  margin-top: 5px;
  margin-bottom: 10px;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

export const Bread = styled.div`
  width: 469px;
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

export const Cheese = styled.div`
  width: 469px;
  min-height: 79px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

export const Meat = styled.div`
  width: 469px;
  min-height: 79px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

export const Dressing = styled.div`
  width: 469px;
  min-height: 79px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

export const Vegetables = styled.div`
  width: 469px;
  height: 185px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

export const VegetablesOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  justify-items: end;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
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

  @media ${device.mobile} {
    border: none;
    font-size: 17px;
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

  @media ${device.mobile} {
    border: none;
    font-size: 17px;
  }
`;
