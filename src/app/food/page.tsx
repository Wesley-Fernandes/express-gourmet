"use client"
import Item from '@/components/Item'
import ErrorPage from '@/components/ErrorPage'
import LoadingPage from '@/components/LoadingPage'
import NotExist from '@/components/NotExist'
import { getFoods } from '@/api/food'
import { useQuery } from '@tanstack/react-query'
import Catalog from '@/components/Catalog'

export default function Foods() {
  const {data, isPending, error} = useQuery({
    queryKey: ['foods'],
    queryFn: async ()=> (await getFoods()),
    refetchOnWindowFocus: false,
    staleTime: 60000 * 60, // 1 minute
  })


  if(!data && !isPending && !error && data==null) return <NotExist/>;
  if(!data && isPending) return <LoadingPage/>;
  if(error) return <ErrorPage error={error.message}/>;
  if(data)return (
    <main className='h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex flex-1'>
     <section className='p-4 flex flex-col flex-1 gap-4 container'>
          {
            Object.entries(data).map(([category, foods]) => {
              return <Catalog category={category} foods={foods} key={category}/>
            })
          }
     </section>
    </main>
  )
}
