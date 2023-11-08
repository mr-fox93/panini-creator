import { useState } from "react";
import styled from "styled-components";
import SwichOn from "../../arrows/SwichOn.svg";
import SwichOff from "../../arrows/SwichOff.svg";
import Minus from "../../arrows/Minus.svg";
import { eggVariants } from "../../data/egg";

interface DropdownContainerProps {
  isVisible: boolean;
}

const DropdownContainer = styled.div<DropdownContainerProps>`
  width: 250px;
  height: 35px;
  margin: 0;
  position: relative;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;

const DropdownHeader = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid #000;
  cursor: pointer;
`;

const DropdownListContainer = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid #000;
  border-top: none;
  z-index: 100;
  background: #fff;
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #000;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f6f6f6;
  }
`;

const EggSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const toggling = () => setIsOpen(!isOpen);

  const visible = () => setIsVisible(!isVisible);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <>
      <p>Cheese</p>
      <img
        onClick={visible}
        src={(isVisible && SwichOn) || SwichOff}
        alt={isVisible ? "SwichOn" : "SwichOff"}
      />

      <DropdownContainer isVisible={isVisible}>
        <DropdownHeader onClick={toggling}>
          {selectedOption || eggVariants[0]}
        </DropdownHeader>
        {isOpen && (
          <DropdownListContainer>
            <DropdownList>
              {eggVariants.map((item, index) => (
                <ListItem onClick={onOptionClicked(item)} key={index}>
                  {item}
                </ListItem>
              ))}
            </DropdownList>
          </DropdownListContainer>
        )}
      </DropdownContainer>
    </>
  );
};

export default EggSelect;
