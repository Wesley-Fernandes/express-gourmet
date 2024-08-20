import { DeliveryInterface, DeliverysInterface } from "@/types/delivery";
import { foods_constant, foods_full_constant } from "./food";
import { user_constant } from "./user";
import { delivery_localization_constant } from "./localization";

const delivery:DeliveryInterface = {
    id: "6a579492-b6c4-4771-b931-53c10819cad4",
    name: "Lobão churrascaria",
    cellphone: "(11) 99999-9999",
    thumbnail: "https://www.rbsdirect.com.br/imagesrc/25712397.jpg?w=700",
    icon: "https://shrbspelotas.com.br/cache/e/1/0/a/b/e10abceb4738326f3337b7b4adf0359f7f8a6be8.png",
    description: "O melhor churrasco de pelotas, junto da mais rápida entrega de refeições.",
    localization: delivery_localization_constant,
    foods: foods_constant
};

const deliverys:DeliverysInterface[] = [
    {
        delivery: {
            id: "6a579492-b6c4-4771-b931-53c10819cad4",
            icon: "https://shrbspelotas.com.br/cache/e/1/0/a/b/e10abceb4738326f3337b7b4adf0359f7f8a6be8.png",
            name: "Lobão churrascaria",
        },
        id: "6ccd5e42-0a09-4025-898f-a7629eca3ee8",
        thumbnail: "https://www.juliatto.com.br/wp-content/uploads/2022/02/linguica-de-porco-tipos-de-preparos.jpg",
        name: "Costelas de bovino",
        category: "Churrasco",
        price: 20.0
    },
    {
        delivery: {
            icon: "https://shrbspelotas.com.br/cache/e/1/0/a/b/e10abceb4738326f3337b7b4adf0359f7f8a6be8.png",
            name: "Lobão churrascaria",
            id: "6a579492-b6c4-4771-b931-53c10819cad4",
        },
        thumbnail: "https://www.juliatto.com.br/wp-content/uploads/2022/02/linguica-de-porco-tipos-de-preparos.jpg",
        name: "Salchichão de porco",
        category: "Churrasco",
        price: 10.0,
        id: ""
       
    }

]



const CONSTANTS = {
    foods: foods_full_constant,
    deliverys,
    delivery,
    user: user_constant
}

export default CONSTANTS;