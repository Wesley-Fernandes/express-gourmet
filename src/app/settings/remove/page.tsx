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
import { categorys } from '@/constants/constants'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { CategoryTypes, ComplementType } from '@/types/food'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import CreateNewComplement from '@/components/CreateNewComplement'
import { toast } from 'sonner'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/services/firebase-client'
export default function RemoveFoodPage() {
  const [complements, setComplements] = useState<ComplementType[]>([]);
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState<CategoryTypes>("Bebidas");
  const [description, setDescription] = useState('');

  const handleDeleteComplement = (name: string) => {
    const newComplements = complements.filter((complement) => complement.name!== name);
    setComplements(newComplements);
  };

  const create  = async () =>{
    if(!description||!name ||!thumbnail || !category || !price){
      toast.error("Preencha todos os dados...")
      return;
    }
    const dbRef = collection(db, "foods");
    await addDoc(dbRef, {
      name,
      thumbnail,
      price,
      category,
      description,
      complements,
    })

    toast.success("Prato criado com sucesso!");
    setName('');
    setThumbnail('');
    setPrice(0);
    setDescription('');
    setComplements([]);
    setCategory('Bebidas');
    return;

  }
  return (
    <main className='h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex flex-col gap-2 justify-center items-center flex-1 py-4'>
        <form  method="post" className='flex flex-col gap-2 p-2 rounded-md w-[90vw] sm:w-96'>
            <h1 className='w-full font-bold text-center uppercase'>Deletar um item</h1>
            <Input name='id' type='text' placeholder='Id do item' onChange={(e)=>setName(e.target.value)}/>
          <footer className='border-t h-14 w-full flex items-center justify-center'>
            <Button onClick={create} className='w-full'>Remover</Button>
          </footer>
        </form>
    </main>
  )
}
