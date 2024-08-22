import { DeliveryPartial } from "./delivery";

export type CategoryTypes = "Bebidas"|"Lanches"|"Pizzas"|"Sobremesas"|"Salgados"|"Doces"|"Café"|"Marmita"|"Churrasco";

export type ComplementType = {
    thumbnail: string;
    name: string;
    price: number;
};

export interface FoodFullInterface{
    id: string;
    thumbnail: string;
    name: string;
    category: CategoryTypes;
    price: number;
    description: string;
    complements?: ComplementType[];
    restaurant: DeliveryPartial
};


export interface FoodInterface{
    id: string;
    thumbnail: string;
    name: string;
    category: CategoryTypes;
    price: number;
};