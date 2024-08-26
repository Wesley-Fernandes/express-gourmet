import { categorys } from "@/constants/constants";
import { CategoryTypes } from "@/types/food";
import {create} from "zustand";

interface Props{
    category: CategoryTypes;
    setCategory: (category: CategoryTypes) => void;
}

export const useCategory = create<Props>((set)=> ({
    category: "Bebidas",
    setCategory: (category: CategoryTypes) => set({category})
}))