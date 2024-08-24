"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { useStateComplementType } from "@/types/delivery"
import { toast } from "sonner"

interface Props{
    setComplements: useStateComplementType;
}
export default function CreateNewComplement({setComplements}:Props) {
    const [name, setName] =  useState("")
    const [price, setPrice] = useState(0)
    const [thumbnail, setThumbnail] = useState("")

    const create = () => {
        if(!name||!price||!thumbnail){
            toast.error("Preencha todos os dados.")
            return;
        }
        setComplements((prev)=> [...prev, {name, price, thumbnail}])
        setName("")
        setPrice(0)
        setThumbnail("")
        toast.success("Complemento criado.")
        return;
    }
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Adicionar</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Criando component</DialogTitle>
        <DialogDescription>
         Criando complementos para o prato.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-2">
        <Input name="name" type="text" placeholder="Nome do complemento" onChange={(e)=>setName(e.target.value)}/>
        <Input name="price" type="number" placeholder="Valor do item" onChange={(e)=>setPrice(Number(e.target.value))}/>
        <Input name="thumbnail" type="text" placeholder="Thumbnail do item" onChange={(e)=>setThumbnail(e.target.value)}/>
      </div>
      <DialogFooter>
        <Button type="submit" onClick={create}>Concluir</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}
