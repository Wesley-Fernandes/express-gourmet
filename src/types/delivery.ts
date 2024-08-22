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
}

export interface DeliveryPartial{
    id: string;
    icon: string;
    name: string;
}


export interface DeliveryOrderPartial{
    id: string;
    icon: string;
    name: string;
    localization: LocalizationType;
}


export interface DeliverysInterface{
    thumbnail: string,
    name: string,
    category: CategoryTypes,
    price: number
    id: string;
}