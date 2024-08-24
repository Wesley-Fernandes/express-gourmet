import { FoodFullInterface } from '@/types/food'
import Item from './Item'
interface Props{
    foods: FoodFullInterface[]
    category: string;
}
export default function Catalog({foods, category}:Props) {
  return (
    <div className='flex flex-col'>
        <h1 className='font-bold text-lg'>{category}</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-col w-full">
        {
            foods.map(food => {
                return <Item {...food} key={food.id}/>
              })
        }
        </ul>
    </div>
  )
}
