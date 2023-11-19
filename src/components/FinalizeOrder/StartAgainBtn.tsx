import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../GlobalStyle";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 468px;
  height: 69px;
  margin-top: 5px;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

const Button = styled.button`
  width: 468px;
  height: 46px;
  background: white;
  border: none;
  color: black;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StartAgain = () => {
  const navigate = useNavigate();
  const { reset } = useFormContext();

  const handleStartAgain = () => {
    reset();
    navigate("/");
    window.location.reload();
  };
  return (
    <ButtonContainer>
      <Button onClick={() => handleStartAgain()} type="button">
        START AGAIN
      </Button>
    </ButtonContainer>
  );
};

export default StartAgain;
