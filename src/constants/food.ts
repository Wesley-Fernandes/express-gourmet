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
        "thumbnail": "https://minervafoods.com/wp-content/uploads/2022/12/costela_bovina-1.jpg",
        "name": "Costelas de bovino",
        "category": "Churrasco",
        "price": 20.0
    }
]


export const foods_full_constant: FoodFullInterface[] = [
  {
    "id": "bac271a0-8fc2-4dcc-9cfe-b3e7db2b5075",
    "thumbnail": "https://minervafoods.com/wp-content/uploads/2022/12/costela_bovina-1.jpg",
    "name": "Costelas de bovino",
    "category": "Churrasco",
    "price": 20.0,
    "description": "Grelhadas e com bastante tempeiro tropeiro.",
    "complements": [
        {
            "name": "Queijo",
            "price": 2.5,
            "thumbnail": "https://example.com/thumbnails/bacon.jpg"
        },
        {
            "name": "Salada de tomate",
            "price": 1.0,
            "thumbnail": "https://example.com/thumbnails/tomato.jpg"
        }
    ]
  },
  {
    "id": "6ccd5e42-0a09-4025-898f-a7629eca3ee8",
    "thumbnail": "https://www.juliatto.com.br/wp-content/uploads/2022/02/linguica-de-porco-tipos-de-preparos.jpg",
    "name": "Salchichão de porco",
    "category": "Churrasco",
    "price": 10.0,
    "description": "Salcichão de porco marinado com molho especial.",
    "complements": [
        {
            "name": "Queijo",
            "price": 2.5,
            "thumbnail": "https://example.com/thumbnails/bacon.jpg"
        },
        {
            "name": "Salada de tomate",
            "price": 1.0,
            "thumbnail": "https://example.com/thumbnails/tomato.jpg"
        },
        {
            "name": "Pimenta do reino",
            "price": 1.0,
            "thumbnail": "https://example.com/thumbnails/cheese.jpg"
        }
    ]

}
]