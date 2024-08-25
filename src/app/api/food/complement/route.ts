import database from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(request:Request){
    try {
        const {foodID, complementID }: {foodID: string, complementID: string} = await request.json();
        if(!foodID||!complementID) return NextResponse.json({ message: "foodID e complementID estão faltando." }, {status: 404});
        
        await database.foodComplement.create({
            data: {
                complementId: foodID,
                foodId: complementID
            }
        });

        return NextResponse.json({ message: "Vinculo de complemento criado!"}, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}