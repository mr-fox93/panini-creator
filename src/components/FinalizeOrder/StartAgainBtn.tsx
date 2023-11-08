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
  return (
    <ButtonContainer>
      <Button>START AGAIN</Button>
    </ButtonContainer>
  );
};

export default StartAgain;
