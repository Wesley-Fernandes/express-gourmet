import { CategoryTypes } from '@/types/food'
import { Beer, Drumstick, Pizza, Shirt } from 'lucide-react'

interface Props{
    category: CategoryTypes
}
export default function FoodOptionButtonIcon({category}:Props) {

    if(category === "Bebidas"){
        return <Beer size={24} strokeWidth={1.4} className='text-white'/>
    }else if(category === "Lanches"){
        return <Pizza size={24} strokeWidth={1.4} className='text-white'/>
    }else if(category === "Churrasco"){
       return <Drumstick size={24} strokeWidth={1.4} className='text-white'/>
    }else if(category === "Produtos"){
        return <Shirt size={24} strokeWidth={1.4} className='text-white'/>
    }
}
