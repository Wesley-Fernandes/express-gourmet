
import { ADMIN } from "@/services/firebase-admin";
import { FirebaseAdminError } from "@/types/Errors.types";
import { getAuth } from "firebase-admin/auth";
import { NextResponse } from "next/server";

export async function POST(request:Request, { params }: { params: { id: string } }){
    try {
        if(!params.id) return NextResponse.json({ message: "ID está faltando." }, {status: 404});
        
        const data = await request.json() as {admin: boolean}
        if(!data.admin) return NextResponse.json({ message:"Você precisa passar uma opção." }, {status: 401});

        await getAuth(ADMIN)
        .setCustomUserClaims(params.id, { admin: data.admin })
        .then((e)=>{
            console.log(e)
            return NextResponse.json({ message:"Sucesso ao atualizar o usuario." }, {status: 201});
        })
        .catch((err:FirebaseAdminError)=>{
            console.log(err.errorInfo.message)
            return NextResponse.json({ message:err.errorInfo.message }, {status: 400});
        })
        return NextResponse.json({ message:"Atualizado com sucesso" }, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}

export async function DELETE(request:Request, { params }: { params: { id: string } }){
    try {
        if(!params.id){
            return NextResponse.json({ message: "ID está faltando." }, {status: 404});
        }

        await getAuth(ADMIN).deleteUser(params.id)

        return NextResponse.json({ message:"Usuario deletado." }, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: "Erro interno. Tente novamente"}, {status: 500});
    }
}
