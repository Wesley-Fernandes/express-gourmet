"use client"
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

interface Props{
    error: string;
}

export default function ErrorPage({error}:Props) {
    const {back} = useRouter();
  return (
    <section className='flex h-screen flex-col justify-center items-center'>
        <div className='w-80 p-3'>
            <Button className='-ml-3 flex gap-1 items-center' onClick={back} variant="outline" >
                <ArrowLeft strokeWidth={1}/>
                Retornar
            </Button>
        </div>
        <div className='w-80 border p-4 flex flex-col bg-primary-foreground'>
            <h1 className='text-2xl font-black'>400</h1>
            <p>{error}</p>
        </div>
    </section>
  )
}
