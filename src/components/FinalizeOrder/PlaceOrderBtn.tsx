import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { device } from "../../GlobalStyle";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 468px;
  height: 69px;
  margin-top: 50px;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

const Button = styled.button`
  width: 468px;
  height: 46px;
  background: black;
  border: none;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PlaceOrderBtn: React.FC = () => {
  return (
    <ButtonContainer>
      <Button type="submit">PLACE ORDER</Button>
    </ButtonContainer>
  );
};

export default PlaceOrderBtn;
