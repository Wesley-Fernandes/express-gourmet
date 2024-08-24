
import { ADMIN } from "@/services/firebase-admin";
import { getAuth } from "firebase-admin/auth";
import { NextResponse } from "next/server";

const errorExample = {
    errorInfo: {
        code: "",
        message: ""
      },
      codePrefix: "",
      page: ""
    }
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
        .catch((err: typeof errorExample)=>{
            console.log(err.errorInfo.message)
            return NextResponse.json({ message:err.errorInfo.message }, {status: 400});
        })
        return NextResponse.json({ message:"Atualizado com sucesso" }, {status: 201});
    } catch (err) {
        return NextResponse.json({ title: "Erro interno", description: "Tente novamente."}, {status: 500});
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
        return NextResponse.json({ title: "Erro interno", description: "Tente novamente."}, {status: 500});
    }
}
