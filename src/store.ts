import create from "zustand";
import { cheeseVariants } from "./data/cheese";
import { meatVariants } from "./data/meat";
import { eggVariants } from "./data/egg";

type CarouselState = {
  index: number;
};

interface StoreState {
  servingArray: string;
  currentIndex: string;
  selectedOptions: string[];
  meatOptions: string[];
  carousels: CarouselState[];
  vegetableArray: string[];
  isVisible: boolean;
  sandwichName: string;
  spreadsArray: string[];
  topping: string | null;
  eggOptions: string[];
  setEggOptions: (eggOptions: string[]) => void;
  setTopping: (topping: string | null) => void;
  setSpreadsArray: (spreadsArray: string[]) => void;
  setSandwichName: (sandwichName: string) => void;
  setIsVisible: (isVisible: boolean) => void;
  setVegetableArray: (vegetableArray: string[]) => void;
  setCarousels: (carousels: CarouselState[]) => void;
  setMeatOptions: (meatOptions: string[]) => void;
  setSelectedOptions: (selectoedOptions: string[]) => void;
  setCurrentIndex: (currentIndex: string) => void;
  setServingArray: (servingArray: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  servingArray: "WARM",
  currentIndex: "FULL GRAIN",
  vegetableArray: ["SALAD", "PEPPER"],
  setVegetableArray: (vegetableArray) => set({ vegetableArray }),
  selectedOptions: [cheeseVariants[0]],
  meatOptions: [meatVariants[0]],
  isVisible: true,
  sandwichName: "",
  spreadsArray: [],
  topping: null,
  eggOptions: [eggVariants[0]],
  setEggOptions: (eggOptions) => set({ eggOptions }),
  setTopping: (topping) => set({ topping }),
  setSpreadsArray: (spreadsArray) => set({ spreadsArray }),
  setSandwichName: (sandwichName) => set({ sandwichName }),
  setIsVisible: (isVisible) => set({ isVisible }),
  carousels: <CarouselState[]>[{ index: 0 }],
  setCarousels: (carousels) => set({ carousels }),
  setMeatOptions: (meatOptions) => set({ meatOptions }),
  setSelectedOptions: (selectedOptions) => set({ selectedOptions }),
  setServingArray: (servingArray) => set({ servingArray }),
  setCurrentIndex: (currentIndex) => set({ currentIndex }),
}));
