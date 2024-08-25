import database from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request:Request, { params }: { params: { id: string } }){
    try {
        if(!params.id) return NextResponse.json({ message: "ID está faltando." }, {status: 404});
        const data = await database.complement.findUnique({where:{id: params.id}});
        if(!data) return NextResponse.json({ message: "Complemento não encontrado." }, {status: 404});
        return NextResponse.json(data, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}

export async function DELETE(request:Request, { params }: { params: { id: string } }){
    try {
        if(!params.id){
            return NextResponse.json({ message: "ID está faltando." }, {status: 404});
        }

        await database.complement.delete({
            where: {
                id: params.id
            }
        })

        return NextResponse.json({ message:"Complemento deletado." }, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}
