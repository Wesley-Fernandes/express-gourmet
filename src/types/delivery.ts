import { CategoryTypes, FoodInterface } from "./food";
import { LocalizationType } from "./localization";

export interface DeliveryInterface{
    id: string;
    name: string;
    thumbnail: string;
    cellphone: string;
    icon: string;
    description: string;
    localization: LocalizationType;
    foods: FoodInterface[];
}

interface DeliveryPartial{
    id: string;
    name: string;
    icon: string;
}
export interface DeliverysInterface{
    thumbnail: string,
    name: string,
    category: CategoryTypes,
    price: number
    delivery: DeliveryPartial;
    id: string;
}