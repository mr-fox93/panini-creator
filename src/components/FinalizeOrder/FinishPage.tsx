import { styled } from "styled-components";
import { useStore } from "../../store";
import { device } from "../../GlobalStyle";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2rem;
  width: 630px;
  height: auto;
  background: white;
  border: 1px solid black;
  margin: auto;

  @media ${device.mobile} {
    border: none;
    width: 69%;
  }
`;

export const Bar = styled.div`
  width: 469px;
  height: 1px;
  background-color: black;

  @media ${device.mobile} {
    border: none;
    width: 99%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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

  @media ${device.mobile} {
    width: 99%;
    margin-top: 15px;
  }
`;

const FinishPage = () => {
  const nav = useNavigate();
  const {
    sandwichName,
    servingArray,
    currentIndex,
    vegetableArray,
    selectedOptions,
    meatOptions,
    spreadsArray,
    topping,
    eggOptions,
    carousels,
    imageUrl,
  } = useStore();

  const handleClick = () => {
    nav("/");
  };
  return (
    <Container>
      <h1>Your Panini</h1>
      <Bar />
      <p>Panini Name: {sandwichName}</p>
      <Bar />

      <p>Bread: {currentIndex}</p>
      <Bar />

      <p>Serving: {servingArray}</p>
      <Bar />

      <p>Vegetables: {vegetableArray.map((item) => item + " / ")}</p>
      <Bar />

      <p>Chees: {selectedOptions}</p>
      <Bar />

      <p>Meat: {meatOptions.length > 2 ? meatOptions : "none"}</p>
      <Bar />
      <p>Your AI Panini</p>
      <Image src={imageUrl} alt="Your AI Panini" />
      <Button onClick={() => handleClick()}>HOME</Button>
    </Container>
  );
};

export default FinishPage;
