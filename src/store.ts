import create from "zustand";
import { cheeseVariants } from "./data/cheese";
import { meatVariants } from "./data/meat";

type CarouselState = {
  index: number;
};

interface StoreState {
  servingArray: string;
  currentIndex: string;
  selectedOptions: string[];
  meatOptions: string[];
  carousels: CarouselState[];
  setCarousels: (carousels: CarouselState[]) => void;
  setMeatOptions: (meatOptions: string[]) => void;
  setSelectedOptions: (selectoedOptions: string[]) => void;
  setCurrentIndex: (currentIndex: string) => void;
  setServingArray: (servingArray: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  servingArray: "WARM",
  currentIndex: "FULL GRAIN",
  selectedOptions: [cheeseVariants[0]],
  meatOptions: [meatVariants[0]],
  carousels: [{ index: 0 }],
  setCarousels: (carousels) => set({ carousels }),
  setMeatOptions: (meatOptions) => set({ meatOptions }),
  setSelectedOptions: (selectedOptions) => set({ selectedOptions }),
  setServingArray: (servingArray) => set({ servingArray }),
  setCurrentIndex: (currentIndex) => set({ currentIndex }),
}));
