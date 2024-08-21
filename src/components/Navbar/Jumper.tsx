import Link from 'next/link'
import React from 'react'

interface Props {
    children: React.ReactNode
    to: string
}
export default function Jumper({to, children}:Props) {
    
  return (
    <li className='pr-1 py-1 hover:text-red-600'>
        <Link href={to}>{children}</Link>
    </li>
  )
}
