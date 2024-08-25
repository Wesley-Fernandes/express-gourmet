"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Item from './Item';
import { FoodFullInterface } from '@/types/food';
import LoadingComponent from './LoadingComponent';

interface Props{
    category: string;
}
export default function Foods({category}:Props) {
    const {data, error, isPending} = useQuery({
        queryKey: [category],
        queryFn: async ()=> {
          const req = await fetch(`/api/food/query/${category}`);
          const converted =await req.json();
          console.log(converted);
          return converted as FoodFullInterface[];
        },
        refetchOnWindowFocus: false,
        staleTime: 6000000000 * 60,
    })

    if(error) return <></>;
    if(isPending) return <LoadingComponent/>
    if(!data) return <></>
    if(data) return (
    <div className='flex flex-col'>
        <h1 className='font-bold text-lg text-amber-400'>{category}</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-col w-full">
            {data.length > 0 ? data.map((i)=>(<Item {...i} key={i.id}/>)):(
                <li className='flex justify-center items-center w-full h-full'>
                    <p>Nenhum item encontrado.</p>
                </li>
            )}
        </ul>
    </div>
  )
}
