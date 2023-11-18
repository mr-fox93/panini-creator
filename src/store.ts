import create from "zustand";
import { cheeseVariants } from "./data/cheese";

interface StoreState {
  servingArray: string;
  currentIndex: string;
  selectedOptions: string[];
  setSelectedOptions: (selectoedOptions: string[]) => void;
  setCurrentIndex: (currentIndex: string) => void;
  setServingArray: (servingArray: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  servingArray: "WARM",
  currentIndex: "FULL GRAIN",
  selectedOptions: [cheeseVariants[0]],
  setSelectedOptions: (selectedOptions) => set({ selectedOptions }),
  setServingArray: (servingArray) => set({ servingArray }),
  setCurrentIndex: (currentIndex) => set({ currentIndex }),
}));
