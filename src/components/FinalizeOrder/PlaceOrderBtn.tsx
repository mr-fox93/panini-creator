import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { device } from "../../GlobalStyle";
import { useStore } from "../../store";
import { Spinner } from "@chakra-ui/react";
import { Spinner as ChakraSpinner } from "@chakra-ui/react";

const StyledSpinner = styled(ChakraSpinner)`
  width: 11px;
  height: 11px;
`;

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
  text-align: center;
  align-items: center;
  border: none;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PlaceOrderBtn: React.FC = () => {
  const { isLoading } = useStore();
  return (
    <ButtonContainer>
      <Button type="submit">
        PLACE ORDER {isLoading && <StyledSpinner size="xl" />}
      </Button>
    </ButtonContainer>
  );
};

export default PlaceOrderBtn;
