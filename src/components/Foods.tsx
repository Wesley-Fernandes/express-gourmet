import Item from './Item';
import { FoodFullInterface } from '@/types/food';

interface Props{
    category: string;
    data: FoodFullInterface[];
}
export default function Foods({data, category}:Props) {
    return (
        <section className='p-4 flex flex-col flex-1 gap-4 container overflow-y-auto'>
      <h1 className='font-bold text-lg text-amber-400'>{category}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-col w-full">
        {data.length > 0 ? (
          data.map((i)=>(<Item {...i} key={i.id}/>))
        ): (
          <span>Sem dados...</span>
        )}
      </ul>
     </section>
    )
}
