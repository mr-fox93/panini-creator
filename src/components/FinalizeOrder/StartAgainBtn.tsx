import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 468px;
  height: 69px;
  margin-top: 5px;
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
  return (
    <ButtonContainer>
      <Button onClick={() => navigate("/")} type="button">
        START AGAIN
      </Button>
    </ButtonContainer>
  );
};

export default StartAgain;
