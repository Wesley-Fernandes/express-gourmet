import { ComplementType, FoodFullInterface } from "@/types/food";

interface calculateTotalProps {
    data: FoodFullInterface;
    quantity: number;
    complements: ComplementType[];
}
export const calculateTotal = ({complements, quantity, data}:calculateTotalProps) => {

    let total = data.price * quantity;
    complements.forEach((complement) => {
      total += complement.price * quantity;
    });
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
  };
