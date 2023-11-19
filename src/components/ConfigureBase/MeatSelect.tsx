import { useState, Fragment } from "react";
import styled from "styled-components";
import SwichOn from "../../arrows/SwichOn.svg";
import SwichOff from "../../arrows/SwichOff.svg";
import Minus from "../../arrows/Minus.svg";
import Add from "../../arrows/PlusHover.svg";
import { meatVariants } from "../../data/meat";
import { z } from "zod";
import { useFormContext } from "react-hook-form";
import { useStore } from "../../store";

interface DropdownContainerProps {
  isVisible: boolean;
}

const DropdownContainer = styled.div`
  width: 250px;
  height: 35px;
  margin: 0;
  position: relative;
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

const DropdownsContainer = styled.div<DropdownContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  visibility: ${(props) => (props.isVisible ? "visible" : "none")};
  width: 250px;
`;

const DropdownWithRemove = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const RemoveButton = styled.img`
  cursor: pointer;
`;

export const meatSchema = z.array(
  z.union([
    z.literal("SALAMI"),
    z.literal("HAM"),
    z.literal("BACON"),
    z.literal("CHICKEN"),
  ])
);

const MeatSelect = () => {
  const [isVisible, setIsVisible] = useState(true);

  //const [meatOptions, setMeatOptions] = useState([meatVariants[0]]);
  const { meatOptions, setMeatOptions } = useStore();
  const [isOpen, setIsOpen] = useState([false]);
  const { setValue } = useFormContext();

  const toggling = (index: number) => {
    setIsOpen(isOpen.map((open, i) => (i === index ? !open : false)));
  };

  const visible = () => {
    const newVisibility = !isVisible;
    setIsVisible(newVisibility);
    if (newVisibility) {
      setMeatOptions([meatVariants[0]]);
      setIsOpen([false]);
    } else {
      setMeatOptions([]);
      setValue(`base.meat`, [], { shouldValidate: true });
    }
  };

  const onOptionClicked = (value: string, index: number) => () => {
    const newOptions = [...meatOptions];
    newOptions[index] = value;
    setMeatOptions(newOptions);
    toggling(index);
    setValue(`base.meat[${index}]`, value, { shouldValidate: true });
  };

  const addAnotherDropdown = () => {
    if (meatOptions.length < 3) {
      const newOptions = [...meatOptions, meatVariants[0]];
      setMeatOptions(newOptions);
      setIsOpen([...isOpen, false]);
      setValue(`base.meat`, newOptions, { shouldValidate: true });
    }
  };

  const removeDropdown = (index: number) => {
    const filteredOptions = meatOptions.filter((_, i) => i !== index);
    const filteredIsOpen = isOpen.filter((_, i) => i !== index);
    setMeatOptions(filteredOptions);
    setIsOpen(filteredIsOpen);
    setValue(`base.meat`, filteredOptions, { shouldValidate: true });
  };

  return (
    <>
      <p>Meat</p>
      <div>
        <img
          style={{ marginRight: "10px" }}
          onClick={visible}
          src={isVisible ? SwichOn : SwichOff}
          alt={isVisible ? "SwichOn" : "SwichOff"}
        />
        <img onClick={addAnotherDropdown} src={Add} alt="Add" />
      </div>
      <DropdownsContainer isVisible={isVisible}>
        {meatOptions.map((option, index) => (
          <DropdownWithRemove key={index}>
            {index !== 0 && (
              <RemoveButton
                src={Minus}
                alt="Remove"
                onClick={() => removeDropdown(index)}
              />
            )}
            <DropdownContainer>
              <DropdownHeader onClick={() => toggling(index)}>
                {option}
              </DropdownHeader>
              {isOpen[index] && (
                <DropdownListContainer>
                  <DropdownList>
                    {meatVariants.map((item, itemIndex) => (
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
    </>
  );
};

export default MeatSelect;

// import { meatVariants } from "../data/meat";
// import { useState } from "react";
// import styled from "styled-components";
// import SwichOn from "../arrows/SwichOn.svg";
// import SwichOff from "../arrows/SwichOff.svg";
// import { z } from "zod";
// import { useFormContext } from "react-hook-form";

// interface DropdownContainerProps {
//   isVisible: boolean;
// }

// const DropdownContainer = styled.div<DropdownContainerProps>`
//   width: 250px;
//   height: 35px;
//   margin: 0;
//   position: relative;
//   visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
// `;

// const DropdownHeader = styled.div`
//   text-align: center;
//   padding: 10px;
//   border: 1px solid #000;
//   cursor: pointer;
// `;

// const DropdownListContainer = styled.div`
//   position: absolute;
//   width: 100%;
//   border: 1px solid #000;
//   border-top: none;
//   z-index: 100;
//   background: #fff;
// `;

// const DropdownList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const ListItem = styled.li`
//   text-align: center;
//   padding: 10px;
//   border-bottom: 1px solid #000;
//   &:last-child {
//     border-bottom: none;
//   }
//   &:hover {
//     background-color: #f6f6f6;
//   }
// `;

// export const meatSchema = z.array(
//   z.union([
//     z.literal("SALAMI"),
//     z.literal("HAM"),
//     z.literal("BACON"),
//     z.literal("CHICKEN"),
//   ])
// );

// const MeatSelect = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isVisible, setIsVisible] = useState(true);
//   const { setValue } = useFormContext();

//   const toggling = () => setIsOpen(!isOpen);

//   const visible = () => setIsVisible(!isVisible);

//   const onOptionClicked = (value: any) => () => {
//     setSelectedOption(value);
//     setIsOpen(false);
//     setValue("base.meat", value);
//   };

//   return (
//     <>
//       <p style={{ marginRight: "17px" }}>Meat</p>

//       <img
//         onClick={visible}
//         src={(isVisible && SwichOn) || SwichOff}
//         alt={isVisible ? "SwichOn" : "SwichOff"}
//       />

//       <DropdownContainer isVisible={isVisible}>
//         <DropdownHeader onClick={toggling}>
//           {selectedOption || meatVariants[0]}
//         </DropdownHeader>
//         {isOpen && (
//           <DropdownListContainer>
//             <DropdownList>
//               {meatVariants.map((item, index) => (
//                 <ListItem onClick={onOptionClicked(item)} key={index}>
//                   {item}
//                 </ListItem>
//               ))}
//             </DropdownList>
//           </DropdownListContainer>
//         )}
//       </DropdownContainer>
//     </>
//   );
// };

// export default MeatSelect;
