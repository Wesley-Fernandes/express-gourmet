import { Prisma } from "@prisma/client";
import { DeliveryPartial } from "./delivery";

export type CategoryTypes = "Bebidas"|"Lanches"|"Pizzas"|"Sobremesas"|"Salgados"|"Doces"|"Cafe"|"Marmita"|"Churrasco"|"Produtos";

export type FoodType = Prisma.FoodGetPayload<{
    select: {
        thumbnail: true;
        name: true;
        category: true;
        price: true;
        description: true;
        complements: true;
        enabled: true;
    }
}>;

export type ComplementType = Prisma.ComplementGetPayload<{
    select:{
        name: true;
        price: true;
        thumbnail: true;
    }
}>
export interface FoodFullInterface{
    id: string;
    thumbnail: string;
    name: string;
    category: CategoryTypes;
    price: number;
    description: string;
    complements: ComplementType[];
};


export interface FoodInterface{
    id: string;
    thumbnail: string;
    name: string;
    category: CategoryTypes;
    price: number;
};