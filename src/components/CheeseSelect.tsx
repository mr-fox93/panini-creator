import { useState, Fragment } from "react";
import styled from "styled-components";
import SwichOn from "../arrows/SwichOn.svg";
import SwichOff from "../arrows/SwichOff.svg";
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
    toggling(index); // Close the dropdown after selection
    setValue(`base.cheese[${index}]`, value, { shouldValidate: true });
  };

  const addAnotherDropdown = () => {
    setSelectedOptions([...selectedOptions, cheeseVariants[0]]);
    setIsOpen([...isOpen, false]);
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
        {isVisible &&
          selectedOptions.map((option, index) => (
            <DropdownContainer key={index} isVisible={isVisible}>
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
          ))}
      </DropdownsContainer>
    </Fragment>
  );
};

export default CustomDropdown;

//////
//////

// I try to implement my code to work like you see on screen.
// - default you see one select
// - you can add more select by click button '+'
// - you can choose another cheese in every single select.
// - add this to useFormContex by Array od one or many string.

// import { useState } from "react";
// import styled from "styled-components";
// import SwichOn from "../arrows/SwichOn.svg";
// import SwichOff from "../arrows/SwichOff.svg";
// import { cheeseVariants } from "../data/cheese";
// import { useFieldArray, useFormContext } from "react-hook-form";
// import { z } from "zod";

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

// export const cheeseSchema = z.array(
//   z.union([
//     z.literal("MOZZARELLA"),
//     z.literal("STRACIATELLA"),
//     z.literal("EDAM"),
//     z.literal("GOUDA"),
//   ])
// );

// const CustomDropdown = () => {
//   const { control, register } = useFormContext();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "base.cheese",
//   });
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isVisible, setIsVisible] = useState(true);

//   const toggling = () => setIsOpen(!isOpen);

//   const visible = () => setIsVisible(!isVisible);

//   const onOptionClicked = (value: any) => () => {
//     setSelectedOption(value);
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <p>Cheese</p>
//       <img
//         onClick={visible}
//         src={(isVisible && SwichOn) || SwichOff}
//         alt={isVisible ? "SwichOn" : "SwichOff"}
//       />

//       <DropdownContainer isVisible={isVisible}>
//         <DropdownHeader onClick={toggling}>
//           {selectedOption || cheeseVariants[0]}
//         </DropdownHeader>
//         {isOpen && (
//           <DropdownListContainer>
//             {fields.map((field, index) => (
//               <div key={field.id}>
//                 <DropdownList>
//                   <select {...register(`base.cheese.${index}`)}>
//                     {cheeseVariants.map((item) => (
//                       <ListItem onClick={onOptionClicked(item)} key={index}>
//                         {item}
//                       </ListItem>
//                     ))}
//                   </select>
//                 </DropdownList>
//               </div>
//             ))}
//           </DropdownListContainer>
//         )}
//       </DropdownContainer>
//     </>
//   );
// };

// export default CustomDropdown;

// import { useState } from "react";
// import styled from "styled-components";
// import SwichOn from "../arrows/SwichOn.svg";
// import SwichOff from "../arrows/SwichOff.svg";
// import { cheeseVariants } from "../data/cheese";
// import { useFieldArray, useFormContext } from "react-hook-form";
// import { z } from "zod";

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

// const Container = styled.div`
//   display: flex;
//   //align-items: center;
// `;

// const Selector = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const AddButton = styled.button`
//   width: 100px;
//   height: 30px;
//   color: red;
// `;

// const RemoveButton = styled.button`
//   width: 100px;
//   height: 30px;
//   color: red;
// `;

// export const cheeseSchema = z.array(
//   z.union([
//     z.literal("MOZZARELLA"),
//     z.literal("STRACIATELLA"),
//     z.literal("EDAM"),
//     z.literal("GOUDA"),
//   ])
// );

// const CustomDropdown = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const { control, register, watch, setValue } = useFormContext();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "base.cheese",
//   });

//   // State to handle which dropdown is open
//   const [openIndexes, setOpenIndexes] = useState({});

//   const toggling = (index: number) => {
//     setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   const visible = () => setIsVisible(!isVisible);

//   const onOptionClicked = (value: string, index: number) => () => {
//     setValue(`base.cheese.${index}`, value);
//     setOpenIndexes((prev) => ({ ...prev, [index]: false }));
//   };

//   return (
//     <>
//       <p>Cheese</p>
//       <img
//         onClick={visible}
//         src={isVisible ? SwichOn : SwichOff}
//         alt={isVisible ? "SwichOn" : "SwichOff"}
//       />
//       {fields.map((field, index) => (
//         <div key={field.id}>
//           <DropdownContainer isVisible={isVisible}>
//             <DropdownHeader onClick={() => toggling(index)}>
//               {watch(`base.cheese.${index}`) || cheeseVariants[0]}
//             </DropdownHeader>
//             {openIndexes[index] && (
//               <DropdownListContainer>
//                 <DropdownList>
//                   {cheeseVariants.map((item, itemIndex) => (
//                     <ListItem
//                       onClick={onOptionClicked(item, index)}
//                       key={itemIndex}
//                     >
//                       {item}
//                     </ListItem>
//                   ))}
//                 </DropdownList>
//               </DropdownListContainer>
//             )}
//           </DropdownContainer>
//           <RemoveButton
//             onClick={() => {
//               remove(index);
//               // Also update the openIndexes state to remove the entry for this index
//               const updatedOpenIndexes = { ...openIndexes };
//               delete updatedOpenIndexes[index];
//               setOpenIndexes(updatedOpenIndexes);
//             }}
//           >
//             Remove
//           </RemoveButton>
//         </div>
//       ))}
//       {fields.length < 4 && (
//         <AddButton
//           onClick={() => {
//             const newIndex = fields.length;
//             append(cheeseVariants[0]);
//             setOpenIndexes((prev) => ({ ...prev, [newIndex]: false }));
//           }}
//         >
//           Add Cheese
//         </AddButton>
//       )}
//     </>
//   );
// };

// export default CustomDropdown;

// import { useState } from "react";
// import styled from "styled-components";
// import SwichOn from "../arrows/SwichOn.svg";
// import SwichOff from "../arrows/SwichOff.svg";
// import { cheeseVariants } from "../data/cheese";

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

// const CustomDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isVisible, setIsVisible] = useState(true);

//   const toggling = () => setIsOpen(!isOpen);

//   const visible = () => setIsVisible(!isVisible);

//   const onOptionClicked = (value: any) => () => {
//     setSelectedOption(value);
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <p>Cheese</p>
//       <img
//         onClick={visible}
//         src={(isVisible && SwichOn) || SwichOff}
//         alt={isVisible ? "SwichOn" : "SwichOff"}
//       />

//       <DropdownContainer isVisible={isVisible}>
//         <DropdownHeader onClick={toggling}>
//           {selectedOption || cheeseVariants[0]}
//         </DropdownHeader>
//         {isOpen && (
//           <DropdownListContainer>
//             <DropdownList>
//               {cheeseVariants.map((item, index) => (
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

// export default CustomDropdown;

// import { useState } from "react";
// import styled from "styled-components";
// import SwichOn from "../arrows/SwichOn.svg";
// import SwichOff from "../arrows/SwichOff.svg";
// import { cheeseVariants } from "../data/cheese";
// import { useFieldArray, useFormContext } from "react-hook-form";
// import { z } from "zod";

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

// export const cheeseSchema = z.array(
//   z.union([
//     z.literal("MOZZARELLA"),
//     z.literal("STRACIATELLA"),
//     z.literal("EDAM"),
//     z.literal("GOUDA"),
//   ])
// );

// const CustomDropdown = () => {
//   const { control, register } = useFormContext();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "base.cheese",
//   });
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isVisible, setIsVisible] = useState(true);

//   const toggling = () => setIsOpen(!isOpen);

//   const visible = () => setIsVisible(!isVisible);

//   const onOptionClicked = (value: any) => () => {
//     setSelectedOption(value);
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <p>Cheese</p>
//       <img
//         onClick={visible}
//         src={(isVisible && SwichOn) || SwichOff}
//         alt={isVisible ? "SwichOn" : "SwichOff"}
//       />

//       <DropdownContainer isVisible={isVisible}>
//         <DropdownHeader onClick={toggling}>
//           {selectedOption || cheeseVariants[0]}
//         </DropdownHeader>
//         {isOpen && (
//           <DropdownListContainer>
//             {fields.map((field, index) => (
//               <div key={field.id}>
//                 <DropdownList>
//                   <select {...register(`base.cheese.${index}`)}>
//                     {cheeseVariants.map((item) => (
//                       <ListItem onClick={onOptionClicked(item)} key={index}>
//                         {item}
//                       </ListItem>
//                     ))}
//                   </select>
//                 </DropdownList>
//               </div>
//             ))}
//           </DropdownListContainer>
//         )}
//       </DropdownContainer>
//     </>
//   );
// };

// export default CustomDropdown;
