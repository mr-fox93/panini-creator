import styled from "styled-components";
import PaniniName from "./PaniniName";
import Cutlery from "./Cutlery";
import Napkins from "./Napkins";
import PlaceOrderBtn from "./PlaceOrderBtn";
import StartAgain from "./StartAgainBtn";
import { device } from "../../GlobalStyle";

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

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
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

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

const FinalizeOrder: React.FC = () => {
  return (
    <Container>
      <Header>FINALIZE ORDER</Header>
      <Bar />
      <PaniniName />
      <Bar />
      <Cutlery />
      <Bar />
      <Napkins />
      <Bar />
      <PlaceOrderBtn />
      <StartAgain />
    </Container>
  );
};

export default FinalizeOrder;
