import { DeliveryInterface, DeliverysInterface } from "@/types/delivery";
import { delivery_localization_constant } from "./localization";
import { OrderInterface } from "@/types/Order";
import { CategoryTypes } from "@/types/food";

export const categorys:CategoryTypes[] = ["Bebidas","Lanches","Pizzas","Sobremesas","Salgados","Doces","Cafe","Marmita","Churrasco", "Produtos"]


const delivery:DeliveryInterface[] = [{
    id: "6a579492-b6c4-4771-b931-53c10819cad4",
    name: "Lobão churrascaria",
    cellphone: "(11) 99999-9999",
    thumbnail: "https://www.rbsdirect.com.br/imagesrc/25712397.jpg?w=700",
    icon: "https://shrbspelotas.com.br/cache/e/1/0/a/b/e10abceb4738326f3337b7b4adf0359f7f8a6be8.png",
    description: "O melhor churrasco de pelotas, junto da mais rápida entrega de refeições.",
    localization: delivery_localization_constant,
}];

const deliverys:DeliverysInterface[] = [
    {
        id: "bac271a0-8fc2-4dcc-9cfe-b3e7db2b5075",
        thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/06/338270535-costela-bovina-alho-poro-legumes.jpg",
        name: "Costelas de bovino",
        category: "Churrasco",
        price: 20.0
    },
    {
        thumbnail: "https://www.juliatto.com.br/wp-content/uploads/2022/02/linguica-de-porco-tipos-de-preparos.jpg",
        name: "Salchichão de porco",
        category: "Churrasco",
        price: 10.0,
        id: "6ccd5e42-0a09-4025-898f-a7629eca3ee8"
    }
]

const orders: OrderInterface[] = [
    {
        delivery: {
            id: "6a579492-b6c4-4771-b931-53c10819cad4",
            icon: "https://www.rbsdirect.com.br/imagesrc/25712397.jpg?w=700",
            name: "Lobão churrascaria",
            localization: {
                cep: "12345-678",
                houseNumber: "123",
                street: "Rua das Flores",
            }
        },
        items: [
            {
                category: "Churrasco",
                id: "6ccd5e42-0a09-4025-8",
                name: "Salchichão de porco",
                price: 10.0,
                quantity: 2,
                complements: [
                    {
                        name: "Queijo",
                        price: 2.5,
                        thumbnail: "https://dcdn.mitiendanube.com/stores/001/275/310/products/loja__0003s_0001_07-queijo-gruyere1-06074065446fbf220015977838350426-640-0.jpg"
                    }
                ],
                thumbnail: "https://www.juliatto.com.br/wp-content/uploads/2022/02/linguica-de-porco-tipos-de-preparos.jpg"
            }
        ],
        user: {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:",
            name: "Wesley Fernandes",
            id: "12345678-90ab-cdef-1234-567890abcdef",
            localization: {
                cep: "12345-678",
                houseNumber: "123",
                street: "Rua das Flores",
            }
        },
        id: "36174592-1234-5678-90ab-cdef12345100",
        status: "Solicitando"
    }
]