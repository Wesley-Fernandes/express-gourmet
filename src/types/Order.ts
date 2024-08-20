import { DeliveryInterface } from "./delivery";
import { UserInterface } from "./user";

export type ItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    category: string;
}

export interface OrderInterface{
    id?: string;
    items: ItemType[];
    delivery: DeliveryInterface;
    user: UserInterface;
};