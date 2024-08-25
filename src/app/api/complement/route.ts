
import database from "@/lib/prisma";
import { ComplementType } from "@/types/food";
import { NextResponse } from "next/server";

export async function POST(request:Request, { params }: { params: { id: string } }){
    try {
        const {name, price, thumbnail } = await request.json() as ComplementType;

        if(!params.id) return NextResponse.json({ message: "ID está faltando." }, {status: 404});

        await database.complement.create({
            data: {
                enabled: true,
                name,
                price,
                thumbnail
            }
        })
        return NextResponse.json({ message:"Complemente criado com sucesso!" }, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}


export async function GET(request:Request, { params }: { params: { id: string } }){
    try {
        if(!params.id) return NextResponse.json({ message: "ID está faltando." }, {status: 404});

        const data = await database.food.findUnique({where: { id: params.id}});
        if(!data) return NextResponse.json({ message: "Prato não existe." }, {status: 404});

        const complements = await database.complement.findMany();

        return NextResponse.json(complements, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}
