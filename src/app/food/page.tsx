"use client"
import FoodOptions from '@/components/FoodOptions'
import Foods from '@/components/Foods'
import { useCategory } from '@/hooks/useCategory'
import { getFoodsByCategory } from '@/services/data'
import { FoodFullInterface } from '@/types/food'
import { useEffect, useState } from 'react'

export default function FoodsPage() {
  const {category} = useCategory()
  const [data, setData] = useState<FoodFullInterface[]>([]);
  
  useEffect(()=>{
    getFoodsByCategory({category, setData});
  }, [category])
  return (
    <main className='h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex flex-col flex-1'>
      <FoodOptions />
      <Foods category={category} data={data}/>
    </main>
  )
}
