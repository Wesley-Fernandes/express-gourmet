import database from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request:Request, { params }: { params: { id: string } }){
    try {
        if(!params.id) return NextResponse.json({ message: "ID está faltando." }, {status: 404});
        await database.foodComplement.delete({where:{id: params.id}});
        return NextResponse.json({ message:"Vinculo de complemento deletado." }, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}
