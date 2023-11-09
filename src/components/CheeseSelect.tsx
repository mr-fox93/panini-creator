import { useState, Fragment } from "react";
import styled from "styled-components";
import SwichOn from "../arrows/SwichOn.svg";
import SwichOff from "../arrows/SwichOff.svg";
import Minus from "../arrows/Minus.svg";
import Add from "../arrows/PlusHover.svg";
import { cheeseVariants } from "../data/cheese";
import { z } from "zod";
import { useFormContext } from "react-hook-form";

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
  margin-top:20px
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

const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const DropdownWithRemove = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RemoveButton = styled.img`
  cursor: pointer;
  margin-left: 10px;
`;

export const cheeseSchema = z.array(
  z.union([
    z.literal("MOZZARELLA"),
    z.literal("STRACIATELLA"),
    z.literal("EDAM"),
    z.literal("GOUDA"),
  ])
);

const CustomDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([cheeseVariants[0]]);
  const [isOpen, setIsOpen] = useState([false]);
  const [isVisible, setIsVisible] = useState(true);
  const { setValue } = useFormContext();

  const toggling = (index: number) => {
    setIsOpen(isOpen.map((open, i) => (i === index ? !open : false)));
  };

  const visible = () => setIsVisible(!isVisible);

  const onOptionClicked = (value: string, index: number) => () => {
    const newOptions = [...selectedOptions];
    newOptions[index] = value;
    setSelectedOptions(newOptions);
    toggling(index);
    setValue(`base.cheese[${index}]`, value, { shouldValidate: true });
  };

  const addAnotherDropdown = () => {
    if (selectedOptions.length < 3) {
      const newOptions = [...selectedOptions, cheeseVariants[0]];
      setSelectedOptions(newOptions);
      setIsOpen([...isOpen, false]);
      setValue(`base.cheese`, newOptions, { shouldValidate: true });
    }
  };

  const removeDropdown = (index: number) => {
    const filteredOptions = selectedOptions.filter((_, i) => i !== index);
    const filteredIsOpen = isOpen.filter((_, i) => i !== index);
    setSelectedOptions(filteredOptions);
    setIsOpen(filteredIsOpen);
    setValue(`base.cheese`, filteredOptions, { shouldValidate: true });
  };

  return (
    <Fragment>
      <p>Cheese</p>
      <div>
        <img
          style={{ marginRight: "10px" }}
          onClick={visible}
          src={isVisible ? SwichOn : SwichOff}
          alt={isVisible ? "SwichOn" : "SwichOff"}
        />
        <img onClick={addAnotherDropdown} src={Add} alt="Add" />
      </div>
      <DropdownsContainer>
        {selectedOptions.map((option, index) => (
          <DropdownWithRemove key={index}>
            {index !== 0 && (
              <RemoveButton
                src={Minus}
                alt="Remove"
                onClick={() => removeDropdown(index)}
              />
            )}
            <DropdownContainer isVisible={true}>
              <DropdownHeader onClick={() => toggling(index)}>
                {option}
              </DropdownHeader>
              {isOpen[index] && (
                <DropdownListContainer>
                  <DropdownList>
                    {cheeseVariants.map((item, itemIndex) => (
                      <ListItem
                        onClick={onOptionClicked(item, index)}
                        key={itemIndex}
                      >
                        {item}
                      </ListItem>
                    ))}
                  </DropdownList>
                </DropdownListContainer>
              )}
            </DropdownContainer>
          </DropdownWithRemove>
        ))}
      </DropdownsContainer>
    </Fragment>
  );
};

export default CustomDropdown;
