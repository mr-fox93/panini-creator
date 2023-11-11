import React, { useState } from "react";
import { z } from "zod";
import { dressingVariants } from "../data/dressing"; // Upewnij się, że ścieżka do importu jest poprawna

type SelectorData = {
  id: number;
  value: string;
};

export const dressingSchema = z
  .enum(["OLIVE OIL", "HONEY_MUSTARD", "RANCH", "MAYO"])
  .optional()
  .nullable();

const DressingCarousel: React.FC = () => {
  const [selectors, setSelectors] = useState<SelectorData[]>([
    { id: Date.now(), value: "OLIVE OIL" },
  ]);

  const addSelector = () => {
    setSelectors([...selectors, { id: Date.now(), value: "OLIVE OIL" }]);
  };

  const updateSelector = (id: number, value: string) => {
    setSelectors(
      selectors.map((selector) =>
        selector.id === id ? { ...selector, value } : selector
      )
    );
  };

  const collectData = () => {
    const dataArray = selectors.map((selector) => selector.value);
    console.log(dataArray); // setValue from hook to dataArray.
  };

  return (
    <div>
      {selectors.map((selector, index) => (
        <div key={selector.id}>
          <select
            value={selector.value}
            onChange={(e) => updateSelector(selector.id, e.target.value)}
          >
            {dressingVariants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
          {index === selectors.length - 1 && (
            <button onClick={addSelector}>Add Another Selector</button>
          )}
        </div>
      ))}
      <button onClick={collectData}>Collect Data</button>
    </div>
  );
};

export default DressingCarousel;

// import LeftArrowImage from "../arrows/Vector4.svg";
// import RightArrowImage from "../arrows/Vector3.svg";
// import { dressingVariants } from "../data/dressing";
// import styled from "styled-components";
// import { useState, useEffect } from "react";
// import SwichOn from "../arrows/SwichOn.svg";
// import SwichOff from "../arrows/SwichOff.svg";
// import { z } from "zod";
// import { useFormContext } from "react-hook-form";

// interface CarouselWrapProps {
//   isVisible: boolean;
// }

// const CarouselWrap = styled.div<CarouselWrapProps>`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   text-align: center;
//   gap: 20px;
//   width: 250px;
//   height: 35px;
//   visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
// `;

// const BreadAndLogoWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
// `;

// export const dressingSchema = z
//   .enum(["OLIVE OIL", "HONEY_MUSTARD", "RANCH", "MAYO"])
//   .optional()
//   .nullable();

// const DressingCarousel = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const { setValue } = useFormContext();

//   const visible = () => setIsVisible(!isVisible);

//   const uptadeDressing = (newIndex: number) => {
//     const newDressing = dressingVariants[newIndex] || "";
//     setValue("base.dressing", newDressing);
//   };

//   const nextDressing = () => {
//     const nextIndex = (currentIndex + 1) % dressingVariants.length;
//     setCurrentIndex(nextIndex);
//     uptadeDressing(nextIndex);
//   };

//   const prevDressing = () => {
//     const prevIndex =
//       (currentIndex - 1 + dressingVariants.length) % dressingVariants.length;
//     setCurrentIndex(prevIndex);
//     uptadeDressing(prevIndex);
//   };

//   useEffect(() => {
//     setValue(
//       "base.dressing",
//       isVisible ? dressingVariants[currentIndex] : undefined
//     );
//   }, [isVisible, currentIndex, setValue]);

//   return (
//     <>
//       <p>Dressing</p>
//       <img
//         onClick={visible}
//         src={(isVisible && SwichOn) || SwichOff}
//         alt={isVisible ? "SwichOn" : "SwichOff"}
//       />
//       <CarouselWrap isVisible={isVisible}>
//         <img
//           onClick={prevDressing}
//           style={{ cursor: "pointer" }}
//           src={RightArrowImage}
//           alt="Left Arrow"
//         />
//         <BreadAndLogoWrapper>
//           {dressingVariants[currentIndex]}
//         </BreadAndLogoWrapper>
//         <img
//           onClick={nextDressing}
//           style={{ cursor: "pointer" }}
//           src={LeftArrowImage}
//           alt="Right Arrow"
//         />
//       </CarouselWrap>
//     </>
//   );
// };

// export default DressingCarousel;
