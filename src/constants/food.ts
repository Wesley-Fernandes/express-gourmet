import { FoodFullInterface, FoodInterface } from "@/types/food";

export const foods_constant:FoodInterface[] = [
      {
        "id": "6ccd5e42-0a09-4025-898f-a7629eca3ee8",
        "thumbnail": "https://www.juliatto.com.br/wp-content/uploads/2022/02/linguica-de-porco-tipos-de-preparos.jpg",
        "name": "Salchichão de porco",
        "category": "Churrasco",
        "price": 10.0
    },
      {
        "id": "bac271a0-8fc2-4dcc-9cfe-b3e7db2b5075",
        "thumbnail": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/06/338270535-costela-bovina-alho-poro-legumes.jpg",
        "name": "Costelas de bovino",
        "category": "Churrasco",
        "price": 20.0
    }
]


export const foods_full_constant: FoodFullInterface[] = [
  {
    "id": "bac271a0-8fc2-4dcc-9cfe-b3e7db2b5075",
    "thumbnail": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/06/338270535-costela-bovina-alho-poro-legumes.jpg",
    "name": "Costelas de bovino",
    "category": "Churrasco",
    "price": 20.0,
    restaurant: {
        id: "6a579492-b6c4-4771-b931-53c10819cad4",
        icon: "https://shrbspelotas.com.br/cache/e/1/0/a/b/e10abceb4738326f3337b7b4adf0359f7f8a6be8.png",
        name: "Lobão churrascaria",
    },
    "description": "Grelhadas e com bastante tempeiro tropeiro.",
    "complements": [
        {
            "name": "Queijo",
            "price": 2.5,
            "thumbnail": "https://dcdn.mitiendanube.com/stores/001/275/310/products/loja__0003s_0001_07-queijo-gruyere1-06074065446fbf220015977838350426-640-0.jpg"
        },
        {
            "name": "Salada de tomate",
            "price": 1.0,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGtWdxxdPMqeBu-ZAhYB1db8zu9cJZFG-rA&s"
        }
    ]
  },
  {
    "id": "6ccd5e42-0a09-4025-898f-a7629eca3ee8",
    "thumbnail": "https://www.juliatto.com.br/wp-content/uploads/2022/02/linguica-de-porco-tipos-de-preparos.jpg",
    "name": "Salchichão de porco",
    "category": "Churrasco",
    restaurant: {
        id: "6a579492-b6c4-4771-b931-53c10819cad4",
        icon: "https://shrbspelotas.com.br/cache/e/1/0/a/b/e10abceb4738326f3337b7b4adf0359f7f8a6be8.png",
        name: "Lobão churrascaria",
    },
    "price": 10.0,
    "description": "Salcichão de porco marinado com molho especial.",
    "complements": [
        {
            "name": "Queijo",
            "price": 2.5,
            "thumbnail": "https://dcdn.mitiendanube.com/stores/001/275/310/products/loja__0003s_0001_07-queijo-gruyere1-06074065446fbf220015977838350426-640-0.jpg"
        },
        {
            "name": "Salada de tomate",
            "price": 1.0,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGtWdxxdPMqeBu-ZAhYB1db8zu9cJZFG-rA&s"
        },
        {
            "name": "Pimenta do reino",
            "price": 1.0,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HR23IstDwvLQ3l21kqrOnSYERoNNdHYj9Q&s"
        }
    ]

}
]