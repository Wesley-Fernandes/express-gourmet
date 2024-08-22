/* eslint-disable @next/next/no-img-element */
import { DeliverysInterface } from '@/types/delivery'
import Link from 'next/link'
import React from 'react'


export default function Item(props:DeliverysInterface) {
  return (
    <Link href={`/food/${props.id}`} className="col-span-1 flex h-24 p-2 border rounded-md shadow-md hover:border-blue-400 cursor-pointer">
        <div className="w-24 overflow-hidden bg-blue-500 rounded-md">
            <img src={props.thumbnail} alt={props.name} className="object-cover h-full"/>
        </div>
        <div className="flex flex-col justify-between pl-2  flex-1">
            <span className="font-medium text-sm w-48">{props.name}</span>
            <div className="flex-1 flex justify-start items-start">
                <span className="border px-2 w-fit h-fit rounded-full text-xs bg-gray-600 text-white lowercase border-gray-700">{props.category}</span>
            </div>
            <span className="text-md sm:text-lg text-end font-bold">R$ {props.price}</span>
        </div>
    </Link>
  )
}
