"use client"
import Item from '@/components/Item'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoaderCircle, Search } from 'lucide-react'
import { FoodFullInterface,} from '@/types/food'
import { FormEvent, useState } from 'react'
import { searchFoods } from '@/api/food'

export default function FoodSearch() {
  const [querys, setQuery] = useState<FoodFullInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const findData = async (e:FormEvent) => {
    setLoading(true);
    e.preventDefault();


    const target = e.target as typeof e.target & {
      name: {value: string},
    }
    const name = target.name.value.toLowerCase();

    if(!name){
      setQuery([]);
      setLoading(false);
      return;
    }

    const request = await searchFoods(name);
    console.log(request);
    setQuery(request);
    setLoading(false);
    return;
  }
  return (
    <main className='h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex flex-1'>
     <section className='p-4 flex flex-col flex-1 gap-4 container'>
        <form className="flex items-center gap-2" onSubmit={findData}>
          <Input type='text' name='name' placeholder='Procurar um item...'/> <Button className='flex items-center gap-1'>Procurar <Search strokeWidth={1} size={15}/></Button>
        </form>
        {
          loading && querys.length === 0 && (
            <div className='flex flex-1 justify-center items-center'>
              <LoaderCircle strokeWidth={1} size={40} className='animate-spin text-red-600'/>
            </div>
          )
        }
        {
          !loading && querys.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-2 flex-col w-full">
              {
                querys.map((delivery) => {
                  return (
                    <Item {...delivery} key={delivery.id}/>
                  )}
                )
              }
          </ul>
          )
        }

         {
          !loading && querys.length === 0 && (
            <div className='flex flex-1 justify-center items-center'>
              <span>Sem dados para amostrar.</span>
            </div>
          )
        }

     </section>
    </main>
  )
}
