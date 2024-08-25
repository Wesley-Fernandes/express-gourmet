
import database from "@/lib/prisma";
import { CategoryTypes } from "@/types/food";
import { NextResponse } from "next/server";


export async function GET(request:Request, { params }: { params: { query: CategoryTypes } }){
    try {
        if(!params.query) return NextResponse.json({ message: "ID está faltando." }, {status: 404});
        const datas = await database.food.findMany({where:{
            category: params.query
        }});
        if(!datas) return NextResponse.json([], {status: 404});
        return NextResponse.json(datas, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}

