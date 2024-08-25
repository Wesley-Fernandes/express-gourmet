import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function LoadingComponent() {
  return (
    <div className='flex flex-1 w-full justify-center items-center'>
        <LoaderCircle strokeWidth={1} size={40} className='animate-spin text-amber-600'/>
    </div>
  )
}
