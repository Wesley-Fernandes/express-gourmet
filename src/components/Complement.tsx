/* eslint-disable @next/next/no-img-element */
"use client"
import { ComplementType } from '@/types/food'
import { Dispatch } from 'react'
import { Switch } from './ui/switch';
interface Props{
    complement: ComplementType;
    complements: ComplementType[];
    setComplements: Dispatch<React.SetStateAction<ComplementType[]>>;
}
export function Complement({complement, setComplements}:Props) {
    const price = complement.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})

    const  handleToggle = (checked:Boolean) => {
        switch(checked){
            case true:
                setComplements((prev:ComplementType[]) =>  [...prev, complement]);
                return complement.price;
            case false:
                return setComplements((prev:ComplementType[]) =>  prev.filter((item) => item.name!== complement.name));
        }
    };
  return (
    <div key={complement.name} className="flex items-center justify-between gap-1">
        <div className='flex items-center gap-2'>
            <div className="w-10 h-10 border p-1 rounded-md">
                <img src={complement.thumbnail} alt={complement.name} className="w-full h-full mr-2 rounded-sm"/>
            </div>
            <div className='flex flex-col'>
                <span className='font-semibold'>{complement.name}</span>
                <span className='text-xs opacity-60'>{complement.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
            </div>
        </div>
        <Switch onCheckedChange={handleToggle}/>
    </div>
  )
}
