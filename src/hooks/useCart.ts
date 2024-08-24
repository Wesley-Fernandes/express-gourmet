
import { ItemType } from "@/types/Order";
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware"

interface Props{
    cart: ItemType[];
    addItem: (item: ItemType) => void;
    addQuantity: (id: string) => void;
    removeQuantity: (id: string) => void;
    removeItem: (id: string) => void;
}


export const useCart = create(
    persist<Props>((set, get) =>({
        cart: [],
        addItem: (item: ItemType) => set({ cart: [...get().cart, item]}),
        removeItem: (id: string) => set({ cart: get().cart.filter((item: ItemType) => item.id!== id)}),
        removeQuantity: (id: string) => {
            const index = get().cart.findIndex(item => item.id === id);
            const data = get().cart;
            if(data[index].quantity - 1 <= 0){
                data.splice(index, 1);
            }else {
                data[index].quantity -= 1;
            }
            set({cart: [...data]})
        },
        addQuantity: (id: string) => {
            const index = get().cart.findIndex(item => item.id === id);
            const data = get().cart;
            data[index].quantity += 1;
            set({cart: [...data]})
        }
    }),{
        name: "cart",
        storage: createJSONStorage(()=>sessionStorage)
    }
));