"use client"
import Foods from '@/components/Foods'
import { categorys } from '@/constants/constants'

export default function FoodsPage() {
  return (
    <main className='h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex flex-1'>
     <section className='p-4 flex flex-col flex-1 gap-4 container'>
      {
        categorys.map((category) =>{
          return <Foods category={category} key={category}/>
        })
      }
     </section>
    </main>
  )
}
