/* eslint-disable @next/next/no-img-element */
import { FoodFullInterface } from '@/types/food'
import Link from 'next/link'
import React from 'react'


export default function Item(props:FoodFullInterface) {
  return (
    <Link href={`/food/${props.id}`} className="col-span-1 flex min-h-fit p-2 border rounded-md shadow-md hover:border-blue-400 cursor-pointer">
        <div className="w-24 overflow-hidden bg-blue-500 rounded-md">
            <img src={props.thumbnail} alt={props.name} className="object-cover h-full"/>
        </div>
        <div className="flex flex-col justify-between pl-2  flex-1">
            <span className="font-semibold capitalize text-sm w-48">{props.name}</span>
            <div className="flex min-h-12 p-0.5 overflow-y-auto">
                <p className='text-xs opacity-65 w-full font-light'>{props.description}</p>
            </div>
            <span className="text-md sm:text-lg text-end font-bold">{Number(props.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
        </div>
    </Link>
  )
}
