import { LoaderCircle } from 'lucide-react'

export default function LoadingPage() {
  return (
    <section className='flex flex-col h-screen justify-center items-center'>
        <LoaderCircle strokeWidth={1} size={40} className='animate-spin text-red-600'/>
        <div className='w-80 border p-4 flex flex-col bg-primary-foreground'>
          <h1 className='text-2xl font-black'>Carregando...</h1>
          <p>Por favor, aguarde um momento.</p>
        </div>
    </section>
  )
}
