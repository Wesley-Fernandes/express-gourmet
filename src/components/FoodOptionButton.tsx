"use client"
import { ReactNode } from 'react'
import { Button } from './ui/button'
import { useCategory } from '@/hooks/useCategory'
import { CategoryTypes } from '@/types/food';

interface Props {
    categoryType: CategoryTypes;
    children: ReactNode;
}
export function FoodOptionButton({categoryType, children}:Props) {
    const {setCategory, category} = useCategory();

    const action = () =>{
      setCategory(categoryType);
    }
  return (
    <Button onClick={action} size="icon" className={`bg-yellow-500 hover:bg-yellow-600 ${categoryType == category && "bg-yellow-600" } `}>
        {children}
    </Button>
  )
}
