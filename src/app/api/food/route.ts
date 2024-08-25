
import database from "@/lib/prisma";
import { FoodType } from "@/types/food";
import { NextResponse } from "next/server";


export async function POST(request:Request){
    try {
        const {
            category,
            description,
            name,
            price,
            thumbnail,
            enabled
        } = await request.json() as FoodType;
        if(!category||!description||!name||!price||!thumbnail||!enabled) {
            return NextResponse.json({ message:"Preencha todos os dados." }, {status: 400});
        }

        await database.food.create({data:{
            name,
            description,
            price,
            thumbnail,
            enabled: true,
            category
        }})

        return NextResponse.json({ message:"Comida criada com sucesso!" }, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}


export async function GET(request:Request){
    try {
        const foods = await database.food.findMany();
        return NextResponse.json(foods, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}
export async function DELETE(request:Request, { params }: { params: { id: string } }){
    try {
        if(!params.id){
            return NextResponse.json({ message: "ID está faltando." }, {status: 404});
        }

        await database.food.delete({where: {id: params.id}});

        return NextResponse.json({ message:"Comida deletada." }, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}
