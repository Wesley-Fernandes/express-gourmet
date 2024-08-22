import {  DeliveryOrderPartial } from "./delivery";
import { ComplementType } from "./food";
import { UserInterface } from "./user";

export type ItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    category: string;
    complements?: ComplementType[];
}

export type CategoryTypes = "Preparando" | "Entregando" | "Cancelado"|"Solicitando";

export interface OrderInterface{
    id?: string;
    items: ItemType[];
    delivery: DeliveryOrderPartial;
    user: UserInterface;
    status: CategoryTypes;
    timer?: number;
};

