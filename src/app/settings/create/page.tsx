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
export default function CreateFoodPage() {
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

   const request = await fetch("/api/food", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        thumbnail,
        name,
        category,
        price,
        description,
        enabled: true,
      }),
    })

    const data = await request.json() as {message: string};

    if(request.status === 200) {
      toast.success(data.message);
      setName('');
      setThumbnail('');
      setPrice(0);
      setDescription('');
      setComplements([]);
      setCategory('Bebidas');
      return;
    }
    toast.success(data.message);
    return;

  }
  return (
    <main className='h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex flex-col gap-2 justify-center items-center flex-1 py-4'>
        <form  method="post" className='flex flex-col gap-2 p-2 rounded-md w-[90vw] sm:w-96'>
            <h1 className='w-full font-bold text-center uppercase'>Criar novo item</h1>
            <Input name='name' type='text' placeholder='Nome do prato' onChange={(e)=>setName(e.target.value)}/>
            <Input name='thumbnail' type='text' placeholder='Url da imagem' onChange={(e)=>setThumbnail(e.target.value)}/>
            <Input name='price' type='number' min={0.10} placeholder='Valor do produto' onChange={(e)=>setPrice(Number(e.target.value))}/>
            <Select onValueChange={(e)=>setCategory(e as CategoryTypes)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                  {
                    categorys.map((category) =>(
                      <SelectItem value={category} key={category}>{category}</SelectItem>
                    ))
                  }
              </SelectContent>
            </Select>
            <Textarea onChange={(e)=>setDescription(e.target.value)} name='description' className='resize-none h-32' placeholder='Descrição do item...'/>
        </form>
        <div className='flex flex-1 flex-col items-center w-full justify-center'>
          <div className='h-14 border-b border-t flex items-center justify-around w-full'>
            <h1 className='font-bold uppercase text-center'>Complementos</h1>
            <CreateNewComplement setComplements={setComplements}/>
          </div>
          <ul className='flex flex-col p-2 w-full gap-4 flex-1 items-center overflow-y-scroll overflow-x-hidden'>
            {
              complements.map((complement)=>{
                return (
                    <li className='flex items-center w-80 max-w-80 border justify-between p-1 gap-2 shadow-md' key={complement.name}>
                      <div className='w-12 h-12'>
                        <img src={complement.thumbnail} alt="Imagem do prato" className='h-full w-full'/>
                      </div>
                      <div className='flex flex-1 justify-between'>
                        <div className='flex flex-col'>
                          <span className='font-bold text-sm'>{complement.name}</span>
                          <span className='text-sm'>{complement.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
                        </div>
                        <Button variant="destructive" size={'icon'} onClick={()=>handleDeleteComplement(complement.name)}>
                          <Trash2 strokeWidth={1.2}/>
                        </Button>
                      </div>
                  </li>
                )
              })
            }
          </ul>
          <footer className='border-t h-14 w-full flex items-center justify-center'>
            <Button onClick={create} className='w-96'>Criar novo item</Button>
          </footer>
        </div>
    </main>
  )
}
