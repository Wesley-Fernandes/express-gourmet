/* eslint-disable @next/next/no-img-element */
"use client"
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

type StatusTypes =  "admin"|"usuario"
export default function RemoveFoodPage() {
  const [admin, setAdmin] = useState<StatusTypes>("usuario");
  const [id, setId] = useState('');


  const create  = async (event:FormEvent) =>{
    event.preventDefault();
    if(!id|| !admin){
      toast.error("Preencha todos os dados...")
      return;
    }

    const request = await fetch(`/api/admin/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ admin }),
    });

    if(request.status == 201){
      const data = await request.json() as {message: string};
      toast.success(data.message);
      return;
    }
    const data = await request.json() as {message: string};
    setId("")
    toast.error(data.message);
    return;

  }
  return (
    <main className='h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex flex-col gap-2 justify-center items-center flex-1 py-4'>
        <form  method="post" className='flex flex-col gap-2 p-2 rounded-md w-[90vw] sm:w-96'>
            <h1 className='w-full font-bold text-center uppercase'>Atualizar um usuario</h1>
            <Input value={id} name='id' type='text' placeholder='Id do usuario' onChange={(e)=>setId(e.target.value)}/>
            <Select onValueChange={(e)=>setAdmin(e as StatusTypes)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin" key="admin">Converter para ADMIN</SelectItem>
                  <SelectItem value="usuario" key="usuario">Converter para USUARIO</SelectItem>
              </SelectContent>
            </Select>
          <footer className='border-t h-14 w-full flex items-center justify-center'>
            <Button onClick={create} className='w-full'>Converter usuario</Button>
          </footer>
        </form>
    </main>
  )
}
